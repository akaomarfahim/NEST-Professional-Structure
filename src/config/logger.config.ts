import { registerAs } from '@nestjs/config';

export default registerAs('logger', () => ({
  level: process.env.LOG_LEVEL || 'info',

  // File logging
  file: {
    enabled: process.env.LOG_FILE_ENABLED === 'true',
    path: process.env.LOG_FILE_PATH || './logs',
    maxFiles: parseInt(process.env.LOG_MAX_FILES as string, 10) || 14,
    maxSize: process.env.LOG_MAX_SIZE || '20m',
  },

  // Console logging
  console: {
    enabled: true,
    format: process.env.NODE_ENV === 'production' ? 'json' : 'pretty',
  },

  // Elasticsearch
  elasticsearch: {
    enabled: process.env.ELASTICSEARCH_ENABLED === 'true',
    node: process.env.ELASTICSEARCH_NODE || 'http://localhost:9200',
    index: process.env.ELASTICSEARCH_INDEX || 'app-logs',
    level: 'info',
  },

  // Sentry
  sentry: {
    enabled: process.env.SENTRY_ENABLED === 'true',
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV,
    tracesSampleRate: 1.0,
  },

  // Fields to exclude from logs (for security)
  excludeFields: ['password', 'token', 'refreshToken', 'authorization'],
}));
