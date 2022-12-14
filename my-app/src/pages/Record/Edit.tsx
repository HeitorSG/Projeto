import { Record } from "../../interfaces/RecordEntities";
import { RecordEditProps } from "../../interfaces/PageProps";
import { RecordForm } from "./Form";

export const RecordEdit = <T extends Record>({
    FormFields,
    activeRecord,
    update,
    remove,
}: RecordEditProps<T>) => {
    return (
        <div className="edit">
            <button className="bt-remove" onClick={() => remove(activeRecord)}></button>
            <h2>Edit</h2>
            <RecordForm 
            FormFields={FormFields} 
            activeRecord={activeRecord} 
            submitAction={update}
            />
        </div>
    )
}