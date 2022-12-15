import { Length } from 'class-validator';
import { Entity, Column, Index } from 'typeorm';
import { Record } from './Record';
//CODIGO QUE DEFINE A TABELA CLIENTES ELE GERA ALGO SEMELHANTE AO SQL ABAIXO:
/*CREATE TABLE Clientes (
  codigo INT NOT NULL,
  nome VARCHAR(75) NOT NULL,
  fantasia VARCHAR(75) NOT NULL,
  documento VARCHAR(30) NOT NULL,
  endereco VARCHAR(150) NOT NULL,
  PRIMARY KEY (codigo),
  UNIQUE INDEX codigo_UNIQUE (codigo ASC),
  UNIQUE INDEX documento_UNIQUE (documento ASC)
);*/

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