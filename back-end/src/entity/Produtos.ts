import { Entity, Column } from 'typeorm';
import { Record } from './Record';

@Entity()
export class Produtos extends Record {
  @Column("int")
  codigo: number;

  @Column()
  descricao: string;

  @Column()
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