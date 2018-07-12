export class RefacaoBriefing {
    reBrief_id: string;
    responsavel: string;
    entregaveis: string;
    objetivo: string;
    publico_demografico: string;
    publico_perfil: string;
    publico_comportamental: string;
    insight: string;
    mensagem: string;        
    pilares: string;
    informacoes: string;
    mandatorio: string;
    hora_cadastrada: string;
    agencyBrief_id: string;


    constructor(reBrief_id: string,responsavel: string,entregaveis: string,objetivo: string,publico_demografico: string,publico_perfil: string,publico_comportamental: string,insight: string,mensagem: string,pilares: string,informacoes: string,mandatorio: string,agencyBrief_id: string){
        this.reBrief_id = reBrief_id;
        this.responsavel = responsavel;
        this.entregaveis = entregaveis;
        this.objetivo = objetivo;
        this.publico_demografico = publico_demografico;
        this.publico_perfil = publico_perfil;
        this.publico_comportamental = publico_comportamental;
        this.insight = insight;
        this.mensagem = mensagem;
        this.pilares = pilares;
        this.informacoes = informacoes;
        this.mandatorio = mandatorio;
        this.agencyBrief_id = agencyBrief_id;
    }
}
