import {createContext, useEffect, useState} from 'react';
import { loginMutation } from '../hooks/useMutations';
import { User } from '../interfaces/RecordEntities';
//contexto responsavel pela autenticação checa se está logado e afins
export type AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>;
    singout: () => void;
}


export const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider = ({children}: {children: JSX.Element}) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const validateUser = async () => {
            const storageData = {
                email: localStorage.getItem('User'),
                senha: localStorage.getItem('UserAuth')
        }

        if(storageData){
            const data = await loginMutation().validateUser(storageData.email, storageData.senha)
            if(data.id){
                setUser(data);
            }
            }
            
        }
        validateUser();
    }, [setUser,]);

    const signin = async (email:string, password:string) => {
       const data =  await loginMutation().signin(email, password);
       if(data.id){
            setUser(data);
            localUser(data);
            return true;
       }
       return false;
    }

    const singout = async () => {
        const data = await loginMutation().logout();
        localStorage.setItem('User', '');
        localStorage.setItem('UserAuth', '');
        setUser(null);
        return data;
    }

    const localUser = (user:User) => {
        localStorage.setItem('User', user.email);
        localStorage.setItem('UserAuth', user.senha);
    }



    return (
        <AuthContext.Provider value={{user, signin, singout}}>
            {children}
        </AuthContext.Provider>
    )
}

