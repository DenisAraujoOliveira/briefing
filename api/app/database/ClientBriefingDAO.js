function ClientBriefingDAO(connection) {
	this._connection = connection;
}

ClientBriefingDAO.prototype.salva = function(briefing,callback){
    this._connection.query("INSERT INTO client_briefing (clientBrief_id,entregavel,objetivo_vendas,objetivo_visibilidade,objetivo_engajamento,kpi_vendas,kpi_visibilidade,kpi_engajamento,promessa,verba,publico,responsavel,campanha_id,hora_cadastrada) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[briefing.clientBrief_id,briefing.entregavel,briefing.objetivo_vendas,briefing.objetivo_visibilidade,briefing.objetivo_engajamento,briefing.kpi_vendas,briefing.kpi_visibilidade,briefing.kpi_engajamento,briefing.promessa,briefing.verba,briefing.publico,briefing.responsavel,briefing.campanha_id,briefing.hora_cadastrada],callback);
	    
}
ClientBriefingDAO.prototype.buscaPorId = function(id,callback){
    var options = {sql:"SELECT * FROM client_briefing INNER JOIN campanha ON client_briefing.campanha_id = campanha.campanha_id INNER JOIN produto ON campanha.produto_id = produto.produto_id INNER JOIN clientes ON produto.cliente_id = clientes.cliente_id WHERE client_briefing.clientBrief_id ='"+id+"'", nestTables:true};
    this._connection.query(options, callback);

}

module.exports = function(){
    return ClientBriefingDAO;
}