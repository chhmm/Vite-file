import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { FileEntity } from './entities/file.entity';
import * as bcrypt from 'bcrypt';
import { guichet_number } from './etatfile/enumguichet';
@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private FileRepository: Repository<FileEntity>
  ){}

 async addFile(createFileDto: CreateFileDto): Promise<FileEntity> {
  const newfile=new FileEntity
  const chaine=createFileDto.Id+createFileDto.Adress
  newfile.Id=await bcrypt.hash(chaine,10)
  newfile.Adress=createFileDto.Adress
  newfile.numerofile=0
  newfile.guichet=createFileDto.guichet
  return await this.FileRepository.save(newfile);
  }

  async getFilelist(Id: string):Promise<FileEntity[]> {
  
    const fileList = await this.FileRepository
    .createQueryBuilder("File")
    .leftJoinAndSelect("files.admin", "compte_entity")
    .where("admin.id = :Id", { Id })
    .getMany();
    if (!fileList) {
      throw new NotFoundException("Compte not found!");}
   else
    return fileList;
}

async updateFile(Id: string, updatefile:Partial<FileEntity>):Promise<FileEntity> {
  const new_file= await this.FileRepository.findOne({where:{Id}});
  if (new_file){
    Object.assign(new_file, updatefile);
    return await this.FileRepository.save(new_file);
  }
  else {
      throw new NotFoundException("Compte not found to be updated!");
  }
}

async updateFileState( Id:string):Promise<FileEntity> {
  const new_file= await this.FileRepository.findOne({where:{Id}});
  if (new_file){
    new_file.numerofile=new_file.numerofile%100+1;
    return await this.FileRepository.save(new_file);
  }
  else {
      throw new NotFoundException("Compte not found to be updated!");
  }

}
async verifyCredentials(Id: string, guichet:guichet_number): Promise<boolean> {
  const user = await this.FileRepository.findOne({ where: {Id, guichet} });
  if(user)
  return true
  else throw new NotFoundException
}

}



