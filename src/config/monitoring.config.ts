import { registerAs } from '@nestjs/config';

export default registerAs('monitoring', () => ({
  // Prometheus
  prometheus: {
    enabled: process.env.PROMETHEUS_ENABLED === 'true',
    path: process.env.PROMETHEUS_PATH || '/metrics',
    port: parseInt(process.env.PROMETHEUS_PORT as string, 10) || 9090,
    defaultMetrics: {
      enabled: true,
    },
  },

  // New Relic
  newRelic: {
    enabled: process.env.NEW_RELIC_ENABLED === 'true',
    appName: process.env.NEW_RELIC_APP_NAME || process.env.APP_NAME,
    licenseKey: process.env.NEW_RELIC_LICENSE_KEY,
  },

  // Health checks
  health: {
    enabled: process.env.HEALTH_CHECK_ENABLED === 'true',
    path: process.env.HEALTH_CHECK_PATH || '/health',
    timeout: parseInt(process.env.HEALTH_CHECK_TIMEOUT as string, 10) || 5000,
    checks: {
      database: true,
      redis: true,
      queue: true,
      storage: true,
    },
  },

  // Metrics collection
  metrics: {
    collectDefault: true,
    collectInterval: 5000, // 5 seconds
    customMetrics: {
      httpRequestsDuration: true,
      httpRequestsTotal: true,
      dbQueryDuration: true,
      cacheHitRate: true,
    },
  },
}));
