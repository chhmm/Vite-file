import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import { randFirstName, randLastName, randSequence, randPhoneNumber, randEmail, randCompanyName, randBic } from "@ngneat/falso";
import { CompteEntity } from "../compte/entity/compte.entity"
import { CompteService } from "../compte/compte.service";

async function bootstrap () {
    const app = await NestFactory.createApplicationContext(AppModule);
    const compteService = app.get(CompteService);
    for (let i=0;i<10;i++){
        const newCompte = new CompteEntity();
        newCompte.firstname = randFirstName();
        newCompte.lastname = randLastName();
        newCompte.cin = randSequence();
        newCompte.phoneNumber = parseInt(randPhoneNumber());
        newCompte.email = randEmail();
        newCompte.compagny = randCompanyName();
        newCompte.taxIdentificationNumber = randBic();
        await compteService.addCompte(newCompte);
    }
    await app.close();
}
bootstrap();