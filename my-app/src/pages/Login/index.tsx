import { ChangeEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/Auth";
import { Page, usePage } from '../../contexts/Page'


export const LoginIndex = () => {
    const auth = useContext(AuthContext);
    const { page, setPage } = usePage();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const handleLocal = async () => {
            if(auth.user && page === Page.Login){
                 setPage(Page.Produtos);
            }
         }
         handleLocal();
    },[auth.user, setPage, page]); 

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleLogin = async () => {
        if (email && password) {
            const isLogged = await auth.signin(email, password);
            if (isLogged) {
                setPage(Page.Produtos);
            } else {
                alert("Não deu certo.");
            }
        }
    }

    

    return (
        <div className="login">
            <h2>Login</h2>

            <input
                type="text"
                value={email}
                onChange={handleEmailInput}
                placeholder="Digite seu e-mail"
            />
            <input
                type="password"
                value={password}
                onChange={handlePasswordInput}
                placeholder="Digite sua senha"
            />
            <button onClick={handleLogin}>Logar</button>
            <button onClick={() => setPage(Page.Users)}>Registrar</button>
        </div>
    );
}