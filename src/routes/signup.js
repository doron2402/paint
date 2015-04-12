let express = require('express');
let signupRoute = express.Router();
let mw = require(__BASE + '/src/middlewares');
let usersController = require(__BASE + '/src/controllers').users;
let signupController = require(__BASE + '/src/controllers').signup;
let bodyParser = require('body-parser');
let csrf = require('csurf');
let csrfProtection = csrf({ cookie: true });
let parseForm = bodyParser.urlencoded({ extended: false });


signupRoute.get('/users/signup', signupController.getUserSignupForm);

signupRoute.get('/artists/signup', signupController.getArtistSignupForm);

usersRoute.post('/users/signup', mw.users.validateCreateAttributes, usersController.postCreateUser);

usersRoute.post('/users/create', mw.users.validateCreateAttributes, usersController.postCreateUser);

module.exports = signupRoute;