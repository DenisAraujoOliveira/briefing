export class ClientBrief {
    clientBrief_id: number;
    entregavel: string;
    objetivo_vendas: string;
    objetivo_visibilidade: string;
    objetivo_engajamento: string;
    kpi_vendas: string;
    kpi_visibilidade: string;
    kpi_engajamento: string;
    promessa: string;
    verba: number;
    publico: string;
    responsavel: string;

    constructor(clientBrief_id: number,entregavel: string,objetivo_vendas: string,objetivo_visibilidade: string,objetivo_engajamento: string,kpi_vendas: string,kpi_visibilidade: string,kpi_engajamento: string,promessa: string,verba: number,publico: string,responsavel: string){
        this.clientBrief_id = clientBrief_id;
        this.entregavel = entregavel;
        this.objetivo_vendas = objetivo_vendas;
        this.objetivo_visibilidade = objetivo_visibilidade;
        this.objetivo_engajamento = objetivo_engajamento;
        this.kpi_vendas = kpi_vendas;
        this.kpi_visibilidade = kpi_visibilidade;
        this.kpi_engajamento = kpi_engajamento;
        this.promessa = promessa;
        this.verba = verba;
        this.publico = publico;
        this.responsavel = responsavel;
    }

    // campanha_id: number;
    // hora_cadastrada: string;
    // nome_campanha: string;
    // comeco_campanha: string;
    // final_campanha: string;

    // produto_id: number;
    // nome: string;
    // cliente_id: number;
    // nome_cliente: string;
    // url: string;
    

}














