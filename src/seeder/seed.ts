import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { randFullName, randSequence, randPhoneNumber, randEmail, randCompanyName, randBic, randPassword, randCreditCardNumber, randFileName, randLastName, randNumber, randFullAddress } from "@ngneat/falso";
import { CompteEntity } from "../compte/entity/compte.entity"
import { CompteService } from "../compte/compte.service";
import { BankdataService } from "../bankdata/bankdata.service";
import { Bankdatum } from "../bankdata/entities/bankdatum.entity";
import { FileService } from "../file/file.service";
import { CreateFileDto } from "../file/dto/create-file.dto";
import { guichet_number } from "../file/etatfile/enumguichet";

async function bootstrap () {
    const app = await NestFactory.createApplicationContext(AppModule);
    const compteService = app.get(CompteService);
    const bankService = app.get(BankdataService);
    const fileService=app.get(FileService)
    function getRandomEnumValue(anEnum: any): any {
        const enumValues = Object.keys(anEnum)
        .map(n => anEnum[n]);
        const randomIndex = Math.floor(Math.random() * enumValues.length);
        return enumValues[randomIndex];
    }
    for (let i=0;i<10;i++){
        const newCompte = new CompteEntity();
        newCompte.name = randFullName();
        newCompte.cin = randSequence();
        newCompte.phoneNumber = parseInt(randPhoneNumber());
        newCompte.email = randEmail();
        newCompte.compagny = randCompanyName();
        newCompte.taxIdentificationNumber = randBic();
        newCompte.password = randPassword();
        await compteService.addCompte(newCompte);


        const newcridential = new Bankdatum();
        newcridential.card_number=randCreditCardNumber();
        newcridential.firstname=randFileName();
        newcridential.lastname=randLastName();
        newcridential.solde=randNumber();
        newcridential.password=randPassword();
        await bankService.addcridential(newcridential);


        const newfile=new CreateFileDto();
        newfile.Adress=randFullAddress();
        newfile.guichet=getRandomEnumValue(guichet_number);
        newfile.Id=newCompte.id;
        await fileService.addFile(newfile);
    }
    await app.close();
}
bootstrap();