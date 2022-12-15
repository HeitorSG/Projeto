import { Router } from 'express';
import { Request, Response } from 'express';
import { appDataSource } from '..';
import { loginController } from '../controllers/login';
import { usersController } from '../controllers/users';
import { Users } from '../entity/Users';

//Rotas de usuario e de login
export const loginRoutes = (router: Router) => {
    const { findAll, findOne, logout, create, update, remove } = usersController();
    const repository = appDataSource.getRepository(Users);
    const {login} = loginController<Users>(repository);


 
    router.get('/users', findAll);
    router.get('/users/:id', findOne);
    router.post('/users', create);
    router.put('/users/:id', update);
    router.delete('/users/:id', remove);
    router.post('/userLogin', login);
    router.post('/userLogout', logout);
 


  return router;
};