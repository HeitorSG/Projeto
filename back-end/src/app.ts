import express from 'express';
import cors from 'cors';
import { produtosRoutes } from './routes/produtos';
import { clientesRoutes } from './routes/clientes';

export const app = async (port: number) => {

  // create and setup express app
  const app = express();
  app.use(express.json());
  app.use(cors());

  const router = express.Router();
  app.use(produtosRoutes(router));
  app.use(clientesRoutes(router));

  // start express server
  app.listen(port);
};