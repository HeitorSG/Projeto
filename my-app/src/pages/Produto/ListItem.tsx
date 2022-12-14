import { Produto } from '../../interfaces/RecordEntities';
import { ListItemProps } from '../../interfaces/PageProps';

type IProps = ListItemProps<Produto>;

export const ProdutoListItem: React.FC<IProps> = ({ record }) => {
    return (
        <div>
            <div className='title'>{record.descricao}</div>
            <div className='author'>{record.codigo}</div>
        </div>
    )
}