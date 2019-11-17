var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET /skills */
router.get('/', skillsCtrl.index);

/* GET /skills#/5 for example */
router.get('/:id', skillsCtrl.show);   //this is interesting look HERE




module.exports = router;
