let searchController = {};

searchController.getUserSignupForm = (req, res) => {
	console.log('sdf');
  res.render('search/search', {
    title: "Find your Artist",
    header: "Find your Artist",
    artists: [
      {id: 1, name: '111'},
      {id: 2, name: '2222'}
    ],
    csrfToken: req.csrfToken()
  });
};



module.exports = searchController;