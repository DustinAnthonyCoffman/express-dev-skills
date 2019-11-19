var express = require('express');
var router = express.Router();
var deleteSkillsCtrl = require('../controllers/deleteSkills');

router.delete('/:id', deleteSkillsCtrl.deleteSkill);  //get requests are done through links and some other stuff
router.get('/:id', deleteSkillsCtrl.show); 



module.exports = router;