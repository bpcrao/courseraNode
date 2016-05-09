var MongoClient = require('mongodb').MongoClient,
assert = require('assert');

var url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url,function(err,db){
  assert.equal(err,null);
  console.log("Connected to the server");

  var collection = db.collection("dishes");

  collection.insertOne({name:"pizza"},function(err,result){
    assert.equal(err,null);
    console.log("inserted data");
    console.log(result.ops);

    collection.find({}).toArray(function(err,dishes){
      assert.equal(err,null);
      console.log("Found Dishes");
      console.log(dishes);

      db.dropCollection("dishes",function(err,result){
        assert.equal(err,null);
        console.log("Dropped sucessfully");
        db.close();
        console.log("Connection closed");
      })
    })
  });

});
