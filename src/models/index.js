let mongoose = require('mongoose');
let settings = require(__BASE + '/src/settings');
let mongoDBUri;

if (settings.config.mongodb.uri) {
  mongoDBUri = settings.config.mongodb.uri; //Prod
} else {
  mongoDBUri = 'mongodb://' + settings.config.mongodb.host + '/' + settings.config.mongodb.db; //Dev
}

mongoose.connect(mongoDBUri, (err) => {
    if (err) {
      throw err;
    }
    console.log('Connect to mongoDB');
});

let schemas = require(__BASE + '/src/schemas');

let models = {
  users: require('./users'),
  artists: require('./artists'),
  artwork: require('./artwork')
};
module.exports = models;