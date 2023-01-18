import { Module } from '@nestjs/common';
import { BankdataService } from './bankdata.service';
import { BankdataController } from './bankdata.controller';
import { Bankdatum } from './entities/bankdatum.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Bankdatum])],
  controllers: [BankdataController],
  providers: [BankdataService],
})
export class BankdataModule {}
