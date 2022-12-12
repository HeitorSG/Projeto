import { appDataSource } from '../index';
import { Produtos } from '../entity/Produtos';
import { recordsController } from './records';

export const produtosController = () => {
  const repository = appDataSource.getRepository(Produtos);

  return recordsController<Produtos>(repository);
};