import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import configuration from './configuration';
import databaseConfig from './database.config';
import redisConfig from './redis.config';
import authConfig from './auth.config';
import appConfig from './app.config';
import corsConfig from './cors.config';
import rateLimitConfig from './rate-limit.config';
import swaggerConfig from './swagger.config';
import emailConfig from './email.config';
import storageConfig from './storage.config';
import queueConfig from './queue.config';
import loggerConfig from './logger.config';
import monitoringConfig from './monitoring.config';
import validationConfig from './validation.config';
import websocketConfig from './websocket.config';
import cacheConfig from './cache.config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV || 'development'}`, '.env'],
      load: [
        configuration,
        databaseConfig,
        redisConfig,
        authConfig,
        appConfig,
        corsConfig,
        rateLimitConfig,
        swaggerConfig,
        emailConfig,
        storageConfig,
        queueConfig,
        loggerConfig,
        monitoringConfig,
        validationConfig,
        websocketConfig,
        cacheConfig,
      ],
      // Add validation schema if needed
      validationSchema: undefined,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
      // Cache environment variables
      cache: true,
      // Expand variables (supports ${VAR_NAME} syntax)
      expandVariables: true,
    }),
  ],
  exports: [NestConfigModule],
})
export class ConfigModule {}
