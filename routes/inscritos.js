var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('inscritos', { title: 'inscritos' });
});


router.get('/:carrera', function(req, res, next) {
  res.render('inscritosd', { carrera: req.params.carrera });
});



module.exports = router;