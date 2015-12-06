var express = require('express');
var router = express.Router();
var mongo = require('../data/mongo');

/* GET home page. */
router.get('/',function(req,res,next){
  res.render('admin',{title: 'Admin'});
})

router.post('/search', function(req, res, next) {
  var field = req.body.field;
  var value = req.body.value;
  console.log(req.body);
  var result = mongo.applications.find();
  res.send(result);
});

module.exports = router;