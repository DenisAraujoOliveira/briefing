function reBriefingDAO(connection) {
	this._connection = connection;
}

reBriefingDAO.prototype.salva = function(briefing,callback){
    this._connection.query("INSERT INTO rebrief(reBrief_id,agencyBrief_id,responsavel, objetivo, publico_demografico,publico_perfil,publico_comportamental, insight, mensagem, pilares, entregaveis, informacoes, mandatorio, hora_cadastrada) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[briefing.reBrief_id,briefing.agencyBrief_id,briefing.responsavel,briefing.objetivo,briefing.publico_demografico,briefing.publico_perfil,briefing.publico_comportamental,briefing.insight,briefing.mensagem,briefing.pilares,briefing.entregaveis,briefing.informacoes,briefing.mandatorio,briefing.hora_cadastrada],callback);
	    
}

// reBriefingDAO.prototype.buscaPorId = function(id,callback){
//     var options = {sql:"SELECT * FROM rebrief INNER JOIN campanha ON agency_briefing.campanha_id = campanha.campanha_id INNER JOIN produto ON campanha.produto_id = produto.produto_id INNER JOIN clientes ON produto.cliente_id = clientes.cliente_id WHERE agency_briefing.agencyBrief_id = '"+id+"'", nestTables:true};
//     this._connection.query(options, callback);

// }


module.exports = function(){
    return reBriefingDAO;
}