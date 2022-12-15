import { Length } from 'class-validator';
import { Entity, Column, Index } from 'typeorm';
import { Record } from './Record';

@Entity()
export class Users extends Record {
    @Index({ unique: true })
    @Column()
    email: string;

    @Column()
    @Length(3, 75)
    nome: string;

    @Column()
    @Length(3, 75)
    senha: string;



}