var mongoose = require('mongoose'),
  commentSchema = require('./comment');

require('mongoose-currency').loadType(mongoose);

var Currency = mongoose.Types.Currency;
var Schema = mongoose.Schema;

var promotionSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  image: {
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
  }
}, {
  timestamps: true
});

var Promotions = mongoose.model('Promotion', promotionSchema);

module.exports = Promotions;
