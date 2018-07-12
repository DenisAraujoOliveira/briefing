export class Produto {
    produto_id: number;
    nome: string;
    cliente_id: number;

    constructor(produto_id: number,nome: string,cliente_id: number){
        this.produto_id=produto_id;
        this.nome=nome;
        this.cliente_id=cliente_id;
    }   
    

}   

