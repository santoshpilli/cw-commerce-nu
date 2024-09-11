
// const { consumeMessages } = require('./rabbitmq');
// const discountCalculationQueueName = 'cart_discount_calculation';
// const updatedCartQueueName = 'cart_update';

// consumeMessages(discountCalculationQueueName, async (message) => {
//   try {
//       // Perform discount calculation here
//       const updatedCart = performDiscountCalculation(message);

//       // Publish updated cart message to a different queue
//       const channel = await getRabbitMQChannel();
//       await channel.assertQueue(updatedCartQueueName);
//       await channel.sendToQueue(updatedCartQueueName, Buffer.from(JSON.stringify(updatedCart)));
//   } catch (error) {
//       console.error('Error processing message:', error);
//   }
// });

// const performDiscountCalculation = (message) => {
//   // Perform your discount calculation here
//   // Replace this with your actual discount calculation logic
//   const { productObj, cartId } = message;
//   const discountedPrice = productObj.sunitprice * 0.9; // Example: 10% discount
//   return { productObj: { ...productObj, discountedPrice }, cartId };
// };



const { consumeMessages, getRabbitMQChannel } = require('./rabbitmq');
const discountCalculationQueueName = 'cart_discount_calculation';
const updatedCartQueueName = 'cart_update';
// const { getCartData } = require('./cart'); // Import the getCartData function

consumeMessages(discountCalculationQueueName, async (message) => {
    try {
        // Perform discount calculation here
        const updatedCart = performDiscountCalculation(message);

        const channel = await getRabbitMQChannel();
        await channel.assertQueue(updatedCartQueueName);
        await channel.sendToQueue(updatedCartQueueName, Buffer.from(JSON.stringify(updatedCart)));
    } catch (error) {
        console.error('Error processing message:', error);
    }
});

consumeMessages(updatedCartQueueName, async (message) => {
    try {
      console.log("message===================>",message)
        const updatedCartData = JSON.parse(message.content.toString());
        console.log("updatedCartData===================>",updatedCartData)
        // await updateCartDataInRedis(updatedCartData);
    } catch (error) {
        console.error('Error processing updated cart message:', error);
    }
});

const performDiscountCalculation = (message) => {
    
    const { productObj, cartId } = message;
    const discountedPrice = productObj.sunitprice * 0.9; 
    console.log("discountedPrice=================>",discountedPrice)
    return { productObj: { ...productObj, discountedPrice }, cartId };
};

const updateCartDataInRedis = async (updatedCartData) => {
    try {
        await redis.set(`cart:${updatedCartData.cartId}`, JSON.stringify(updatedCartData));
    } catch (error) {
        console.error('Error updating cart data in Redis:', error);
    }
};
