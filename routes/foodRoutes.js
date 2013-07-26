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
 var randFudId = idList[Math.floor(Math.random()*idList.length)].id
 console.log(randFudId)
 foodModel.foodById(randFudId, function(err,food){
 if(err) {
 res.send("Error Extracting data from DB");
 }
 var x = JSON.stringify(food)
 var w = JSON.parse(x)[0]
  
 var Sugars = []
 var AminoAcids = []
 var Vitamins = []
 var Elements = []
 var Energy = []
 var Other = []
 var Composition = []
 
 for(i in w.nutrients){
 
    switch(w.nutrients[i].group){
	case "Elements" :
	     Elements.push(w.nutrients[i]);
		 break;
    case "Amino Acids" :
	     AminoAcids.push(w.nutrients[i]);
		 break;
    case "Vitamins" :
	     Vitamins.push(w.nutrients[i]);
		 break;
	case "Energy" :
	     Energy.push(w.nutrients[i]);
		 break;
    case "Other" :
	     Other.push(w.nutrients[i]);
		 break;
	case "Composition" :
	     Composition.push(w.nutrients[i]);
		 break;
    case "Sugars" :
	     Sugars.push(w.nutrients[i]);
		 break;		 
	
	}
   }
 
 function compare(a,b) {
  if (a.value < b.value)
     return 1;
  if (a.value > b.value)
    return -1;
  return 0;
}
Sugars.sort(compare);
AminoAcids.sort(compare);
Vitamins.sort(compare);
Elements.sort(compare);
Energy.sort(compare);
Other.sort(compare);
Composition.sort(compare);

var nul = {
name:"undefined",
description:"undefined",
value:"undefined",
units:"undefined"}

var aminos = AminoAcids.length!=0?AminoAcids[0]:nul
var sugar = Sugars.length!=0?Sugars[0]:nul
var vitamin = Vitamins.length!=0?Vitamins[0]:nul
var element = Elements.length!=0?Elements[0]:nul
var energy = Energy.length!=0?Energy[0]:nul
var other = Other.length!=0?Other[0]:nul
var compose = Composition.length!=0?Composition[0]:nul

 if(w.portions.length==0){
 res.render('error',{title:w.description})}
 else {
 var rand = Math.floor(Math.random()*w.nutrients.length);
 res.render
 ('food',{title:w.description+" "+w.portions[0].grams+" "+w.portions[0].unit,
 aName:aminos.group,aNutrient:aminos.description ,aValue:aminos.value, aUnits:aminos.units,
 bName:sugar.group,bNutrient:sugar.description ,bValue:sugar.value, bUnits:sugar.units,
 cName:vitamin.group,cNutrient:vitamin.description ,cValue:vitamin.value, cUnits:vitamin.units,
 dName:element.group,dNutrient:element.description ,dValue:element.value, dUnits:element.units,
 eName:energy.group,eNutrient:energy.description ,eValue:energy.value, eUnits:energy.units,
 fName:other.group,fNutrient:other.description ,fValue:other.value, fUnits:other.units,
 gName:compose.group,gNutrient:compose.description ,gValue:compose.value, gUnits:compose.units
 }) 
 
 }
 });
 });
 
 }