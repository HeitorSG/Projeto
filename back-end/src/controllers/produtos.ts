import { appDataSource } from '../index';
import { Produtos } from '../entity/Produtos';
import { recordsController } from './records';

export const produtosController = () => {
  const repository = appDataSource.getRepository(Produtos);
//cria o controlador da tabela produtos extendendo o controlador padrao de records e passando o repositorio Produtos
  return recordsController<Produtos>(repository);
};