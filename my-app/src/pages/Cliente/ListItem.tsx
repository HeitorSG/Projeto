import { Cliente } from "../../interfaces/RecordEntities";
import { ListItemProps } from "../../interfaces/PageProps";

type IProps = ListItemProps<Cliente>;

export const ClienteListItem: React.FC<IProps> = ({ record }) => {
    return (
    <div>
        <div className="title">{record.nome}</div>
        <div className="author">{record.fantasia}</div>
    </div>
    )
}