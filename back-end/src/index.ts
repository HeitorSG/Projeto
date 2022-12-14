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
  synchronize: true,
  entities: ["build/entity/*.js"],
});


appDataSource.initialize();
 


const run = async () => {
  const connection = await appDataSource.initialize();
  await app(port);
};

run();