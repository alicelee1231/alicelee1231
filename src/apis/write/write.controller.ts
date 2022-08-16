import { Controller, Get, Param, Post, Render } from '@nestjs/common';
import { WriteService } from './write.service';

@Controller('write')
export class WriteController {
  constructor(private readonly writeService: WriteService) {}

  //특정 게시글 불러오기
  @Get('/:id')
  @Render('write')
  async write(@Param('id') id: string) {
    const result = await this.writeService.findOne(id);
    return { data: result };
  }

  //글 작성 페이지 불러오기
  @Get('/')
  @Render('write')
  async load() {
    return { data: 'testing...' };
  }
}
