var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'iframe Sandbox' });
});

router.get('/transparency/embed', function(req, res, next) {
  res.render('transparency/embed', { title: 'Transparency Embed Page' });
});

router.get('/transparency/modal', function(req, res, next) {
  res.render('transparency/modal', { title: 'Transparency Modal Page' });
});


router.get('/stripe/:view', function(req, res, next) {
  res.render('stripe/' + req.params.view, { title: req.params.view + ' | Stripe' });
});


router.get('/spike/:view', function(req, res, next) {
  res.render('spike/' + req.params.view, { title: req.params.view + ' | SPIKE' });
});


module.exports = router;

