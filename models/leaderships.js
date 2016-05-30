var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var leadershipSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  image: {
    type: String
  },
  designation: {
    type: String
  },
  abbr: {
    type: String
  },
  description: {
    type: String
  }
}, {
  timestamps: true
});

var leaderships = mongoose.model('Leadership', leadershipSchema);

module.exports = leaderships;
