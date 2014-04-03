
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , foodRoutes = require('./routes/foodRoutes')
  , http = require('http')
  , path = require('path')
  , fs   = require('fs');

var app = express();
var logFile = fs.createWriteStream('./myLogFile.log', {flags: 'a'});
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger({stream: logFile}));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/mnf/:manufacturer',foodRoutes.foodsByManufacturer)
app.get('/random', foodRoutes.pickRandomFood)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
