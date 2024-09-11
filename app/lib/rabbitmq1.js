
const amqp = require('amqplib');

let channel;

 const connectToRabbitMQ = async() => { 
    try {
        // const connection = await amqp.connect('amqp://localhost:5672'); 
        const connection = await amqp.connect('amqps://rbrocebb:dlN71VSJ_Ae66WG4RdAYynbkHnipPcUK@puffin.rmq2.cloudamqp.com/rbrocebb',{
          heartbeat: 60
        }); 
        channel = await connection.createChannel();
        return channel;
    } catch (error) {
        console.error('Error connecting to RabbitMQ:', error);
        throw error; 
    }
}

 const getRabbitMQChannel = async() => {
    if (!channel) {
        await connectToRabbitMQ();
    }
    return channel;
}


const consumeMessages = async (queueName, processMessage) => {
    const channel = await getRabbitMQChannel();
    await channel.assertQueue(queueName, { durable: true }); 
    channel.consume(queueName, async (message) => {
      try {
        const data = JSON.parse(message.content.toString());
        await processMessage(data);
        ch.ack(message); 
      } catch (error) {
        console.error('Error processing message:', error);
      }
    });
}

module.exports = { consumeMessages, getRabbitMQChannel };
