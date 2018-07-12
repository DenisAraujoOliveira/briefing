function ClienteDAO(connection) {
	this._connection = connection;
}

ClienteDAO.prototype.lista = function(callback){
    this._connection.query('select * from clientes', callback);
}

module.exports = function(){
    return ClienteDAO;
}