import { appDataSource } from '../index';
import { Clientes } from '../entity/Clientes';
import { recordsController } from './records';

export const clientesController = () => {
  const repository = appDataSource.getRepository(Clientes);
//cria o controlador da tabela produtos extendendo o controlador padrao de records e passando o repositorio Clientes
  return recordsController<Clientes>(repository);
};