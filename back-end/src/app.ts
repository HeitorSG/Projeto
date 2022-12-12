import express from 'express';
import cors from 'cors';
import { articlesRoutes } from './routes/produtos';

export const app = async (port: number) => {

  // create and setup express app
  const app = express();
  app.use(express.json());
  app.use(cors());

  const router = express.Router();
  app.use(articlesRoutes(router));

  // start express server
  app.listen(port);
};