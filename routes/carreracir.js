var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('carreracir', { title: 'carreracir' });
});

router.get('/:carrera', function(req, res, next) {
  res.render('carreracird', { carrera: req.params.carrera });
});


module.exports = router;