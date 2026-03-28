import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { I18nModule } from './i18n/i18n.module';
import { RedisModule } from './redis/redis.module';
import { LoggerModule } from './logger/logger.module';
import { CacheModule } from './cache/cache.module';
import { QueueModule } from './queue/queue.module';

@Module({
  imports: [DatabaseModule, I18nModule, RedisModule, LoggerModule, CacheModule, QueueModule]
})
export class CoreModule {}
