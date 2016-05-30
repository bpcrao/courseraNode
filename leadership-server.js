var mongoose = require('mongoose'),
  assert = require('assert'),
  Leaderships = require('./models/leaderships');

var url = 'mongodb://localhost:27017/conFusion';

mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, "connection error"));

db.once('open', function() {
  console.log("connection opened");

  var newPromotion = Leaderships({
    "name": "Peter Pan 1",
    "image": "images/alberto.png",
    "designation": "Chief Epicurious Officer",
    "abbr": "CEO",
    "description": "Our CEO, Peter, . . ."
  });

  Leaderships.create(newPromotion, function(err, promotion) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("created");
    var id = promotion._id;
    setTimeout(function() {
      Leaderships.findByIdAndUpdate(id, {
        $set: {
          description: "Updated the promotion"
        }
      }).exec(function(err, dish) {
        console.log("updated description of promotion");
      });
    }, 3000);
  });


  Leaderships.find({}, function(err, promitions) {
    console.log(promitions);
    // db.collection('dishes').drop(function() {
    //   console.log("dishes are dropped");
    // })
  });
})
