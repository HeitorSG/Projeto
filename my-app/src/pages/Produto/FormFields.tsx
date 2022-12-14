import { useFetch } from "../../hooks/useFetch";
import { FormFieldsProps } from "../../interfaces/PageProps";
import { Produto } from "../../interfaces/RecordEntities";

type IProps = FormFieldsProps<Produto>;

export const ProdutoFormFields: React.FC<IProps> = ({
    formState,
    handleChange,
}) => {
    return ( 
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
                <label>Descrição</label>
                <input 
                    type="text"
                    name="descricao"
                    value={formState.descricao}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Preço de Venda</label>
                <input
                    type="number"
                    name="precoVenda"
                    value={formState.precoVenda}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Peso Bruto</label>
                <input
                    type="number"
                    name="pesoBruto"
                    value={formState.pesoBruto}
                    onChange={handleChange} />
            </div>
            <div>
                <label>Peso Líquido</label>
                <input
                    type="number"
                    name="pesoLiquido"
                    value={formState.pesoLiquido}
                    onChange={handleChange} />
            </div>
        </div>
    )
}