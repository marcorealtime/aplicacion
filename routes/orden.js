var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('orden', { title: 'orden' });
});


router.get('/:carrera', function(req, res, next) {
  res.render('ordend', { carrera: req.params.carrera });
});



module.exports = router;
