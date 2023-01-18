import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BankdataModule } from './bankdata/bankdata.module';
import { CompteModule } from './compte/compte.module';
import { FileModule } from './file/file.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CompteModule, UserModule, BankdataModule, FileModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '1329566',
    database: 'compte',
    autoLoadEntities: true,
    synchronize: false
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}