let express = require('express');
let controllers = require(__BASE + '/src/controllers');
let searchRoute = express.Router();
let bodyParser = require('body-parser');
let csrf = require('csurf');
let csrfProtection = csrf({ cookie: true });
let parseForm = bodyParser.urlencoded({ extended: false });

searchRoute.get('/search', csrfProtection, controllers.search.getUserSignupForm);

module.exports = searchRoute;