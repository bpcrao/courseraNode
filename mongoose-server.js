
var mongoose = require('mongoose'),
 assert = require('assert'),
 Dishes = require('./models/dishes');

var url = 'mongodb://localhost:27018/conFusion';

mongoose.connect(url);
var db = mongoose.connection;
 db.on('error',console.error.bind(console,"connection error"));

 db.once('open',function(){
   console.log("connection opened");

   var newDish = Dishes({
     name: 'pizzza',
     description:'test'
   });

   newDish.save(function(err,dishes){
     Dishes.find({},function(err,dishes){
       console.log(dishes);
       db.collection('dishes').drop(function(){
         console.log("dishes are dropped");
       })
     });
   });
 })
