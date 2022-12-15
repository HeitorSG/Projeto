import { useState } from 'react';
import axios, { AxiosError} from 'axios';
import { Record } from '../interfaces/RecordEntities';

export type Action<T> = (record: T) => Promise<void>;

const api =  axios.create({
    baseURL: process.env.REACT_APP_API
});
//codigo especifico para o login
export const loginMutation = ()  =>({

        signin: async (email:string, senha: string) => {
            const response = await api.post('/userLogin', { email, senha })
            console.log(response.data);
            return response.data;
        },

        logout: async () => {
            const response = await api.post('/userLogout');
            return response.data;
        },

        validateUser: async (email: string | null, senha:string | null) => {
            const response = await api.post('/userLogin', { email, senha })
            console.log(response.data);
            return response.data;
        },
    
        
})

//Codigo de comunicação com o back para inserir, editar, visualizar, deletar
export const useMutation = <T extends Record>(
    path: string,
    callback?: Function,
    ) => {
        const [processing, setProcessing] = useState<boolean>(false);
        const[success, setSuccess] = useState<boolean>();
        const [error, setError] = useState<AxiosError>();

    const url = `${process.env.REACT_APP_API}/${path}`;

    const wrap = (fn: Action<T>) => {
        return async (record: T) =>{
            setProcessing(true);
            setSuccess(undefined);
            setError(undefined);

            fn(record).then(() => {
                setSuccess(true);
                if(callback){
                    callback();
                }
            })
            .catch((error: Error) => {
                setSuccess(false);
                setError(error as AxiosError);
            }).finally(() => {
                setProcessing(false)
            })
        }
    }

    const create: Action<T> = wrap(async (record: T) => {
        await axios.post(url, record);
    });

    const update: Action<T> = wrap(async (record: T) => {
        console.log(record.id);
        await axios.put(`${url}/${record.id}`, record);
    });

    const remove: Action<T> = wrap(async (record: T) => {
        await axios.delete(`${url}/${record.id}`);
    });


    
    return {
        create,
        update,
        remove,
        processing,
        success,
        error,
        setError,
    };
}