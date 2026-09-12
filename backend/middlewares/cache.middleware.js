const redisClient = require('../config/redis')

const cacheMiddleware = (keyPrefix) => {
    return async (req, res, next) => {
        try{
            const cacheKey = `${keyPrefix}: ${req.params.id || 'all'}`;
            const cachedData = await redisClient.get(cacheKey);

            if (cachedData) {
                console.log('Serving from cache : ', cacheKey);
                return res.json(JSON.parse(cachedData))
            }

            // No cache found — attach the key so the controller can save to it later
            req.cacheKey = cacheKey;
            next();

        } catch (error) {
            console.error('Cache error: ', error.message);
            next();
        }
    }
};

module.exports = cacheMiddleware;