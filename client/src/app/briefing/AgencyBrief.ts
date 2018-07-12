export class AgencyBrief {
    agencyBrief_id: string;
    responsavel: string;
    entregavel: string;
    objetivo: string;
    publico_demografico: string;
    publico_perfil: string;
    publico_comportamental: string;
    insight: string;
    mensagem: string;        
    pilares: string;
    entregaveis: string;
    informacoes: string;
    mandatorio: string;
    hora_cadastrada: string;

    constructor(agencyBrief_id: string,responsavel: string,entregavel: string,objetivo: string,publico_demografico: string,publico_perfil: string,publico_comportamental: string,insight: string,mensagem: string,pilares: string,entregaveis: string,informacoes: string,mandatorio: string,hora_cadastrada: string){
        this.agencyBrief_id = agencyBrief_id;
        this.responsavel = responsavel;
        this.entregavel = entregavel;
        this.objetivo = objetivo;
        this.publico_demografico = publico_demografico;
        this.publico_perfil = publico_perfil;
        this.publico_comportamental = publico_comportamental;
        this.insight = insight;
        this.mensagem = mensagem;
        this.pilares = pilares;
        this.entregaveis = entregaveis;
        this.informacoes = informacoes;
        this.mandatorio = mandatorio;
        this.hora_cadastrada = hora_cadastrada;
    }

}
