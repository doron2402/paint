let authController = {};
let UserModel = require(__BASE + '/src/models').users;

let authenticate = (args, fn) => {
  if (!module.parent) {
    console.log('authenticating %s:%s', args.username, args.password);
  }
  return UserModel.loginUser(args, fn);
}

let restrict = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
}

authController.loginUser = (req, res, next) => {
  authenticate(req.body, function(err, user){
    if (user) {
      req.session.regenerate(function(){
        req.session.user = user;
        res.redirect('/profile');
      });
    } else {
      req.session.error = 'Authentication failed';
      res.redirect('/login');
    }
  });
};


module.exports = authController;