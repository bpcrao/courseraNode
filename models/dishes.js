var mongoose = require('mongoose'),
  commentSchema = require('./comment');
var Schema = mongoose.Schema;

var dishSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  },
  comments: [commentSchema]
}, {
  timestamps: true
});

var Dishes = mongoose.model('Dish', dishSchema);

module.exports = Dishes;
