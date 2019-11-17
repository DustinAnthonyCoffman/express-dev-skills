let FakeData = require('../models/skill');


  function index(req, res) {   
    res.render('skills', { //ties to views/skills/index 
      skill: FakeData.getAll(),      //navigates to views, skill will now be an object
    });                             //within index
  } 

function show(req,res) {
    res.render('skills', { //params is an array property of the object from the route we built
      skill: FakeData.getOne(req.params.id), //id is coming from :id
      student: parseInt(req.params.id) + 1
    })
}

  module.exports = {
      index,
      show
  };