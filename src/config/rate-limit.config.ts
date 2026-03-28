import { registerAs } from '@nestjs/config';

export default registerAs('rateLimit', () => ({
  ttl: parseInt(process.env.RATE_LIMIT_TTL as string, 10) || 60,
  max: parseInt(process.env.RATE_LIMIT_MAX as string, 10) || 100,

  // Special endpoints with different limits
  endpoints: {
    auth: {
      max: 5,
      ttl: 900, // 15 minutes
    },
    api: {
      max: 1000,
      ttl: 3600, // 1 hour
    },
    public: {
      max: 50,
      ttl: 60, // 1 minute
    },
  },

  // Skip rate limiting for trusted IPs
  whitelist: process.env.RATE_LIMIT_WHITELIST?.split(',') || [],

  // Enable rate limiting for specific environments
  enabled: {
    development: false,
    staging: true,
    production: true,
    test: false,
  },
}));
