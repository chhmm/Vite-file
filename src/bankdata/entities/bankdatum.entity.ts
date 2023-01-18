import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('credential')
export class Bankdatum {
@PrimaryColumn({unique:true})
card_number:string

@Column({unique:true})
password: string;

@Column()
firstname: string;

@Column()
lastname:string    

@Column()
solde:number
}