import { registerAs } from '@nestjs/config';

export default registerAs('email', () => ({
  // SMTP Configuration
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT as string, 10) || 587,
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    secure: process.env.SMTP_SECURE === 'true',
    from: process.env.SMTP_FROM,
    fromName: process.env.SMTP_FROM_NAME || process.env.APP_NAME,
  },

  // Queue Configuration
  queue: {
    enabled: process.env.EMAIL_QUEUE_ENABLED === 'true',
    concurrency: parseInt(process.env.EMAIL_QUEUE_CONCURRENCY as string, 10) || 5,
  },

  // Templates
  templates: {
    path: process.env.EMAIL_TEMPLATES_PATH || './src/modules/notifications/templates/email',
    engine: 'hbs',
  },

  // Retry Configuration
  retry: {
    attempts: parseInt(process.env.EMAIL_RETRY_ATTEMPTS as string, 10) || 3,
    delay: parseInt(process.env.EMAIL_RETRY_DELAY as string, 10) || 5000,
  },

  // Testing
  mock: process.env.MOCK_EMAIL_SERVICE === 'true',
}));
