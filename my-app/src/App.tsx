import { Header } from './components/Header';
import { Page, usePage } from './contexts/Page';

const App = () => {
  const { page } = usePage();
  
  const renderSwitch = () => {
    switch (page) {
      case Page.Login:
        return <div>Login</div>;
      case Page.Produtos:
        return <div>Produtos</div>;
      case Page.Clientes:
        return <div>Clientes</div>;
      default:
        return '';
    }
  }


  return (
    <div className="App">
      <Header/>
      {renderSwitch()}
    </div>
  );
}

export default App;
