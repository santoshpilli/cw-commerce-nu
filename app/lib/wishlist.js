'use server'
import Redis from 'ioredis';
import { v4 as uuid } from "uuid";
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
  const profileId = cookies().get('profileId')?.value;
  if (profileId) {
    return profileId;
  }
  const Id = uuid().replace(/-/g, "").toUpperCase();
  cookies().set('profileId', Id);
  return Id;
};

export const addToWishlist = async (productObj) => {
  try {
    const wishlistId = await getCartId();
    const existingWishlistData = await getWishlistData();

    const lines = existingWishlistData ? existingWishlistData.lines : [];
    const existingProductIndex = lines.findIndex(item => item.productId === productObj.productId);

    if (existingProductIndex !== -1) {
      console.log('item is already in wishlist')
    } else {
      lines.push({ ...productObj, quantity: 1 });
    }

    const wishlistObj = {
        wishlistId: wishlistId,
      lines: lines
    };
    await redis.hset(`wishlistId:${wishlistId}`, 'lines', JSON.stringify(wishlistObj));
    // console.log('added',wishlistObj)

    return wishlistObj;
  } catch (error) {
    console.error('Error adding to wishlist:', error);
    return false;
  }
};

export const getWishlistData = async () => {
  try {
    const wishlistId = await getCartId();
    // console.log('wid',wishlistId)
    const wishlistData = await redis.hget(`wishlistId:${wishlistId}`, 'lines');
    // console.log('wdata==>',wishlistData)
    if (wishlistData) {
      return JSON.parse(wishlistData);
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error getting wishlist data:', error);
    return null;
  }
};

export const removeFromWishlist = async (productId) => {
  try {
    const wishlistId = await getCartId();
    const existingWishlistData = await getWishlistData();
    const lines = existingWishlistData ? existingWishlistData.lines : [];
    const existingProductIndex = lines.findIndex(item => item.productId === productId);

    if (existingProductIndex !== -1) {
      lines.splice(existingProductIndex, 1);

      const wishlistObj = {
        wishlistId: wishlistId,
        lines: lines
      };

      await redis.hset(`wishlistId:${wishlistId}`, 'lines', JSON.stringify(wishlistObj));
      return wishlistObj;
    } else {
      console.error('Product not found in the wishlist.');
      return false;
    }
  } catch (error) {
    console.error('Error removing from wishlist:', error);
    return false;
  }
};

// Merge temporary cart with user's cart after sign-in
export const mergeWishlists = async (userId) => {
  try {
    const tempProfileId = cookies().get('profileId')?.value;

    if (tempProfileId) {
      const tempWishlistData = await redis.hget(`wishlistId:${tempProfileId}`, 'lines');

      if (tempWishlistData) {
        let tempWishlistObj;
        try {
            tempWishlistObj = JSON.parse(tempWishlistData);
        } catch (e) {
          console.error('Error parsing temporary cart data:', e);
          tempWishlistObj = null;
        }

        if (tempWishlistObj && Array.isArray(tempWishlistObj.lines)) {
          const tempWishlistItems = tempWishlistObj.lines;

          const userWishlistId = `${userId}`;
          const existingWishlistData = await getWishlistData();

          const lines = existingWishlistData ? existingWishlistData.lines : [];
          tempWishlistItems.forEach(product => {
            const existingProductIndex = lines.findIndex(item => item.productId === product.productId);

            if (existingProductIndex !== -1) {
              lines[existingProductIndex].quantity += product.quantity;
            } else {
              lines.push(product);
            }
          });

          const wishlistObj = {
            wishlistId: userWishlistId,
            lines: lines
          };

          await redis.hset(`wishlistId:${userWishlistId}`, 'lines', JSON.stringify(wishlistObj));

          // Clear temporary cart after merging
          await redis.del(`wishlistId:${tempProfileId}`);
          cookies().delete('profileId', '');

          return wishlistObj;
        }
      }
    }

    return null; // No items to merge
  } catch (error) {
    console.error('Error merging wishlists:', error);
    return null;
  }
};
