let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let countryCode = {
    values: ['US', 'IL', 'CA', 'MX'],
    message: 'Country Code validator failed for path `{PATH}` with value `{VALUE}`'
};


let artistSchema = new Schema({
  address: {
    street: String,
    city: String,
    state: String,
    country: {
      type: String,
      enum: countryCode,
      default: 'US'
    }
  },
  phone: String,
  name: {
    artist: String,
    studio: String
  },
  active: Boolean,
  followers:{
    count: Number,
    ids: []
  },
  arts: [{ type: Schema.Types.ObjectId, ref: 'ArtWork' }],
  artists: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now }
});

artistSchema.pre('save', function(next){
  var now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  next();
});

artistSchema.pre('update', function(next){
  var now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  next();
});

module.exports = artistSchema;