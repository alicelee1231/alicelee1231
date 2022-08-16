import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usage } from '../usage/entities/usage.entity';
import { DetailController } from './detail.controller';
import { DetailService } from './detail.service';

@Module({
  imports: [TypeOrmModule.forFeature([Usage])],
  controllers: [DetailController],
  providers: [DetailService],
})
export class DetailModule {}
