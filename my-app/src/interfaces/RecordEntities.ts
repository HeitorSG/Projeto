export interface Record{
    id?: number;
}

export interface Produto extends Record {
    id?: number;
    codigo: number;
    descricao: string;
    precoVenda: number;
    pesoBruto:number;
    pesoLiquido:number;
}

export interface Cliente extends Record {
    id?: number;
    codigo: number;
    nome: string;
    fantasia: string;
    documento: string;
    endereco: string;
}