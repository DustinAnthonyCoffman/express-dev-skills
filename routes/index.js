var express = require('express');
var router = express.Router();
/* we have no controller imported because we are doing this inline! no index controller */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HomePage' });
});

module.exports = router;
