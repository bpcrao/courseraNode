var mongoose = require('mongoose'),
  assert = require('assert'),
  Dishes = require('./models/dishes');

var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));

db.once('open', function() {
  console.log("connection opened");

  var newDish = Dishes({
    name: 'pizzza',
    description: 'test'
  });

  Dishes.create({
    name: 'pizzza2',
    image: 'images/uthapizza.png',
    category: 'mains',
    price: '5.45',
    description: 'test',
    comments: [{
      rating: 3,
      comment: 'This is insane',
      author: 'Matt Daemon'
    }, {
      rating: 5,
      comment: 'Imagine all the eatables, living in conFusion!',
      author: 'John Lemon'
    }]
  }, function(err, dish) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("created");
    var id = dish._id;
    setTimeout(function() {
      Dishes.findByIdAndUpdate(id, {
        $set: {
          description: "Updated the dish"
        }
      }).exec(function(err, dish) {
        console.log("updated description of dish");
      });
    }, 3000);
  });


  newDish.save(function(err, dishes) {
    Dishes.find({}, function(err, dishes) {
      console.log(dishes);
      // db.collection('dishes').drop(function() {
      //   console.log("dishes are dropped");
      // })
    });
  });
})
