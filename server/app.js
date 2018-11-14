var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var directiveRouter = require('./routes/directives');
var pressRouter = require('./routes/press');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

//passport
var passport = require('passport');
var session = require('express-session');
app.use(session({
  name: 'name.sid',
  resave: false,
  saveUninitialized: false,
  secret: 'vizal',
  cookie: {
    maxAge: 36000000,
    httpOnly: false,
    secure: false
  }
}));

var LocalStrategy = require('passport-local').Strategy;

var User = require('./models/user');

passport.use('local', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
},
  function(username, password, done) {
    User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.isValid(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user._id);
  });
  
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

app.use(passport.initialize());
app.use(passport.session());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors({origin: ['http://localhost:4200', 'http://127.0.0.1:4200'], credentials: true}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/directive', directiveRouter);
app.use('/press', pressRouter);

//connect to database
mongoose.connect('mongodb://vind:vindspotify1@ds143242.mlab.com:43242/presidium_v01');



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
