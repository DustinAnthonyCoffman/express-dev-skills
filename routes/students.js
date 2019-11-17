var express = require('express');
var router = express.Router();
var studentsCtrl = require('../controllers/students');

/* GET /students */
router.get('/', studentsCtrl.showStudents);


module.exports = router;
