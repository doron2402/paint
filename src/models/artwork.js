let mongoose = require('mongoose');
let artWorkSchema = require(__BASE + '/src/schemas').artwork;
let artWorkModel = mongoose.model('ArtWork', artWorkSchema);

module.exports = artWorkModel;