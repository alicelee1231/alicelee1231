import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usage } from '../usage/entities/usage.entity';

@Injectable()
export class WriteService {
  constructor(
    @InjectRepository(Usage)
    private readonly usageRepository: Repository<Usage>,
  ) {}

  async findOne(id) {
    return await this.usageRepository.findOne({
      where: {
        id,
      },
    });
  }
}
