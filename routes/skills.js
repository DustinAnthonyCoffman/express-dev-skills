var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET /skills */
router.get('/', skillsCtrl.index);  //every slash is after /skills  like /skills/
                                        //we dont get to ctrl.index until later when we redirect!!

                                        /* GET /skills#/5 for example */
router.get('/:id', skillsCtrl.show);   //this fires first by just clicking on a student (navigating to skills/id)
router.post('/', skillsCtrl.addSkill);  //get requests are done through links and some other stuff


module.exports = router;
