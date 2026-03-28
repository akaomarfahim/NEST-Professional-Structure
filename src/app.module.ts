import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { UsersModule } from './modules/users/users.module';
import { CoreModule } from './core/core.module';
import { CliModule } from './cli/cli.module';
import { HealthModule } from './modules/health/health.module';

@Module({
  imports: [ConfigModule, UsersModule, CoreModule, CliModule, HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
