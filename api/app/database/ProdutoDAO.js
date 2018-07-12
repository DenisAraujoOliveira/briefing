function ProdutoDAO(connection) {
	this._connection = connection;
}

ProdutoDAO.prototype.salva = function(produto,callback){
    this._connection.query("INSERT INTO produto SET ?",produto,callback);
	    
}


module.exports = function(){
    return ProdutoDAO;
}