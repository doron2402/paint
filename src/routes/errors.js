let errors = {};

errors._404 = (err, req, res, next) => {
  console.error(err.stack);
  res.status(404).send('Not Found');
};

errors._500 = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
};

errors.unknown = (req, res, next) => {
  let err = 'Unknown Route';
  return errors._500(err,req,res,next);
};
module.exports = errors;