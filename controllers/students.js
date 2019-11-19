let FakeData = require('../models/skill');


  function showStudents(req, res) {
    res.render('students', {        //res.render adds student to views/ 
        skills: FakeData.getAll()      //navigates to views, skill will now be an object
      });                             //within index
    }                              //pasta contains the return data of fakeData because its receiving what getAll sends us
     //however this doesn't call anything within our page, 
     //we have to explicitely set this within our students.ejs file
    //the controller can take functionality written in models and store it in variables or objects (like pasta), and then we can use basic looping js in our actual html/ejs view stuff
  

    module.exports = {
      showStudents
  };


