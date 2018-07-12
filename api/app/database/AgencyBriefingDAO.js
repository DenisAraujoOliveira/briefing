function AgencyBriefingDAO(connection) {
	this._connection = connection;
}

AgencyBriefingDAO.prototype.salva = function(briefing,callback){
    this._connection.query("INSERT INTO agency_briefing(agencyBrief_id,responsavel, objetivo, publico_demografico,publico_perfil,publico_comportamental, insight, mensagem, pilares, entregaveis, informacoes, mandatorio, hora_cadastrada,clientBrief_id,campanha_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[briefing.agencyBrief_id,briefing.responsavel,briefing.objetivo,briefing.publico_demografico,briefing.publico_perfil,briefing.publico_comportamental,briefing.insight,briefing.mensagem,briefing.pilares,briefing.entregaveis,briefing.informacoes,briefing.mandatorio,briefing.hora_cadastrada,briefing.clientBrief_id,briefing.campanha.campanha_id],callback);
	    
}

AgencyBriefingDAO.prototype.buscaPorId = function(id,callback){
    var options = {sql:"SELECT * FROM agency_briefing INNER JOIN campanha ON agency_briefing.campanha_id = campanha.campanha_id INNER JOIN produto ON campanha.produto_id = produto.produto_id INNER JOIN clientes ON produto.cliente_id = clientes.cliente_id WHERE agency_briefing.agencyBrief_id = '"+id+"'", nestTables:true};
    this._connection.query(options, callback);

}


module.exports = function(){
    return AgencyBriefingDAO;
}