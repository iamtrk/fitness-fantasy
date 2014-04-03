fitness-fantasy
===============
This is simple application developed in Node.js + Express + Mongoose + MongoDB
If you want to run it in your machine download the json files from links and import 
into your MongoDB.

Import following json files into jsonFoods database and foods collections.

https://s3-ap-northeast-1.amazonaws.com/ravikumar-ste/onefood.json
https://s3-ap-northeast-1.amazonaws.com/ravikumar-ste/twofood.json
   Use --jsonArray arguement while importing using command line tool mongoimport
   
   Ex: mongoimport -d jsonFoods -c foods < "Path to the json file without quotes" --jsonArray.
   After deploying go to '/random' URI.

Going through the code you can understand how to wire Node.js and MongoDB through mongoose,
and using Express web framework with Node.js
