let express = require('express');
let authRoute = express.Router();
let mw = require(__BASE + '/src/middlewares');
let authController = require(__BASE + '/src/controllers').auth;
let bodyParser = require('body-parser');
let csrf = require('csurf');
let csrfProtection = csrf({ cookie: true });
let parseForm = bodyParser.urlencoded({ extended: false });

authRoute.get('/login', csrfProtection, (req, res) => {
  res.render('auth/login', {
    title: "EJS example",
    header: "Some businesses",
    csrfToken: req.csrfToken()
  });
});

authRoute.get('/signup/artists', csrfProtection, (req, res) => {
  res.render('auth/signup-artists', {
    title: "Artists - Signup",
    header: "Start making money$$$",
    csrfToken: req.csrfToken()
  });
});

authRoute.post('/login', parseForm, mw.auth.checkForEmailAndPasswordInBodyParams, authController.loginUser);

authRoute.get('/checkAuth', (req, res) => {
  res.render('auth/login', {
    title: "EJS example",
    header: "Some businesses"
  });
});

authRoute.get('/forgot', (req, res) => {
  res.render('auth/login', {
    title: "EJS example",
    header: "Some businesses"
  });
});

authRoute.post('/forgot', (req, res) => {
  res.render('auth/login', {
    title: "EJS example",
    header: "Some businesses"
  });
});

module.exports = authRoute;