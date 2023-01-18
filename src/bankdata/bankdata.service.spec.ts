import { Test, TestingModule } from '@nestjs/testing';
import { BankdataService } from './bankdata.service';

describe('BankdataService', () => {
  let service: BankdataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BankdataService],
    }).compile();

    service = module.get<BankdataService>(BankdataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
