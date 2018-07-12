export class Cliente {
    id: number;
    url: string;
    nome_cliente: string;
    
    constructor(id: number,url: string,nome_cliente: string){
        this.id = id;
        this.url = url;
        this.nome_cliente = nome_cliente;
    }
    
}
