import { DataSource } from 'typeorm';
import { config as configDotenv } from 'dotenv';
import { app } from './app';

configDotenv();

const port = parseInt(process.env.PORT);

export const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username:"postgres",
  password:"htr123",
  database: 'SoftLine',
});


appDataSource.initialize();
 


