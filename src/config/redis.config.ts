import { registerAs } from '@nestjs/config';

export default registerAs('redis', () => ({
  // Single node configuration
  host: process.env.REDIS_HOST || 'localhost',
  port: parseInt(process.env.REDIS_PORT as string, 10) || 6379,
  password: process.env.REDIS_PASSWORD || undefined,
  db: parseInt(process.env.REDIS_DB as string, 10) || 0,
  url:
    process.env.REDIS_URL ||
    `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || 6379}`,

  // Cluster configuration
  cluster: {
    enabled: process.env.REDIS_CLUSTER_ENABLED === 'true',
    nodes: process.env.REDIS_CLUSTER_NODES?.split(',') || [],
  },

  // Sentinel configuration (high availability)
  sentinel: {
    enabled: process.env.REDIS_SENTINEL_ENABLED === 'true',
    masterName: process.env.REDIS_SENTINEL_MASTER_NAME || 'mymaster',
    nodes: process.env.REDIS_SENTINEL_NODES?.split(',') || [],
  },

  // Cache TTL settings
  cacheTtl: parseInt(process.env.REDIS_CACHE_TTL as string, 10) || 3600,
  sessionTtl: parseInt(process.env.REDIS_SESSION_TTL as string, 10) || 86400,

  // Retry strategy
  retryStrategy: {
    maxRetries: 3,
    retryDelay: 5000,
  },

  // Key prefix
  keyPrefix: process.env.APP_NAME
    ? `${process.env.APP_NAME.toLowerCase()}:`
    : 'app:',
}));
