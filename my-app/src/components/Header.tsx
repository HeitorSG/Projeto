import { usePage, Page } from '../contexts/Page';

export const Header: React.FC = () => {
    const { page, setPage } = usePage();

    const pageButton = (pageName: Page) => {
        return (
            <button className={pageName === page ? 'active' : ''} onClick={() => setPage(pageName)}>
                {pageName}
            </button>
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
            </div>
        </div>
      </header>
    );
}