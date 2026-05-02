const { createClient } = require("redis");
const logger = require("../services/logger");

const redisClient = createClient({
  username: process.env.REDIS_USERNAME,
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    reconnectStrategy: false,
  },
});

redisClient.on("error", (err) =>
  logger.warn(`Redis connection warning: ${err.message}`),
);

const connectRedis = async () => {
  if (!redisClient.isOpen) {
    try {
      await redisClient.connect();
      logger.info("Redis connected");
    } catch (error) {
      logger.warn("Redis unavailable. Continuing without cache.");
    }
  }
};

module.exports = {
  connectRedis,
  redisClient,
};