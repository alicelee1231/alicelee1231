import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usage } from './entities/usage.entity';

@Injectable()
export class UsageService {
  constructor(
    @InjectRepository(Usage)
    private readonly usageRepository: Repository<Usage>,
  ) {}

  async find() {
    return await this.usageRepository.find();
  }

  async create(data) {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const currentDate = `${yyyy}-${mm}-${dd}`;
    await this.usageRepository.save({
      area: data.area,
      userId: data.userId,
      title: data.title,
      createdAt: currentDate,
    });
  }
}
