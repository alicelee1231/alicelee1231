import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usage } from '../usage/entities/usage.entity';
import { WriteController } from './write.controller';
import { WriteService } from './write.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usage])],
  controllers: [WriteController],
  providers: [WriteService],
})
export class UsageModule {}
