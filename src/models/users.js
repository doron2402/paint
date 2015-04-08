let mongoose = require('mongoose');
let usersSchema = require(__BASE + '/src/schemas').users;
let userModel = mongoose.model('User', usersSchema);
let hash = require(__BASE + '/src/adapters').password.hash;

let checkForLoginParams = (args) => {
  return new Promise((resolve, reject) => {
    if (!args.password || (!args.username && !args.email)) {
      reject('Missing Params');
    }
    resolve(args);
  });
};

let checkForCreateUserParams = (params) => {
  return new Promise((resolve, reject) => {
    if (!params.username || !params.email || !params.password || !params.firstName || !params.lastName) {
      return reject('Missing Params');
    }else {
      resolve(params);
    }
  });
};

userModel.loginUser = (args, cb) => {
  checkForLoginParams(args).then((args) => {

    let query = {'username': args.username};
    if (args.type === 'email' && args.email) {
      query = {'email': args.email};
    }

    userModel.findOne(query, (err, user) => {
      if (err || !user) {
        return cb(err);
      }
      hash(args.password, user.salt, (err, password) => {
        if (err) {
          return cb(err);
        }
        if (password === user.password)
        {
          console.log('Auth Successfully');
          return cb(null, user);
        }else {
          console.log('Auth Wrong.!');
          return cb('Authentication Fail');
        }
      });
    });
  }).catch(err => {
    return cb(err);
  });
};

let createUserDocument = (params) => {
  hash(params.password, (err, salt, password) => {
    params.salt = salt;
    params.password = password;
    new userModel({
      username    : params.username,
      email       : params.email,
      password    : params.password,
      salt        : params.salt,
      firstName   : params.firstName,
      lastName    : params.lastName,
      updatedAt   : Date.now(),
      createdAt   : Date.now()
    }).save( function( err, user, count ){
      return new Promise((resolve, reject) => {
        if(err || count === 0) {
          reject({error: err, count: count});
        }
        resolve({user: user, count: count});
      });
    });
  });
};

userModel.createNewUser = (args) => {
  return checkForCreateUserParams(args).then(createUserDocument(args));
};

module.exports = userModel;