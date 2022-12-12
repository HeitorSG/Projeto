export interface Record{
    id?: number;
}

export interface Produto extends Record {
    id?: number;
    productName: string;
    description: string;
    sellPrice: number;
    grossWeight:number;
    liquidWeight:number;
}

export interface Cliente extends Record {
    id?: number;
    clientName:string;
    fantasyName:string;
    document:string;
    address:string;
}