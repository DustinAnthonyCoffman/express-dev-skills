let FakeData = require('../models/skill');

function addSkills(req,res) {
    res.render('newSkills', {        //ties to views/newSkills
        skill: FakeData.getAll(),
        index: req.params.id     //we'll be appending using our index again
      });                             //within index
    }             

    module.exports = {
        addSkills
    };

