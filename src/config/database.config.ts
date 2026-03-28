import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  // Primary database configuration
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT as string, 10) || 5432,
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'postgres',
  name: process.env.DATABASE_NAME || 'nest_app',
  url: process.env.DATABASE_URL,

  // Connection pool
  pool: {
    min: parseInt(process.env.DATABASE_POOL_MIN as string, 10) || 2,
    max: parseInt(process.env.DATABASE_POOL_MAX as string, 10) || 10,
    idleTimeout:
      parseInt(process.env.DATABASE_IDLE_TIMEOUT as string, 10) || 10000,
    connectionTimeout:
      parseInt(process.env.DATABASE_CONNECTION_TIMEOUT as string, 10) || 30000,
  },

  // SSL configuration
  ssl: {
    enabled: process.env.DATABASE_SSL_ENABLED === 'true',
    ca: process.env.DATABASE_SSL_CA_PATH,
    cert: process.env.DATABASE_SSL_CERT_PATH,
    key: process.env.DATABASE_SSL_KEY_PATH,
    rejectUnauthorized: process.env.NODE_ENV === 'production',
  },

  // Query logging
  queryLogging: process.env.DATABASE_QUERY_LOGGING === 'true',
  slowQueryThreshold:
    parseInt(process.env.DATABASE_QUERY_LOGGING_THRESHOLD as string, 10) || 100,

  // Test database (for e2e tests)
  testUrl: process.env.TEST_DATABASE_URL,
}));
