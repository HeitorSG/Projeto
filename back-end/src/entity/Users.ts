import { Length } from 'class-validator';
import { Entity, Column, Index } from 'typeorm';
import { Record } from './Record';
//CODIGO QUE DEFINE A TABELA USERS ELE GERA ALGO SEMELHANTE AO SQL ABAIXO:
/*CREATE TABLE Users (
  email VARCHAR(255) NOT NULL,
  nome VARCHAR(75) NOT NULL,
  senha VARCHAR(75) NOT NULL,
  PRIMARY KEY (email),
  UNIQUE INDEX email_UNIQUE (email ASC)
);*/

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