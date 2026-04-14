import { registerAs } from '@nestjs/config';

export default registerAs('cache', () => ({
  enabled: process.env.CACHE_ENABLED === 'true',
  ttl: parseInt(process.env.CACHE_TTL || '3600', 10) || 3600, // 1 hour
  checkPeriod: parseInt(process.env.CACHE_CHECK_PERIOD || '600', 10) || 600, // 10 minutes

  // Maximum items in cache
  max: 1000,

  // Key prefix
  keyPrefix: process.env.APP_NAME ? `${process.env.APP_NAME.toLowerCase()}:cache:` : 'cache:',

  // Redis connection (reuse from redis config)
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
    password: process.env.REDIS_PASSWORD,
    db: process.env.REDIS_DB || 0,
  },

  // Cache patterns
  patterns: {
    user: { ttl: 3600 },
    product: { ttl: 1800 },
    order: { ttl: 900 },
    settings: { ttl: 7200 },
  },
}));
