var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'iframe Sandbox' });
});

router.get('/iframe/embed', function(req, res, next) {
  res.render('iframe/embed', { title: 'iframe Embed Page' });
});

router.get('/iframe/modal', function(req, res, next) {
  res.render('iframe/modal', { title: 'iframe Modal Page' });
});

router.get('/stripe/checkout', function(req, res, next) {
  res.render('stripe/checkout', { title: 'Stripe Checkout Simple' });
});

router.get('/stripe/checkout_custom', function(req, res, next) {
  res.render('stripe/checkout_custom', { title: 'Stripe Checkout Custom' });
});

router.get('/spike/embed', function(req, res, next) {
  res.render('spike/embed', { title: 'SPIKE Embed' });
});

router.get('/spike/checkout', function(req, res, next) {
  res.render('spike/checkout', { title: 'SPIKE Checkout' });
});


module.exports = router;

