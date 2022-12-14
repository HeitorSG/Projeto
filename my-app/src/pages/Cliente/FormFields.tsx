import { Cliente } from "../../interfaces/RecordEntities";
import { FormFieldsProps } from "../../interfaces/PageProps";

type IProps = FormFieldsProps<Cliente>;

export const ClienteFormFields: React.FC<IProps> = ({ formState, handleChange }) => {
    return(
        <div>
            <div>
                <label>Código</label>
                <input
                    type="number"
                    name="codigo"
                    value={formState.codigo}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Nome</label>
                <input 
                    type="text"
                    name="nome"
                    value={formState.nome}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Nome Fantasia</label>
                <input 
                type="text"
                name="fantasia"
                value={formState.fantasia}
                onChange={handleChange} />
            </div>
            <div>
                <label>Documento</label>
                <input
                    type="text"
                    name="documento"
                    value={formState.documento}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Endereço</label>
                <input
                    type="text"
                    name="endereco"
                    value={formState.endereco}
                    onChange={handleChange} />
            </div>
        </div>
    )
}