import { Cliente } from '../../interfaces/RecordEntities';
import { RecordIndex } from '../Record';
import { ClienteListItem } from './ListItem';
import { ClienteFormFields } from './FormFields';

export const ClienteIndex: React.FC = () => {
    const apiOptions = {};

    const emptyRecord = {
        codigo: 0,
        nome: '',
        fantasia: '',
        documento: '',
        endereco: '',
    }

    return (
        <RecordIndex<Cliente>
            ListItem={ClienteListItem}
            apiPath="clientes"
            apiOptions={apiOptions}
            emptyRecord={emptyRecord}
            FormFields={ClienteFormFields}
            />

    )
}