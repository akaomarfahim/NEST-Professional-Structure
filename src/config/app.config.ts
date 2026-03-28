import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  // Application metadata
  name: process.env.APP_NAME || 'NestJS Enterprise App',
  version: process.env.APP_VERSION || '1.0.0',
  description:
    process.env.APP_DESCRIPTION || 'Enterprise-grade NestJS application',

  // Environment
  env: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  isStaging: process.env.NODE_ENV === 'staging',
  isTest: process.env.NODE_ENV === 'test',

  // Server
  port: parseInt(process.env.APP_PORT || '3000', 10) || 3000,
  host: process.env.APP_HOST || '0.0.0.0',
  url: process.env.APP_URL || 'http://localhost:3000',
  apiPrefix: process.env.API_PREFIX || 'api',

  // Internationalization
  defaultLanguage: process.env.DEFAULT_LANGUAGE || 'en',
  supportedLanguages: process.env.SUPPORTED_LANGUAGES?.split(',') || [
    'en',
    'es',
    'fr',
  ],
  fallbackLanguage: process.env.I18N_FALLBACK_LANGUAGE || 'en',

  // Debugging
  debug: process.env.APP_DEBUG === 'true',
  debugNamespace: process.env.DEBUG_NAMESPACE || 'app:*',

  // Response timing
  responseTiming: process.env.API_RESPONSE_TIMING === 'true',

  // Feature flags
  features: {
    newDashboard: process.env.FEATURE_NEW_DASHBOARD === 'true',
    advancedAnalytics: process.env.FEATURE_ADVANCED_ANALYTICS === 'true',
    mobileApp: process.env.FEATURE_MOBILE_APP === 'true',
  },
}));
