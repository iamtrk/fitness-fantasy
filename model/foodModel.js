

var mongoose = require('mongoose');
//var db = mongoose.connection;
//var db = mongoose.createConnection('mongodb://localhost/enron');
var messageSchema = mongoose.Schema({
        id:Number,
        description:String,
		tags:[String],
		manufacturer:String,
		group:String,
		portions:[{amount:Number,unit:String,grams:Number}],
		nutrients:[{value:Number,units:String,description:String,group:String}]		
	});
exports.fudlist = function(manufacture, callback){
var conn = mongoose.createConnection('mongodb://localhost/enron');
//mongoose.connect('mongodb://localhost/enron');
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
  var essage = conn.model('foods',messageSchema);
   essage.find({'manufacturer':manufacture}, function (err, teams) {
   if(err){
    onErr(err,callback);
   }else{
    //mongoose.connection.close();
	mongoose.disconnect()
    console.log(teams.length);
	callback("",teams)
    }
})
//});
  };

exports.allFoodIds = function(callback){
var conn = mongoose.createConnection('mongodb://localhost/enron');
//mongoose.connect('mongodb://localhost/enron');
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
  var essage = conn.model('foods',messageSchema);
  essage.find({}, 'id ', function (err, teams) {
   if(err){
    onErr(err,callback);
   }else{
    //mongoose.connection.close();
	mongoose.disconnect()
    console.log(teams.length);
	callback("",teams)
    }
})
//}); 
 };

exports.foodById = function(id, callback){
var conn = mongoose.createConnection('mongodb://localhost/enron');
//mongoose.connect('mongodb://localhost/enron');
//db.on('error', console.error.bind(console, 'connection error:'));
//db.once('open', function() {
  var essage = conn.model('foods',messageSchema);
  essage.find({'id':id}, function (err, food) {
   if(err){
    onErr(err,callback);
   }else{
    //mongoose.connection.close();
	mongoose.disconnect()
    callback("",food)
    }
})
//}); 
 };
   