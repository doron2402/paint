let mwUsers = {};
let Joi = require('joi');
let userSchema = Joi.object().options({ abortEarly: false }).keys({
  email: Joi.string().email().required().label('User Email'),
  username: Joi.string().min(6).required(),
  password: Joi.string().min(8).required(),
  passwordConfirmation: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' }, label: 'Password Confirmation' } }).label('This label is not used because language.label takes precedence'),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  confirm: Joi.number().optional()
});


mwUsers.validateSignupField = (req, res, next)  => {
  if (!req.body || (!req.body.email && !req.body.username) || !req.body.password) {
    return next('Missing Params');
  }
  return next();
};

mwUsers.validateCreateAttributes = (req, res, next) => {
  console.log(req.body);
  if (!req.body){
    return next('Missing Params');
  }

  Joi.validate(req.body, userSchema, function (err, value) {
    if (err) {
      console.log(err);
      return next('Missing Params');
    }
    return next();
  });

};

module.exports = mwUsers;