import React, {createContext, useContext, useState} from 'react';
//contexto responsavel pelas paginas
export enum Page {
    Login = 'Login',
    Produtos = 'Produtos',
    Clientes = 'Clientes',
    Users = 'Users',
}

type ContextType = {
    page: Page;
    setPage: (page: Page) => void;
}

type children = {
    children?: React.ReactNode;
}

const Context = createContext<ContextType>({
    page: Page.Login,
    setPage: (page: Page) => console.warn('no page provider'),
});

export const usePage = () => useContext(Context);

export const PageStore: React.FC<children> = ({children})  => {
    const [page, setPage] = useState(Page.Login);
    return (
        <Context.Provider value={{ page, setPage }}>{children}</Context.Provider>
    );
}