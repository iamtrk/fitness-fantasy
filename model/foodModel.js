

var mongoose = require('mongoose');
var db = mongoose.connection;
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
mongoose.connect('mongodb://localhost/enron');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var essage = mongoose.model('foods',messageSchema);
   essage.find({'manufacturer':manufacture}, function (err, teams) {
   if(err){
    onErr(err,callback);
   }else{
    mongoose.connection.close();
    console.log(teams.length);
	callback("",teams)
    }
})
});  };

exports.allFoodIds = function(callback){
mongoose.connect('mongodb://localhost/enron');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var essage = mongoose.model('foods',messageSchema);
  essage.find({}, 'id ', function (err, teams) {
   if(err){
    onErr(err,callback);
   }else{
    mongoose.connection.close();
    console.log(teams.length);
	callback("",teams)
    }
})
});  };

exports.foodById = function(id, callback){
mongoose.connect('mongodb://localhost/enron');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var essage = mongoose.model('foods',messageSchema);
  essage.find({'id':id}, function (err, food) {
   if(err){
    onErr(err,callback);
   }else{
    mongoose.connection.close();
  
	callback("",food)
    }
})
});  };
   