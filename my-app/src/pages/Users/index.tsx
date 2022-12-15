import { User } from "../../interfaces/RecordEntities";
import { RecordIndex } from "../Record";
import { UserListItem} from './ListItem';
import { UserFormFields} from './FormFields';

export const UserIndex: React.FC = () => {
    const apiOptions = {};

    const emptyRecord = {
        id: 0,
        name: '',
        email: '',
        senha: '',
    }

    return(
        
        <RecordIndex<User>
            ListItem={UserListItem}
            apiPath="users"
            apiOptions={apiOptions}
            emptyRecord={emptyRecord}
            FormFields={UserFormFields}
            
        />
    
    )
}