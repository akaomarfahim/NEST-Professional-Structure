import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { PrismaService } from './prisma/prisma.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

interface DatabaseConfig {
  url: string;
  host: string;
  port: number;
  user: string;
  password: string;
  name: string;
  queryLogging: boolean;
  pool: { max: number; min: number };
  ssl: { enabled: boolean; rejectUnauthorized: boolean };
}

@Module({
  providers: [DatabaseService, PrismaService],
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const db = configService.get<DatabaseConfig>('database');

        if (!db) {
          throw new Error('Database configuration is not defined');
        }

        return {
          type: 'postgres',
          url: db.url, // optional if using full URL

          host: db.host,
          port: db.port,
          username: db.user,
          password: db.password,
          database: db.name,

          autoLoadEntities: true,
          synchronize: true, // NEVER true in production

          logging: db.queryLogging,

          extra: {
            max: db.pool.max,
            min: db.pool.min,
          },

          ssl: db.ssl.enabled
            ? {
                rejectUnauthorized: db.ssl.rejectUnauthorized,
              }
            : false,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
