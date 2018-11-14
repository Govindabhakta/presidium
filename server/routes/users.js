var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport');
require('../configs/passport.config');

router.post('/register', (req, res, next) => {
  addUser(req, res);
})

async function addUser(req, res) {
  var user = new User({
    username: req.body.username,
    password: User.hashPassword(req.body.password),
    creation_dt: Date.now()
  })

  try {
    doc = await user.save();
    return res.status(201).json(doc);
  } 
  catch(err) {
    return res.status(501).json(err);
  }

}

router.post('/login', (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    if (err) { 
      return res.status(501).json(err); 
    }
    
    if (!user) { 
      res.status(501).json(info); 
    }
    
    req.logIn(user, function(err) {
      if (err) { 
        return res.status(501).json(err); 
      }
      return res.status(200).json({message: "Welcome"});
    });
  
  })
  (req, res, next);
})

router.get('/user', isValidated,(req, res, next) => {
  return res.status(200).json(req.user);
})

router.get('/logout', isValidated, (req, res, next) => {
  req.logout();
  return res.status(200).json({message: 'Goodbye and good ridance.'})
})

function isValidated(req, res, next) {
  if (req.isAuthenticated()) 
  {
    next()
  } else {
    return res.status(401).json({message: "Not so authenticated now eh?"});
  }
}

module.exports = router;
