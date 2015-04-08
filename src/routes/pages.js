let express = require('express');
let pagesRoute = express.Router();
let mw = require(__BASE + '/src/middlewares');

pagesRoute.get('/', function(req, res){
  res.render('pages/home', {
    title: "Paint.io",
    header: "Find Painters"
  });
});

pagesRoute.get('/home', function(req, res){
  res.render('pages/home', {
    title: "Paint.io",
    header: "Find Painters"
  });
});

module.exports = pagesRoute;