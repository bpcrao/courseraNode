var express = require('express');
var router = express.Router();
var Verify = require('./verify');

router.route('/')

.get(Verify.verifyOrdinaryUser, function(req, res, next) {
  res.end('Will send all the leadership to you!');
})

.post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  res.end('Will add the leadership: ' + req.body.name + ' with details: ' +
    req.body.description);
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  res.end('Deleting all leadership');
});

router.route('/:leadershipId')

.get(Verify.verifyOrdinaryUser, function(req, res, next) {
  res.end('Will send details of the leadership: ' + req.params.leadershipId +
    ' to you!');
})

.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  res.write('Updating the leadership: ' + req.params.leadershipId + '\n');
  res.end('Will update the leadership: ' + req.body.name +
    ' with details: ' + req.body.description);
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  res.end('Deleting leadership: ' + req.params.leadershipId);
});

module.exports = router;
