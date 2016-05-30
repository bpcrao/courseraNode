var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Verify = require('./verify');

router.post('/register', function(req, res) {
  User.register(new User({
      username: req.body.username,
      admin: req.body.admin
    }),
    req.body.password,
    function(err, user) {
      if (err) {
        return res.status(500).json({
          err: err
        });
      }
      passport.authenticate('local')(req, res, function() {
        return res.status(200).json({
          status: 'Registration Successful!'
        });
      });
    });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }

      var token = Verify.getToken(user);
      res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      });
    });
  })(req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});

router.route('/')

.get(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res) {
  User.find({}, function(err, users) {
    console.log(users);
    res.end('Users: ' + users + '\n');
  });
});
module.exports = router;
