import { Produto } from '../../interfaces/RecordEntities';
import { RecordIndex } from '../Record';
import { ProdutoListItem } from './ListItem';

export const ProdutoIndex: React.FC = () => {
    const apiOptions = {};

    return (
        <RecordIndex<Produto>
            ListItem = {ProdutoListItem}
            apiPath = "produtos"
            apiOptions = {apiOptions}    
        />
    )
}