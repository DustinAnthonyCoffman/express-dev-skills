let FakeData = require('../models/skill');

function addSkills(req,res) {
    res.render('newSkills', {        //ties to views/newSkills
        pasta: FakeData.getAll()      
      });                             //within index
    }             

    module.exports = {
        addSkills
    };