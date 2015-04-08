var artistsRoute = {};

artistsRoute.get('/artists/signup/basic', csrfProtection, (req, res) => {
  res.render('artists/signup-basic', {
    title: "EJS example",
    header: "Some businesses",
    csrfToken: req.csrfToken()
  });
});

artistsRoute.get('/artists/signup/studio', csrfProtection, (req, res) => {
  res.render('artists/signup-basic', {
    title: "EJS example",
    header: "Some businesses",
    csrfToken: req.csrfToken()
  });
});

artistsRoute.get('/artists/signup/complete', csrfProtection, (req, res) => {
  res.render('artists/signup-basic', {
    title: "EJS example",
    header: "Some businesses",
    csrfToken: req.csrfToken()
  });
});


module.exports = artistsRoute;