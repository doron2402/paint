let express = require('express');
let usersRoute = express.Router();
let usersController = require(__BASE + '/src/controllers').users;
let mw = require(__BASE + '/src/middlewares');
// Dummy users
let users = [
  { name: 'tobi', email: 'tobi@learnboost.com' },
  { name: 'loki', email: 'loki@learnboost.com' },
  { name: 'jane', email: 'jane@learnboost.com' }
];

usersRoute.get('/users', function(req, res) {
  res.render('users', {
    users: users,
    title: "EJS example",
    header: "Some users"
  });
});

usersRoute.get('/users/forgot', (req, res) => {
  res.render('users/forgot', {
    title: "EJS example",
    header: "Some users"
  });
});

usersRoute.get('/profile', (req, res) => {
  console.log(req.session);
  res.render('users/profile', {
    title: "EJS example",
    header: "Some users",
    user: req.session.user || {}
  });
});

usersRoute.get('/users/vip', usersController.usersVip);

module.exports = usersRoute;