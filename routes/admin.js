var express = require('express');
var router = express.Router();
var mongo = require('../data/mongo');

/* GET home page. */
router.get('/',function(req,res,next){
  mongo.applications.find().sort({_id:-1}).limit(5).toArray(function(err,arr){
    console.log(arr);
    res.render('admin',{title: 'Admin', first5: arr});
  });

});

router.get('/search', function(req, res, next) {
  console.log(req.query);
  mongo.applications.find(req.query).toArray(function(err,arr){
    res.send(arr);
  });
});

module.exports = router;