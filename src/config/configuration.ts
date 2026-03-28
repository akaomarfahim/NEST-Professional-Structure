import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  env: process.env.NODE_ENV || 'development',
  name: process.env.APP_NAME || 'NestJS App',
  port: parseInt(process.env.APP_PORT as string, 10) || 3000,
  url: process.env.APP_URL || 'http://localhost:3000',
  fallbackLanguage: process.env.APP_FALLBACK_LANGUAGE || 'en',
  debug: process.env.APP_DEBUG === 'true',

  // Maintenance mode
  maintenance: {
    enabled: process.env.MAINTENANCE_MODE === 'true',
    message:
      process.env.MAINTENANCE_MESSAGE ||
      'System is under maintenance. Please check back later.',
    allowedIps: process.env.MAINTENANCE_ALLOWED_IPS?.split(',') || [],
  },

  // Performance
  compression: {
    enabled: process.env.COMPRESSION_ENABLED === 'true',
    level: parseInt(process.env.COMPRESSION_LEVEL as string, 10) || 6,
  },

  timeout: parseInt(process.env.REQUEST_TIMEOUT as string, 10) || 30000,
  keepAlive: {
    enabled: process.env.KEEP_ALIVE_ENABLED === 'true',
    timeout: parseInt(process.env.KEEP_ALIVE_TIMEOUT as string, 10) || 5000,
  },
}));
