import { Router } from 'express';
import { clientesController } from '../controllers/Clientes';
//Rotas para clientes
export const clientesRoutes = (router: Router) => {
  const { findAll, findOne, create, update, remove } = clientesController();

  router.get('/clientes', findAll);
  router.get('/clientes/:id', findOne);
  router.post('/clientes', create);
  router.put('/clientes/:id', update);
  router.delete('/clientes/:id', remove);

  return router;
};