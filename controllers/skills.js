let FakeData = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
      skill: FakeData.getAll()
    });
  }

function show(req,res) {
  console.log(req.params.id, 'this is the skills im trying to click');
    res.render('skills/show', {
      skill: FakeData.getOne(req.params.id),
      student: parseInt(req.params.id) + 1
    })
}

  module.exports = {
      index,
      show
  };