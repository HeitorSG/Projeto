import { Entity, Column } from 'typeorm';
import { Record } from './Record';

@Entity()
export class Clientes extends Record {
    @Column("int")
    codigo: number;

    @Column()
    nome: string;

    @Column()
    fantasia: string;

    @Column()
    documento: string;

    @Column()
    endereco: string;
}