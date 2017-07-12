var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'iframe Sandbox' });
});

router.get('/stripe/checkout', function(req, res, next) {
  res.render('stripe/checkout', { title: 'Stripe Checkout' });
});

router.get('/spike/embed', function(req, res, next) {
  res.render('spike/embed', { title: 'SPIKE Embed' });
});

router.get('/spike/checkout', function(req, res, next) {
  res.render('spike/checkout', { title: 'SPIKE Checkout' });
});


module.exports = router;

