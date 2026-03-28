import { registerAs } from '@nestjs/config';

export default registerAs('websocket', () => ({
  enabled: process.env.WEBSOCKET_ENABLED === 'true',
  port: parseInt(process.env.WEBSOCKET_PORT as string, 10) || 3001,
  path: process.env.WEBSOCKET_PATH || '/socket.io',
  cors: {
    origin: process.env.WEBSOCKET_CORS_ORIGINS?.split(',') || [
      'http://localhost:3000',
    ],
    credentials: true,
  },

  // Namespaces
  namespaces: {
    notifications: '/notifications',
    chat: '/chat',
    presence: '/presence',
  },

  // Connection options
  options: {
    pingTimeout: 60000,
    pingInterval: 25000,
    transports: ['websocket', 'polling'],
    allowEIO3: true,
  },

  // Authentication
  auth: {
    enabled: true,
    strategy: 'jwt', // jwt, passport, custom
  },
}));
