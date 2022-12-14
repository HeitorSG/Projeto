import { appDataSource } from '../index';
import { Clientes } from '../entity/Clientes';
import { recordsController } from './records';

export const clientesController = () => {
  const repository = appDataSource.getRepository(Clientes);

  return recordsController<Clientes>(repository);
};