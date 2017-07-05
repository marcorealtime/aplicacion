var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var piloto = require('./routes/piloto');
var ranking = require('./routes/ranking');
var calendario = require('./routes/calendario');
var clasificacion = require('./routes/clasificacion');
var carrera = require('./routes/carrera');
var inscritos = require('./routes/inscritos');
var orden = require('./routes/orden');
var clasificacioncir = require('./routes/clasificacioncir');
var carreracir = require('./routes/carreracir');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/piloto', piloto);
app.use('/ranking', ranking);
app.use('/calendario', calendario);
app.use('/clasificacion', clasificacion);
app.use('/carrera', carrera);
app.use('/inscritos', inscritos);
app.use('/orden', orden);
app.use('/clasificacioncir', clasificacioncir);
app.use('/carreracir',carreracir);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
