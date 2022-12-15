import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';
import { usePage, Page } from '../contexts/Page';
//header da paginas de produto e clientes
export const Header: React.FC = () => {
    const { page, setPage } = usePage();
    const auth = useContext(AuthContext);

    const pageButton = (pageName: Page) => {
        return (
            <button className={pageName === page ? 'active' : ''} onClick={() => setPage(pageName)}>
                {pageName}
            </button>
        );
    }

    const logoutButton = () => {
        return (
            <button className='bt-remove' onClick={async () => {
                const data = await auth.singout();
                console.log(data);
                setPage(Page.Login);
            } }>Sair</button>
        );
    }

    return (
        <header>
        <h1>
          <div className="title">React App SoftLine</div>
          <div className="subtitle">React Typescript</div>
        </h1>
        <div className='navigation' >
            <div className='internal'>
                {pageButton(Page.Produtos)}
                {pageButton(Page.Clientes)}
                {logoutButton()}
            </div>
        </div>
      </header>
    );
}