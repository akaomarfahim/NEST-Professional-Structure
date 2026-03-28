import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [DatabaseService, PrismaService]
})
export class DatabaseModule {}
