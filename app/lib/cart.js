'use server'
import Redis from 'ioredis';
import { v4 as uuid } from "uuid";
// import {getRabbitMQChannel} from './rabbitmq'
import { cookies } from 'next/headers';

const redis = new Redis({
  host: 'redis-17264.c90.us-east-1-3.ec2.redns.redis-cloud.com',
  port: 17264,
  password: 'Tpbv9doT5q2mdpw6BHEa0Kk5uksHZ6kf'
});

export const getCartId = async () => {
  const userId = cookies().get('userId')?.value;
  if (userId) {
    return `${userId}`;
  }
  const cartId = cookies().get('cartId')?.value;
  if (cartId) {
    return cartId;
  }
  const Id = uuid().replace(/-/g, "").toUpperCase();
  cookies().set('cartId', Id);
  return Id;
};

export const addToCart = async (productObj) => {
  try {
    const cartId = await getCartId();
    const existingCartData = await getCartData();

    const lines = existingCartData ? existingCartData.lines : [];
    const existingProductIndex = lines.findIndex(item => item.productId === productObj.productId);

    if (existingProductIndex !== -1) {
      lines[existingProductIndex].quantity += 1;
    } else {
      lines.push({ ...productObj, quantity: 1 });
    }

    const cartObj = {
      cartId: cartId,
      lines: lines
    };
      // const message = JSON.stringify({ productObj, cartId: cartId });
        // console.log(message,'msg')
        // const channel = await getRabbitMQChannel(); 
        // await channel.assertQueue('cart_discount_calculation' ,{ durable: true });
        // await channel.sendToQueue('cart_discount_calculation', Buffer.from(message),{persistent: true});
        // console.log('Message sent to RabbitMQ for discount calculation:', message);

    await performCartCalculations(cartObj);
    await redis.hset(`cart:${cartId}`, 'lines', JSON.stringify(cartObj));
    const itemCount = await getCartItemCount();


    return {cartObj,itemCount};
  } catch (error) {
    console.error('Error adding to cart:', error);
    return false;
  }
};

export const getCartData = async () => {
  try {
    const cartId = await getCartId();
    const cartData = await redis.hget(`cart:${cartId}`, 'lines');
    if (cartData) {
      return JSON.parse(cartData);
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting cart data:', error);
    return null;
  }
};

export const performCartCalculations = async (cartObj) => {
  try {
    if (!cartObj) {
      console.error('No cart data available.');
      return null;
    }

    let total = 0;
    cartObj.lines.forEach(item => {
      item.subtotal = item.quantity * item.sunitprice;
      total += item.quantity * item.sunitprice;
    });

    cartObj.total = total;
    await redis.hset(`cart:${cartObj.cartId}`, 'lines', JSON.stringify(cartObj));

    return cartObj;
  } catch (error) {
    console.error('Error performing cart calculations:', error);
    return null;
  }
};

export const removeFromCart = async (productId) => {
  try {
    const cartId = await getCartId();
    const existingCartData = await getCartData();
    const lines = existingCartData ? existingCartData.lines : [];
    const existingProductIndex = lines.findIndex(item => item.productId === productId);

    if (existingProductIndex !== -1) {
      lines.splice(existingProductIndex, 1);

      const cartObj = {
        cartId: cartId,
        lines: lines
      };

      await performCartCalculations(cartObj);
      await redis.hset(`cart:${cartId}`, 'lines', JSON.stringify(cartObj));
      const itemCount = await getCartItemCount();

      return {cartObj,itemCount};
    } else {
      console.error('Product not found in the cart.');
      return false;
    }
  } catch (error) {
    console.error('Error removing from cart:', error);
    return false;
  }
};

export const updateQty = async (productId, newQuantity) => {
  try {
    const cartId = await getCartId();
    const existingCartData = await getCartData();
    const lines = existingCartData ? existingCartData.lines : [];
    const existingProductIndex = lines.findIndex(item => item.productId === productId);

    if (existingProductIndex !== -1) {
      if (newQuantity <= 0) {
        lines.splice(existingProductIndex, 1);
      } else {
        lines[existingProductIndex].quantity = newQuantity;
      }

      const cartObj = {
        cartId: cartId,
        lines: lines
      };

      await performCartCalculations(cartObj);
      await redis.hset(`cart:${cartId}`, 'lines', JSON.stringify(cartObj));
      return cartObj;
    } else {
      console.error('Product not found in the cart.');
      return false;
    }
  } catch (error) {
    console.error('Error updating quantity:', error);
    return false;
  }
};

// Merge temporary cart with user's cart after sign-in
export const mergeCarts = async (userId) => {
  try {
    const tempCartId = cookies().get('cartId')?.value;

    if (tempCartId) {
      const tempCartData = await redis.hget(`cart:${tempCartId}`, 'lines');

      if (tempCartData) {
        let tempCartObj;
        try {
          tempCartObj = JSON.parse(tempCartData);
        } catch (e) {
          console.error('Error parsing temporary cart data:', e);
          tempCartObj = null;
        }

        if (tempCartObj && Array.isArray(tempCartObj.lines)) {
          const tempCartItems = tempCartObj.lines;

          const userCartId = `${userId}`;
          const existingCartData = await getCartData();

          const lines = existingCartData ? existingCartData.lines : [];
          tempCartItems.forEach(product => {
            const existingProductIndex = lines.findIndex(item => item.productId === product.productId);

            if (existingProductIndex !== -1) {
              lines[existingProductIndex].quantity += product.quantity;
            } else {
              lines.push(product);
            }
          });

          const cartObj = {
            cartId: userCartId,
            lines: lines
          };

          await performCartCalculations(cartObj);
          await redis.hset(`cart:${userCartId}`, 'lines', JSON.stringify(cartObj));

          // Clear temporary cart after merging
          await redis.del(`cart:${tempCartId}`);
          cookies().delete('cartId', '');

          return cartObj;
        } else {
          console.error('Temporary cart data does not contain a valid lines array:', tempCartObj);
        }
      }
    }

    return null; // No items to merge
  } catch (error) {
    console.error('Error merging carts:', error);
    return null;
  }
};

// Function to get the total number of items in the cart
export const getCartItemCount = async () => {
  console.log("inside get cart count=========")
  try {
    const existingCartData = await getCartData();
    console.log("existingCartData================>",existingCartData)
    if (existingCartData) {
      // Calculate total quantity
      console.log("existingCartData inside if================>",existingCartData)
      const totalQuantity = existingCartData.lines.length
      console.log("total Qty=================>",totalQuantity)
      return totalQuantity;
    } else {
      return 0; // No items in the cart
    }
  } catch (error) {
    console.error('Error getting cart item count:', error);
    return 0;
  }
};

