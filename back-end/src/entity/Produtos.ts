import { Entity, Column, Index} from 'typeorm';
import { Record } from './Record';
import { Length } from 'class-validator';
//CODIGO QUE DEFINE A TABELA PRODUTOS ELE GERA ALGO SEMELHANTE AO SQL ABAIXO:
/*CREATE TABLE Produtos (
  codigo INT NOT NULL,
  descricao VARCHAR(500) NOT NULL,
  codBarras VARCHAR(100) NOT NULL,
  precoVenda DECIMAL(8,2) NOT NULL,
  pesoBruto DECIMAL(8,2) NOT NULL,
  pesoLiquido DECIMAL(8,2) NOT NULL,
  PRIMARY KEY (codigo),
  UNIQUE INDEX codigo_UNIQUE (codigo ASC)
);*/

@Entity()
export class Produtos extends Record {
  @Index({ unique: true })
  @Column("int")
  codigo: number;

  @Column()
  @Length(3, 500)
  descricao: string;

  @Column()
  @Length(3, 100)
  codBarras: string;

  @Column({
    type: "decimal",
    precision: 8,
    scale: 2,
  })
  precoVenda: number;

  @Column({
    type: "decimal",
    precision: 8,
    scale: 2,
  })
  pesoBruto: number;

  @Column({
    type: "decimal",
    precision: 8,
    scale: 2,
  })
  pesoLiquido: number;

}