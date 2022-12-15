import { DataSource } from 'typeorm';
import { config as configDotenv } from 'dotenv';
import { app } from './app';

configDotenv();
//essa 4 variaveis precisam ser configuradas em um .env
const port = parseInt(process.env.PORT);
const type = process.env.TYPEORM_USERNAME;
const pass = process.env.TYPEORM_PASSWORD;
const database = process.env.TYPEORM_DATABASE;


//conexao com o banco no meu caso postgres mas pode ser configurado para outros
export const appDataSource = new DataSource({
  type: 'postgres',
  host: "localhost",
  port: 5432,
  username:type,
  password:pass,
  database: database,
  synchronize: true,
  entities: ["build/entity/*.js"],
});


 

//inicia o servidor express dps de conectar no banco
const run = async () => {
  const connection = await appDataSource.initialize();
  await app(port);
};

run();