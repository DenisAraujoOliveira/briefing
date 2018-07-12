var path = require('path');
var bodyParser = require('body-parser').json();
var uuidv1 = require('uuid/v1');

module.exports = function(app){
	app.get('/api/clientes', function(req,res){

		var connection = app.database.databaseFactory();
		var clienteDAO = new app.database.ClienteDAO(connection);
		clienteDAO.lista(function(err, results){
			try{
				if(results== undefined || results == null){
					res.status(400).send('Lista de clientes não carregada.');
				}else{
					res.json(results);
				}
			}catch(err){
				res.status(400).send('Lista de clientes não carregada.');
			}
		});

		connection.end();
	});

	app.get('/api/client_brief/:id', function(req,res){
		var connection = app.database.databaseFactory();
		var clientbriefingDAO = new app.database.ClientBriefingDAO(connection);
		clientbriefingDAO.buscaPorId(req.params.id,function(err, result){			
			try{
				if(result[0]== undefined || result[0] == null){
					res.status(400).send({'error':'ID Inválido'});
				}else{
					res.json(result[0]);
				}
			}catch(err){
				res.status(400).send({'error':'ID Inválido'});
			}
		});
		connection.end();
	});

	app.get('/api/agency_brief/:id', function(req,res){
		var connection = app.database.databaseFactory();
		var AgencyBriefing = new app.database.AgencyBriefingDAO(connection);
		AgencyBriefing.buscaPorId(req.params.id,function(err, result){			
			try{
				if(result[0]== undefined || result[0] == null){
					res.status(400).send({'error':'ID Inválido'});
				}else{
					res.json(result[0]);
				}
			}catch(err){
				res.status(400).send({'error':'ID Inválido'});
			}
		});
		connection.end();
	});

    app.post('/api/agency_brief/salva', bodyParser , function(req,res){
    	
    	var brief = req.body;
    	brief.agencyBrief_id = uuidv1();
    	var connection = app.database.databaseFactory();
		var AgencyBriefing = new app.database.AgencyBriefingDAO(connection);

		AgencyBriefing.salva(brief, function (error, results, fields) {
  			if(error){
				return res.status(400).send({'error':'Brief da agência não cadastrado'});
  			}else{
				res.send(brief.agencyBrief_id);
  			}
			
		});

		connection.end();

    })
    app.post('/api/reBrief/salva', bodyParser , function(req,res){
    	
    	var brief = req.body;
    	brief.reBrief_id = uuidv1();
    	var connection = app.database.databaseFactory();
		var reBriefing = new app.database.reBriefingDAO(connection);

		reBriefing.salva(brief, function (error, results, fields) {
  			if(error){
				return res.status(400).send({'error':'reBriefing agência não cadastrado'});
  			}else{
				res.send(brief.reBrief_id);
  			}
			
		});

		connection.end();

    })    
    app.post('/api/client_brief/salva', bodyParser , function(req,res){
    	
    	var brief = req.body;
		var id_produto;
		var id_campanha;
		brief.clientBrief_id = uuidv1();
    	var connection = app.database.databaseFactory();

		var produtoDAO = new app.database.ProdutoDAO(connection);

		produtoDAO.salva(brief.produto, function (error, results, fields) {
			if(error) {
				res.status(400).send({'error':'Produto não cadastrado'});
			}
			else{
			  	id_produto = results.insertId;
				brief.campanha.produto_id = id_produto;
				var campanhaDAO = new app.database.CampanhaDAO(connection);
				campanhaDAO.salva(brief.campanha, function (err, results, fields) {
				  	if(err) {
				  		res.status(400).send({'error':'Campanha não cadastrado'});
				  	}
				  	else{
				  		id_campanha = results.insertId;
		  				brief.campanha_id = id_campanha;
						var clientbriefingDAO = new app.database.ClientBriefingDAO(connection);

						clientbriefingDAO.salva(brief, function (errr, results, fields) {
							if(errr) {
								res.status(400).send({'error':'Brief do cliente não cadastrado'});
							}
						  	res.send(brief.clientBrief_id)
						});
		  			}
				});
			}
			

		})
    })	

    app.post('/api/produto/salva', bodyParser , function(req,res){
    	
		var produto = req.body;
		var id_produto;

		var connection = app.database.databaseFactory();
		var produtoDAO = new app.database.ProdutoDAO(connection);
		produtoDAO.salva(produto, function (error, results, fields) {
			if (error) {

				res.status(400).send({'error':'Produto não cadastrado'})
			}else{
			  	id_produto = results.insertId;
			  	res.json(results)
			}
			})
		});
			

    app.post('/api/campanha/salva', bodyParser , function(req,res){
    	
    	var campanha = req.body;
    	var id_campanha;

    	var connection = app.database.databaseFactory();
		var campanhaDAO = new app.database.CampanhaDAO(connection);
		campanhaDAO.salva(campanha, function (error, results, fields) {
		  	if (error){ 
		  		res.status(400).send({'error':'Campanha não cadastrado'})
		  	}else{
		  		id_campanha = results.insertId;
			  	res.json(results)
		  	}
		});
		
    })	

}