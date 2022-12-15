import { FindOptionsWhere, Repository } from "typeorm";
import e, { Request, Response } from 'express';

export type user ={
  id: number,
  email: string,
  senha: string,
  nome: string,
}
//codigo de Login busca um email no repositorio e checa com o recebido

export const loginController = <T extends {email: string}>(repository: Repository<T>) => {
  const login = async (req: Request, res: Response) => {
    // return one record by email
    let check: user;
      const results = await repository.findOne({where:{email:req.body.email} as FindOptionsWhere<T>});
      if(results){
        check = JSON.parse(JSON.stringify(results));
        if(check.email === req.body.email){
          if(check.senha === req.body.senha){
            return res.send(results);
          }else{
            return res.send(e);
          }

        }else {
          return res.send(e);
        }
      }      
  };

  return {login};
};