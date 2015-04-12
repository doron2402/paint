let signupController = {};

signupController.getUserSignupForm = (req, res) => {
  res.render('signup/users', {
    title: "EJS example",
    header: "Some users"
  });
};

signupController.getArtistSignupForm = (req, res) => {
  res.render('signup/artists', {
    title: "EJS example",
    header: "Some users"
  });
};



module.exports = signupController;