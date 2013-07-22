
var foodModel = require('../model/foodModel')

 exports.foodsByManufacturer = function(req,res){
  console.log("Incoming parameter is "+req.params.manufacturer)
  foodModel.fudlist(req.params.manufacturer, function(err,teams){
  if(err){
  res.send("Error in Extracting the data from DB");
  }
  console.log("Length of thr extracted data size is "+teams.length);
  res.send(teams[1].get("nutrients"));
  });
 }