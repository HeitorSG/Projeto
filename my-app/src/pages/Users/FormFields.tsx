import { User } from '../../interfaces/RecordEntities';
import { FormFieldsProps } from '../../interfaces/PageProps';
import { Page, usePage } from '../../contexts/Page';

type IProps = FormFieldsProps<User>;

export const UserFormFields: React.FC<IProps> = ({formState, handleChange}) => {
    const { page, setPage } = usePage();
    return(
        <div>
            <div>
                <label>Nome</label>
                <input 
                    type="text"
                    name="nome"
                    value={formState.nome}
                    onChange={handleChange}
                    />
            </div>
            <div>
                <label>E-mail</label>
                <input
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    />
            </div>
            <div>
            <label>Senha</label>
            <input
                type="text"
                name="senha"
                value={formState.senha}
                onChange={handleChange}
                />
            </div>
            <button className='bt-login' onClick={() => setPage(Page.Login)}>Voltar para Login</button>
            
        </div>
    )
}