var data = require('../data.json');
var name;
var notesList;
var vocabList;
var quizList;
var newNotesName;
var currClass;
var classUrl;
var noteName;

exports.viewClass = function(req, res){
  name = req.params.name;
  for (var i=0; i<data.classes.length; i++) {
    if (data.classes[i].className == name) {
      currClass = data.classes[i];
      notesList = data.classes[i].notes;
      quizList = data.classes[i].quizQ;
      vocabList = data.classes[i].vocab;
      break;
    }
  }
  console.log(classUrl);
  res.render('classPage', {
    'className': name,
    'notesList': notesList,
    'quizList': quizList,
    'vocabList': vocabList,
    'classUrl': classUrl
  });
};

exports.viewNote = function(req, res) {
  noteName = req.params.name;
  res.render('notePage');
};

exports.saveNote = function(req, res) {
  console.log(req.params.notes);
  var myNotes;
  for (var i=0; i<data.classes.length; i++) {
    if (name == data.classes[i].className) {
      var myNotes = data.classes[i].notes;
      break;
    }
  }
  for (var x=0; x<myNotes.length; x++) {
    if (noteName == data.classes[i].notes[x].notesName) {
      //data.classes[i].notes[x].noteData = 
    }
  }
  console.log("CALLED");
  // TODO
};

exports.addVocab = function(req, res) {
  var term = req.params.term;
  var def = req.params.def;
  var newVocab = { "term": term,
                  "def": def }

  for (var i=0; i<data.classes.length; i++) {
    if (data.classes[i].className == name) {
      data.classes[i].vocab.push(newVocab);
      vocabList = data.classes[i].vocab;
      break;
    }
  }
  res.json(data);
};

exports.addQuizQ = function(req, res) {
  var question = req.params.question;
  var answer = req.params.answer;
  var newQuizQ = { "question": question,
    "answer": answer }

  for (var i=0; i<data.classes.length; i++) {
    if (data.classes[i].className == name) {
      data.classes[i].quizQ.push(newQuizQ);
      quizList = data.classes[i].quizQ;
      break;
    }
  }
  res.json(data);
};

exports.addNewNotes = function(req, res) {
  var bool;
  var save;
  newNotesName = req.params.name;
  var newNote = { "notesName": newNotesName,
                  "noteData": ""}
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
