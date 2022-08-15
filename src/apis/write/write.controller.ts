import { Controller, Get, Param, Post, Render } from '@nestjs/common';
import { WriteService } from './write.service';

@Controller('wirte')
export class WriteController {
  constructor(private readonly writeService: WriteService) {}

  @Get('/:id')
  @Render('write')
  async write(@Param('id') id: string) {
    const result = await this.writeService.findOne(id);
    return { data: result };
  }
}
