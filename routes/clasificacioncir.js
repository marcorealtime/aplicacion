var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('clasificacioncir', { title: 'clasificacioncir' });
});

router.get('/:carrera', function(req, res, next) {
  res.render('clasificacioncird', { carrera: req.params.carrera });
});


module.exports = router;