import { Router } from 'express';
import { produtosController } from '../controllers/produtos';

export const articlesRoutes = (router: Router) => {
  const { findAll, findOne, create, update, remove } = produtosController();

  router.get('/produtos', findAll);
  router.get('/produtos/:id', findOne);
  router.post('/produtos', create);
  router.put('/produtos/:id', update);
  router.delete('/produtos/:id', remove);

  return router;
};