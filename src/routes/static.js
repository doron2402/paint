let express = require('express');
let staticRoutes = express.Router();

staticRoutes.use('/public', express.static(__BASE + '/src/public'));
staticRoutes.use('/js', express.static(__BASE + '/src/public/js'));
staticRoutes.use('/css', express.static(__BASE + '/src/public/css'));
staticRoutes.use('/images', express.static(__BASE + '/src/public/img'));
staticRoutes.use('/img', express.static(__BASE + '/src/public/img'));
staticRoutes.use('/fonts', express.static(__BASE + '/src/public/fonts'));
staticRoutes.use('/font-awesome', express.static(__BASE + '/src/public/font-awesome'));

module.exports = staticRoutes;
