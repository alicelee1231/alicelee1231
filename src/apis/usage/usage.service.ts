import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { throws } from 'assert';
import { Repository } from 'typeorm';
import { Usage } from './entities/usage.entity';

@Injectable()
export class UsageService {
  constructor(
    @InjectRepository(Usage)
    private readonly usageRepository: Repository<Usage>,
  ) {}

  async find() {
    const result = await this.usageRepository.find();

    const count = await this.usageRepository.count();

    return {
      result,
      count,
    };
  }

  async create(data) {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const currentDate = `${yyyy}-${mm}-${dd}`;
    await this.usageRepository.save({
      title: data.title,
      area: data.area,
      userId: data.userId,
      content: data.content,
      createdAt: currentDate,
      sort: data.sort,
      period: data.period,
      goal: data.goal,
    });
  }
}
