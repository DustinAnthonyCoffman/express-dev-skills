let FakeData = require('../models/skill');


  function index(req, res) {   
    res.render('skills', {        //ties to views/skills 
      skill: FakeData.getAll()      //navigates to views, skill will now be an object
    });                             //within index
  }           

function show(req,res) {
    res.render('skills', { //create an object with access to current url and database
      studentSkills: FakeData.getOne(req.params.id), //this will be an array item based on the index
      idx: req.params.id, //this will be our unique <a> + index, resulting in request.params.id be a single number 
      student: parseInt(req.params.id) + 1    //we need to use a real number for student
    });  
} 

function addSkill(req,res) {
  FakeData.create(req.body.brandNew, req.body.index);    //req.body is whatever comes from your form, whatever payload exists
  res.redirect(`skills/${req.body.index}`); 
}

  module.exports = {
      index,
      addSkill,
      show
  };