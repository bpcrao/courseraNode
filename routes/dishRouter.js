var Verify = require('./verify');
var express = require('express');
var dishRouter = express.Router();

dishRouter.route('/')

.get(Verify.verifyOrdinaryUser, function(req, res, next) {
  res.end('Will send details of the dish: ' + req.params.dishId +
    ' to you!');
})

.post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body
    .description);
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  res.end('Deleting all dishes');
});

module.exports = dishRouter;
