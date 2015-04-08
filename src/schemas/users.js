let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userType = {
    values: ['admin', 'artist', 'user'],
    message: 'User Type validator failed for path `{PATH}` with value `{VALUE}`'
};

let userSchema = new Schema({
  type: {
    type: String,
    enum: userType,
    default: 'user'
  },
  name: {
    first: String,
    last: String
  },
  username: {
    type: String,
    index: { unique: true },
    lowercase: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    index: { unique: true },
    lowercase: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  salt: String,
  active: Boolean,
  phone: String,
  followers:{
    count: Number,
    ids: []
  },
  following: {
    count: Number,
    ids: []
  },
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now }
});

userSchema.pre('save', function(next){
  var now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  next();
});

userSchema.pre('update', function(next){
  var now = new Date();
  this.updatedAt = now;
  if ( !this.createdAt ) {
    this.createdAt = now;
  }
  next();
});

module.exports = userSchema;