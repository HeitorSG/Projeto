import { Produto } from '../../interfaces/RecordEntities';
import { RecordIndex } from '../Record';
import { ProdutoListItem } from './ListItem';
import { ProdutoFormFields } from './FormFields';
//estrutura principal de pagina de produtos
export const ProdutoIndex: React.FC = () => {
    const apiOptions = {};

    const emptyRecord = {
        codigo: 0,
        descricao: '',
        codBarras: '',
        precoVenda: 0,
        pesoBruto: 0,
        pesoLiquido: 0,
    };

    return (
        <RecordIndex<Produto>
            ListItem = {ProdutoListItem}
            apiPath = "produtos"
            apiOptions = {apiOptions}
            FormFields = {ProdutoFormFields}
            emptyRecord = {emptyRecord}    
        />
    )
}