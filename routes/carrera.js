var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('carrera', { title: 'carrera' });
});


router.get('/:carrera', function(req, res, next) {
  res.render('carrerad', { carrera: req.params.carrera });
});



module.exports = router;