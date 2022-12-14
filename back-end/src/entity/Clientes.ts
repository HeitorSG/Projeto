import { Length } from 'class-validator';
import { Entity, Column, Index } from 'typeorm';
import { Record } from './Record';

@Entity()
export class Clientes extends Record {
    @Index({ unique: true })
    @Column("int")
    codigo: number;

    @Column()
    @Length(3, 75)
    nome: string;

    @Column()
    @Length(3, 75)
    fantasia: string;

    @Index({ unique: true })
    @Column()
    @Length(3, 30)
    documento: string;

    @Column()
    @Length(3, 150)
    endereco: string;
}