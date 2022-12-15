import { User } from "../../interfaces/RecordEntities";
import { ListItemProps } from "../../interfaces/PageProps";

type IProps =  ListItemProps<User>;

export const UserListItem: React.FC<IProps> = ({
    record
}) => {
    return (
        <div className="title">{record.nome}</div>
    );
}