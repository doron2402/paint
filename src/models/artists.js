let mongoose = require('mongoose');
let artistsSchema = require(__BASE + '/src/schemas').artists;
let artistModel = mongoose.model('Artist', artistsSchema);

module.exports = artistModel;