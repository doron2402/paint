let bodyParser = require('body-parser');
let csrf = require('csurf');
let csrfProtection = csrf({ cookie: true });
let parseForm = bodyParser.urlencoded({ extended: false });
let express = require('express');
let artistsRoute = express.Router();

artistsRoute.get('/artists/signup/basic', csrfProtection, (req, res) => {
  res.render('artists/signup-basic', {
    title: "EJS example",
    header: "Some businesses",
    csrfToken: req.csrfToken()
  });
});

artistsRoute.get('/artists/signup/studio', csrfProtection, (req, res) => {
  res.render('artists/signup-basic', {
    title: "EJS example",
    header: "Some businesses",
    csrfToken: req.csrfToken()
  });
});

artistsRoute.get('/artists/signup/complete', csrfProtection, (req, res) => {
  res.render('artists/signup-basic', {
    title: "EJS example",
    header: "Some businesses",
    csrfToken: req.csrfToken()
  });
});


module.exports = artistsRoute;