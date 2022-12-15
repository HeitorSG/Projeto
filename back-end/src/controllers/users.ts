import { appDataSource } from '../index';
import { Users } from '../entity/Users';
import { recordsController } from './records';

export const usersController = () => {
  const repository = appDataSource.getRepository(Users);
//cria o controlador da tabela produtos extendendo o controlador padrao de records e passando o repositorio Clientes
  return recordsController<Users>(repository);
};