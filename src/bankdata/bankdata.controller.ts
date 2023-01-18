import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import path from 'path';

import { BankdataService } from './bankdata.service';
import { CreateBankdatumDto } from './dto/create-bankdatum.dto';
import { UpdateBankdatumDto } from './dto/update-bankdatum.dto';

@Controller('Payment')
export class BankdataController {
  constructor(private readonly bankdataService: BankdataService) {}

  @Get()
  registerPage(@Res() res) {
   
    const pathfile='Payment-front/payment.html'
    res.sendFile(pathfile,{ root: '.' });

    
  }
  @Post()
  async validateCard(@Body() cardNumber:string, password:string ): Promise<boolean> {
    console.log("")
    return this.bankdataService.validateCard(cardNumber, password);
  }
  
  

  
}
