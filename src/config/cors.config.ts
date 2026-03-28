import { registerAs } from '@nestjs/config';

export default registerAs('cors', () => ({
  enabled: true,
  origins: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:3000'],
  methods: process.env.CORS_METHODS?.split(',') || [
    'GET',
    'HEAD',
    'PUT',
    'PATCH',
    'POST',
    'DELETE',
  ],
  credentials: process.env.CORS_CREDENTIALS === 'true',
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'Origin',
    'X-CSRF-Token',
  ],
  exposedHeaders: ['Content-Range', 'X-Total-Count'],
  maxAge: 86400, // 24 hours
}));
