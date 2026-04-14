import { registerAs } from '@nestjs/config';

export default registerAs('swagger', () => ({
  enabled: process.env.SWAGGER_ENABLED === 'true',
  title: process.env.SWAGGER_TITLE || 'API Documentation',
  description: process.env.SWAGGER_DESCRIPTION || 'API documentation for the application',
  version: process.env.SWAGGER_VERSION || '1.0',
  path: process.env.SWAGGER_PATH || 'api/docs',

  // Authentication for Swagger UI
  auth: {
    enabled: process.env.SWAGGER_USER && process.env.SWAGGER_PASSWORD ? true : false,
    user: process.env.SWAGGER_USER,
    password: process.env.SWAGGER_PASSWORD,
  },

  // Server URLs
  servers: [
    {
      url: process.env.APP_URL || 'http://localhost:3000',
      description: 'Current server',
    },
  ],

  // Tags grouping
  tags: [
    { name: 'Auth', description: 'Authentication endpoints' },
    { name: 'Users', description: 'User management' },
    { name: 'Orders', description: 'Order processing' },
    { name: 'Products', description: 'Product catalog' },
    { name: 'Health', description: 'Health checks' },
  ],
}));
