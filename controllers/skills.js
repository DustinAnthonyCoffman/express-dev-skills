let FakeData = require('../models/skill');

function index(req, res) {
    res.render('skills/index', {
      fakedata: FakeData.getAll()
    });
  }

function show(req,res) {
    res.render('skills/show', {
      skill: FakeData.getOne(req.params.id)
    })
}

  module.exports = {
      index,
      show
  };