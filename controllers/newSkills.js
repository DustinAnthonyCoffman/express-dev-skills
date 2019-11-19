let FakeData = require('../models/skill');

function addSkills(req,res) {
    res.render('newSkills', {        //ties to views/newSkills
        skill: FakeData.getAll(),
        index: req.params.id     //when we get to views/newSkills we should have this database pasta available
      });                             //within index
    }             

    module.exports = {
        addSkills
    };

