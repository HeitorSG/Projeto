export interface Record{
    id?: number;
}

export interface Produto extends Record {
    id?: number;
    codigo: number;
    descricao: string;
    codBarras: string;
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

export interface User extends Record {
    id?: number;
    nome?: string;
    email: string;
    senha: string;

}