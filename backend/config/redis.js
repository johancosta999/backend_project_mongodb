const Redis = require('ioredis')
require('dotenv').config()

const redisClient = new Redis(process.env.REDIS_URL);

redisClient.on('connect', () => {
    console.log('Redis connected successfully');
});

redisClient.on('error', () => {
    console.error('Redis connection error: ', error.message);
});

module.exports = redisClient;