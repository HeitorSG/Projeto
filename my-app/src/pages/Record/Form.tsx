import { useEffect } from "react";
import { Record } from "../../interfaces/RecordEntities";
import { RecordFormProps } from '../../interfaces/PageProps';
import { useForm } from "../../hooks/useForm";
//controla os formularios dos cadastros
export const RecordForm = <T extends Record>({
    FormFields,
    activeRecord,
    submitAction,
    success,
}: RecordFormProps<T>) => {
    const { formState, setFormState, handleChange, handleSubmit } = useForm<T>(
        activeRecord,
        submitAction,
        );

    useEffect(() => {
        if(activeRecord.id || success) {
            setFormState(activeRecord);
        }
    }, [setFormState, activeRecord, success]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <FormFields formState={formState} handleChange={handleChange}/>
                <input type="submit" />
            </form>
        </div>
    )
}