var express = require('express');
var router = express.Router();
var newSkillsCtrl = require('../controllers/newSkills');


router.get('/', newSkillsCtrl.addSkills);


module.exports = router;