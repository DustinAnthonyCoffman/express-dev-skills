let FakeData = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
      skill: FakeData.getAll()
    });
  }

function show(req,res) {
    res.render('skills/show', {
      skill: FakeData.getOne(req.params.id),
      skillNum: parseInt(req.params.id) + 1
    })
}

  module.exports = {
      index,
      show
  };