import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompteModule } from './compte/compte.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CompteModule, UserModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1329566',
    database: 'compte',
    autoLoadEntities: true,
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}