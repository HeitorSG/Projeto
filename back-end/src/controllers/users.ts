import { appDataSource } from '../index';
import { Users } from '../entity/Users';
import { recordsController } from './records';

export const usersController = () => {
  const repository = appDataSource.getRepository(Users);

  return recordsController<Users>(repository);
};