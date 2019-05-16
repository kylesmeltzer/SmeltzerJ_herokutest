var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nintendo Gamecube', 
  message: "this information page for one of Nintendo's best consoles.", overview: "The Nintendo GameCube is a home video game console released by Nintendo in Japan and North America in 2001 and Europe and Australia in 2002. The sixth-generation console is the successor to the Nintendo 64, designed to compete with Sony's PlayStation 2 and Microsoft's Xbox." });
});

module.exports = router;
