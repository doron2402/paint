let usersController = {};
let UserModel = require(__BASE + '/src/models').users;

usersController.postCreateUser = (req, res) => {
  UserModel.createNewUser(req.body).then((resp) => {
    return res.send({code: 'ok', user: {username: resp.username}});
  }).catch(err => {
    console.log(err);
    return res.send({"code": 'err'}).code(400);
  });
};

usersController.usersVip = (req, res) => {
  return res.render('users/profile', {
    title: "EJS example",
    header: "Some users",
    user: req.session.user || {}
  });
};
module.exports = usersController;