var express = require('express');
var router = express.Router();
var Verify = require('./verify');

router.route('/')

.get(Verify.verifyOrdinaryUser, function(req, res, next) {
  res.end('Will send all the promotions to you!');
})

.post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  res.end('Will add the promotion: ' + req.body.name + ' with details: ' +
    req.body.description);
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  res.end('Deleting all promotions');
});

router.route('/:promotionId')

.get(Verify.verifyOrdinaryUser, function(req, res, next) {
  res.end('Will send details of the promotion: ' + req.params.promotionId +
    ' to you!');
})

.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  res.write('Updating the promotion: ' + req.params.promotionId + '\n');
  res.end('Will update the promotion: ' + req.body.name +
    ' with details: ' + req.body.description);
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
  res.end('Deleting promotion: ' + req.params.promotionId);
});

module.exports = router;
