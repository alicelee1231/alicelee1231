import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home2Module } from './apis/home2/home2.module';
import { HomeModule } from './apis/home/home.module';
import { MainModule } from './apis/main/main.module';

@Module({
  imports: [
    HomeModule,
    Home2Module,
    MainModule,
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
    }),
  ],
})
export class AppModule {}
