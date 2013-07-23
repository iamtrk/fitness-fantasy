var util = require('util')
var foodModel = require('../model/foodModel')

 exports.foodsByManufacturer = function(req,res){
  console.log("Incoming parameter is "+req.params.manufacturer)
  foodModel.fudlist(req.params.manufacturer, function(err,teams){
  if(err){
  res.send("Error in Extracting the data from DB");
  }
  var x = teams[1].get("nutrients")
  var z= JSON.stringify(x[1])
  var y = JSON.parse(z);
  console.log("Nutrient is is "+x);
  res.render('food', { title: req.params.manufacturer, nutrient: y.description});
  
  });
 }