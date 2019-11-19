var express = require('express');
var router = express.Router();
var newSkillsCtrl = require('../controllers/newSkills');



router.get('/:id', newSkillsCtrl.addSkills);



module.exports = router;