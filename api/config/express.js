var express = require('express');
var load = require('express-load');
var path =  require('path');
var cors = require('cors');
var bodyParser = require('body-parser');

module.exports = function() {
	var app = express();
	
	app.set('view engine','ejs');
	app.set('views','./app/views');

	app.use(bodyParser.urlencoded({extended: true}));


	var corsOptions ={
		origin: 'http://localhost:4200',
		optionsSuccessStatus: 200
	}
	app.set('clientPath', path.join(__dirname, '../..', 'client/src'));
	console.log(app.get('clientPath'));
	app.use(express.static(app.get('clientPath')));
	app.use(cors(corsOptions))

	load('routes',{cwd:'app'}).then('database').into(app);

	return app;
}

