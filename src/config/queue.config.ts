import { registerAs } from '@nestjs/config';

export default registerAs('queue', () => ({
  enabled: process.env.QUEUE_ENABLED === 'true',
  prefix: process.env.QUEUE_PREFIX || 'bull',

  // Default job options
  defaultJobOptions: {
    attempts: parseInt(process.env.QUEUE_DEFAULT_JOB_ATTEMPTS as string, 10) || 3,
    backoff: {
      type: 'exponential',
      delay: parseInt(process.env.QUEUE_DEFAULT_BACKOFF_DELAY as string, 10) || 5000,
    },
    removeOnComplete: 100,
    removeOnFail: 500,
  },

  // Redis connection (reuse from redis config)
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT as string, 10) || 6379,
    password: process.env.REDIS_PASSWORD,
    db: parseInt(process.env.REDIS_DB as string, 10) || 0,
  },

  // Cleanup
  cleanup: {
    cron: process.env.QUEUE_CLEANUP_CRON || '0 0 * * *', // Daily at midnight
    maxAge: 7 * 24 * 3600, // 7 days
  },

  // Specific queues
  queues: {
    email: {
      concurrency: 5,
    },
    sms: {
      concurrency: 10,
    },
    notification: {
      concurrency: 20,
    },
    report: {
      concurrency: 1,
    },
  },
}));
