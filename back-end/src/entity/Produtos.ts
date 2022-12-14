import { Entity, Column, Index} from 'typeorm';
import { Record } from './Record';
import { Length } from 'class-validator';

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