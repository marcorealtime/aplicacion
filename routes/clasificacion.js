var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('clasificacion', { title: 'clasificacion' });
});


router.get('/:carrera', function(req, res, next) {
  res.render('clasificaciond', { carrera: req.params.carrera });
});



module.exports = router;
