import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileEntity } from './entities/file.entity';
import { guichet_number } from './etatfile/enumguichet';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('adminstrator')
  async addFile(@Body() createFileDto: CreateFileDto ) {
    return this.fileService.addFile(createFileDto);
  }


  @Get(':id-service')
  async findOne(@Param('id') id: string) {
    return await this.fileService.getFilelist(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFileDto: Partial<FileEntity>) {
    return this.fileService.updateFile(id, updateFileDto);
  }
 
  
  @Post('guichet')
  async verification(@Body() Id: string,guichet:guichet_number ) {
    return this.fileService.verifyCredentials(Id,guichet);
  }

  @Post('guichet/:id')
  async updateFilestate (@Param('id') id: string) {
    return await this.fileService.updateFileState(id)
  }

}
