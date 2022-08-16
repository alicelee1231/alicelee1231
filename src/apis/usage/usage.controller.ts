import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { UsageService } from './usage.service';

@Controller('usage')
export class UsageController {
  constructor(private readonly usageService: UsageService) {}

  @Get('/')
  @Render('usage')
  async usage() {
    const result = await this.usageService.find();
    return { data: result };
  }
  @Post('/')
  async click(@Body() data) {
    return await this.usageService.create(data);
  }
}
