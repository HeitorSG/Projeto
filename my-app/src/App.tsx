import { Header } from './components/Header';
import { Page, usePage } from './contexts/Page';
import { ProdutoIndex } from './pages/Produto';
import { ClienteIndex } from './pages/Cliente';
import { LoginIndex } from './pages/Login';
import { UserIndex } from './pages/Users';

const App = () => {
  const { page } = usePage();
  
  const renderSwitch = () => {
    switch (page) {
      case Page.Login:
        return <LoginIndex />;
      case Page.Produtos:
        return <ProdutoIndex/>;
      case Page.Clientes:
        return <ClienteIndex/>;
      case Page.Users:
        return <UserIndex/>;
      default:
        return '';
    }
  }


  return (
    <div className="App">
      {page === Page.Login || page === Page.Users? '' : <Header />}
      {renderSwitch()}
    </div>
  );
}

export default App;
