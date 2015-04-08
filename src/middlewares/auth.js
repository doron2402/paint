let mwAuth = {};
//Check for email and password
mwAuth.checkForEmailAndPasswordInBodyParams = (req, res, next)  => {
  if (!req.body || (!req.body.email && !req.body.username) || !req.body.password) {
    return next('Missing Params');
  }
  if (!req.body.email && req.body.username.indexOf('@') !== -1) {
    req.body.email = req.body.username;
    req.body.type = 'email';
  }
  return next();
};

module.exports = mwAuth;