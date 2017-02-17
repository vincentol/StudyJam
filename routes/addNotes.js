var data = require("../data.json");
var firebase = require("firebase");
var dbRef = firebase.database().ref();
var classRef = dbRef.child("classes");

exports.addNewNotes = function(req, res) {
  console.log("HERE");
  console.log(req.params.name);
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
