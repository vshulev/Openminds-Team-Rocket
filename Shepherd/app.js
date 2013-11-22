/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

/*
 * Pages
 */
var routes = require('./routes');
var user = require('./routes/user');
var test = require('./routes/test');
var colChart = require('./routes/colChart');
var machineInfo = require('./routes/machineInfo');
var software = require('./routes/software');
var health = require('./routes/health');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*
 * Routes
 */
app.get('/', routes.index);
app.get('/users', user.list);
app.get('/test', test.display);
app.get('/colChart', colChart.display);

app.get('/machineInfo/:id', machineInfo.display);
app.get('/software', software.display);
app.get('/health', health.display);
app.get('/machineInfo/machine/:id', machineInfo.getMachines);
app.get('/machineInfo/software/:id', machineInfo.getSoftware);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
