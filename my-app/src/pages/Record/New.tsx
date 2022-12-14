import { Record } from "../../interfaces/RecordEntities";
import { RecordNewProps } from "../../interfaces/PageProps";
import { RecordForm } from './Form';

export const RecordNew = <T extends Record>({
    FormFields,
    activeRecord,
    create,
    success,
}: RecordNewProps<T>) => {
    return (
        <div className="new">
            <h2>Novo Cadastro</h2>
            <RecordForm 
            FormFields={FormFields} 
            activeRecord={activeRecord} 
            submitAction={create}
            success={success}
            />
        </div>
    )
}