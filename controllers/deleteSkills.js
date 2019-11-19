let FakeData = require('../models/skill');


function show(req,res) {    //res.render is actually make skills views/skills
    res.render('deleteSkills', { // create an object with access to current url and database
      studentSkills: FakeData.getOne(req.params.id), //this will be an array item based on the index
      fakeData: FakeData.getAll(),
      idx: req.params.id, //this will be our unique <a> + index, resulting in request.params.id be a single number 
      student: parseInt(req.params.id) + 1    //we need to use a real number for student
    });  
} 
function deleteSkill(req,res) {
    FakeData.deleteThis(req.params.id);
    res.redirect(`/deleteSkills/${req.params.id}`);
  }


    module.exports = {
        show,
        deleteSkill
    };

