var express = require('express');
var router = express.Router();
var mongo = require('../data/mongo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/applicant', function(req, res, next){
  console.log(req.body);
  mongo.applications.insert(req.body);
  res.send('Application received');
});

module.exports = router;
