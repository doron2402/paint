let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let expressSession = require('express-session');
let settings = require(__BASE + '/src/settings');
let ejs = require('ejs').__express;
let app = module.exports = express();
let models = require(__BASE + '/src/models');
let routes = require(__BASE + '/src/routes');
app.engine('.html', ejs);
app.set('views', __BASE + '/src/views');
app.set('view engine', 'html');

app.use(cookieParser());
app.use(expressSession({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: settings.config.session.secret
}));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//Routes
app.use(routes.static);
app.use(routes.pages);
app.use(routes.users);
app.use(routes.artists);
app.use(routes.auth);
app.use(routes.search);
app.use(routes.errors.unknown);

app.listen(settings.config.server.port, err => {
  if (err){
    console.log(err);
  }

  console.log('Server is running on port ' + settings.config.server.port);
});
