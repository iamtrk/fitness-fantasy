var util = require('util')
var foodModel = require('../model/foodModel')

 exports.foodsByManufacturer = function(req,res){
  console.log("Incoming parameter is "+req.params.manufacturer)
  foodModel.fudlist(req.params.manufacturer, function(err,teams){
  if(err){
  res.send("Error in Extracting the data from DB");
  }
  var z= JSON.stringify(teams[1])
  var y = JSON.parse(z);
  console.log("Nutrient is is "+y.id);
  res.render('food', { title: req.params.manufacturer, nutrient: y.description});
  });
 }
 exports.pickRandomFood= function(req,res){
 foodModel.allFoodIds(function(err,idList){
 if(err){
 console.log("DB Exception hehe");}
 console.log(idList[Math.floor(Math.random()*idList.length)].id)
 foodModel.foodById(idList[Math.floor(Math.random()*idList.length)].id, function(err,food){
 if(err) {
 res.send("Error Extracting data from DB");
 }
 var x = JSON.stringify(food)
 var w = JSON.parse(x)
 console.log()
 res.render('food',{title:w[0].description,nutrient:w[0].nutrients[2].description }) 
 });
 });
 
 }