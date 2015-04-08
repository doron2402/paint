let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let artWorkSchema = new Schema({
  name: String,
  artistId: String,
  tags: [],
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now }
});

artWorkSchema.pre('save', function(next){
  var now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  next();
});

artWorkSchema.pre('update', function(next){
  var now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  next();
});

module.exports = artWorkSchema;