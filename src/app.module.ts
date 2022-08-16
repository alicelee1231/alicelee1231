import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home2Module } from './apis/home2/home2.module';
import { HomeModule } from './apis/home/home.module';
import { MainModule } from './apis/main/main.module';
import { UsageModule } from './apis/usage/usage.module';
import { WriteModule } from './apis/write/write.module';
import { DetailModule } from './apis/show/detail.module';

@Module({
  imports: [
    HomeModule,
    Home2Module,
    MainModule,
    UsageModule,
    WriteModule,
    DetailModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mvc',
      entities: [__dirname + '/apis/**/*.entity.*'],
      synchronize: true,
      logging: true,
      timezone: 'Asia / Seoul',
    }),
  ],
})
export class AppModule {}
