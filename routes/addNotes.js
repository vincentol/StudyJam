var data = require("../data.json");

exports.addNewNotes = function(req, res) {
  var newNotesName = req.query.newNotesName;
  var newNote = { notesName: newNotesName }
  for (var i=0; i<data.classes.length; i++) {
    if (data.classes[i].className === name) {
      data.classes[i].notes.unshift(newNote);
      break;
    }
  }
  res.render('classPage', data);
}
