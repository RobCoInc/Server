var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require("body-parser");

var cors = require('cors');

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var index = require('./routes/index');
var login = require('./routes/login');
var users = require('./routes/users');
var companys = require('./routes/companys');
var arrests = require('./routes/arrests');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api/login', login);
app.use('/api/users', users);
app.use('/api/companys', companys);
app.use('/api/arrests', arrests);

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

var listener = app.listen(80, function(){
    console.log(logTime() + 'Port: ' + listener.address().port); //Listening on port 8888
});

// global log timestamp function
global.logTime = function(){
  var currentdate = new Date();
  var datetime = "[" + currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/"
                  + currentdate.getFullYear() + " @ "
                  + currentdate.getHours() + ":"
                  + currentdate.getMinutes() + ":"
                  + currentdate.getSeconds() + "] ";
  return datetime;
};

console.log(logTime() + 'started.'); //Listening on port 8888


module.exports = app;
