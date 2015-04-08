let settings = {};
const ENVIRONMENTS = ['develop', 'stage', 'production'];
settings.env = (process.env.NODE_ENV && ENVIRONMENTS.indexOf(process.env.NODE_ENV) !== -1) ? process.env.NODE_ENV : 'develop';
settings.config = require('./' + settings.env);
module.exports = settings;