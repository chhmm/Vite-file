import { Test, TestingModule } from '@nestjs/testing';
import { BankdataController } from './bankdata.controller';
import { BankdataService } from './bankdata.service';

describe('BankdataController', () => {
  let controller: BankdataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BankdataController],
      providers: [BankdataService],
    }).compile();

    controller = module.get<BankdataController>(BankdataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
