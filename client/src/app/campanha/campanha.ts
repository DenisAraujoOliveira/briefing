
export class Campanha{
    campanha_id: number;
    nome_campanha: string;
    comeco_campanha: string;
    final_campanha: string;
    produto_id: number;

    constructor(campanha_id: number,nome_campanha: string,comeco_campanha: string,final_campanha: string,produto_id: number){
        this.campanha_id = campanha_id;
        this.nome_campanha = nome_campanha;
        this.comeco_campanha = comeco_campanha;
        if(this.final_campanha == null || this.final_campanha == undefined){
            this.final_campanha = "Data não especificada"
        }else{
            this.final_campanha = final_campanha;
        }


        this.produto_id = produto_id;
    }
}