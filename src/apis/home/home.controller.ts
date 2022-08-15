import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller()
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Get('/')
  @Render('home')
  async home() {
    const result = await this.homeService.find();
    console.log(result);
    return { data: result };
  }

  @Post('/test')
  async button(@Body() data) {
    console.log(data, '=============');
    return await this.homeService.create(data);
  }

  @Get('/aaa')
  @Render('aaa')
  asdasd() {}
}
