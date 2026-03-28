import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  // JWT Configuration
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessExpiration: process.env.JWT_ACCESS_EXPIRATION || '15m',
    refreshExpiration: process.env.JWT_REFRESH_EXPIRATION || '7d',
  },

  // Session Configuration
  session: {
    secret: process.env.SESSION_SECRET,
    maxAge: parseInt(process.env.SESSION_MAX_AGE as string, 10) || 86400000, // 24 hours
  },

  // Password Configuration
  password: {
    saltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS as string, 10) || 10,
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
  },

  // Two-Factor Authentication
  twoFactor: {
    enabled: process.env.TWO_FACTOR_AUTH_ENABLED === 'true',
    appName:
      process.env.TWO_FACTOR_APP_NAME || process.env.APP_NAME || 'NestJS App',
  },

  // OAuth Providers
  oauth: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackUrl: process.env.GOOGLE_CALLBACK_URL,
    },
    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackUrl: process.env.FACEBOOK_CALLBACK_URL,
    },
  },

  // Rate limiting for auth endpoints
  rateLimit: {
    maxAttempts: 5,
    blockDuration: 900, // 15 minutes
  },
}));
