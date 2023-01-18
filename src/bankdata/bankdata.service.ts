import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBankdatumDto } from './dto/create-bankdatum.dto';
import { UpdateBankdatumDto } from './dto/update-bankdatum.dto';
import { Bankdatum } from './entities/bankdatum.entity';

@Injectable()
export class BankdataService {
  constructor(
    @InjectRepository(Bankdatum)
    private cridentials: Repository<Bankdatum>
  ){}
  async addcridential(cridential:Bankdatum):Promise<Bankdatum>{
    return await this.cridentials.save(cridential);
  }

  async validateCard(card_number:string, password: string): Promise<boolean> {
    const card = await this.cridentials.findOne({where:{card_number} });
    if (card && card.password === password) {
      return true;
    }else
    {console.log("Notfound")
    return false;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} bankdatum`;
  }

  update(id: number, updateBankdatumDto: UpdateBankdatumDto) {
    return `This action updates a #${id} bankdatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} bankdatum`;
  }
}
