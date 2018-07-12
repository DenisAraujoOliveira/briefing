function CampanhaDAO(connection) {
	this._connection = connection;
}

CampanhaDAO.prototype.salva = function(campanha,callback){
    this._connection.query("INSERT INTO campanha SET ?",campanha,callback);
	    
}


module.exports = function(){
    return CampanhaDAO;
}