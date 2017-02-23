var data = require('../data.json');
var name;
var notesList;
var newNotesName;

exports.viewClass = function(req, res){
  name = req.params.name;
  for (var i=0; i<data.classes.length; i++) {
    if (data.classes[i].className == name) {
      notesList = data.classes[i].notes;
      break;
    }
  }
  res.render('classPage', {
    'className': name,
    'notesList': notesList
  });
};

exports.addNewNotes = function(req, res) {
  var bool;
  var save;
  newNotesName = req.params.name;
  var newNote = { notesName: newNotesName }
  for (var i=0; i<data.classes.length; i++) {
    if (name == data.classes[i].className) {
      data.classes[i].notes.unshift(newNote);
      notesList = data.classes[i].notes;
      break;
    }
  }

  res.json(data);
  /*
  res.render('classPage', {
   'className': name,
   'notesList': notesList
  });
  */
};
