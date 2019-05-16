var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Nintendo Gamecube', 
    message: "this information page for one of Nintendo's best consoles.", 
    overview: "The Nintendo GameCube is a home video game console released by Nintendo in Japan and North America in 2001 and Europe and Australia in 2002. The sixth-generation console is the successor to the Nintendo 64, designed to compete with Sony's PlayStation 2 and Microsoft's Xbox.", 
    library: "In its lifespan of 2001—2007, more than 600 games were released for the GameCube. Nintendo is traditionally recognized for releasing innovative, first-party games, most notably from the Super Mario and The Legend of Zelda series. These first-party series continued on the GameCube and bolstered the console's popularity. As a publisher, Nintendo also focused on creating new franchises, such as Pikmin and Animal Crossing, and renewing some that skipped the Nintendo 64 platform, most notably the Metroid series with the release of Metroid Prime.", 
    legacy: "The console also saw success with the critically acclaimed The Legend of Zelda: The Wind Waker and Super Mario Sunshine, and its best-selling game, Super Smash Bros. Melee, which sold 7 million copies worldwide. Many games that debuted on the GameCube, including Pikmin, Chibi-Robo!, Metroid Prime, and Luigi's Mansion became popular Nintendo franchises or subseries." });
});

module.exports = router;
