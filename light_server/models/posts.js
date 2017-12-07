var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Posts', new Schema({
  name: String,
  content: String,
}));
