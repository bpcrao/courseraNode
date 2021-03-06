var mongoose = require('mongoose'),
  commentSchema = require('./comment');

require('mongoose-currency').loadType(mongoose);

var Currency = mongoose.Types.Currency;
var Schema = mongoose.Schema;

var dishSchema = new Schema({

  name: {
    type: String,
    required: true,
    unique: true
  },

  image: {
    type: String
  },

  category: {
    type: String
  },

  label: {
    type: String,
    default: ''
  },

  price: {
    type: Currency
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
