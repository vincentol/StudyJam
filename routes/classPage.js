var data = require('../data.json');
var name;
var notesList;
var vocabList;
var quizList;
var newNotesName;
var currClass;
var classUrl;
var noteName;
var myData;
var leaderboard;
var bool = true;
var currI;

exports.viewClass = function(req, res){
  name = req.params.name;
  console.log(data.currFN);
  for (var i=0; i<data.classes.length; i++) {
    if (data.classes[i].className == name) {
      currI = i;
      currClass = data.classes[i];
      notesList = data.classes[i].notes;
      quizList = data.classes[i].quizQ;
      vocabList = data.classes[i].vocab;
      leaderboard = data.classes[i].leaderboard;
      score = data.classes[i].classScore;
      break;
    }
  }
  // Wizard of Oz - quiz shows up only once
  if (name == "Cogs 120" && bool == true) {
    data.bool = true;
    bool = false;
  }
  else {
    data.bool = false;
  }

  res.render('classPage', {
    'currFN' : data.currFN,
    'currLN' : data.currLN,
    'score' : score,
    'className': name,
    'notesList': notesList,
    'quizList': quizList,
    'vocabList': vocabList,
    'classUrl': classUrl,
    'leaderboard': leaderboard,
    'bool': data.bool
  });
};

exports.score = function(req, res) {
  score++;
  data.classes[currI].classScore = score;
  res.json(data);
}

exports.viewNote = function(req, res) {
  noteName = req.params.name;
  for (var i=0; i<data.classes.length; i++) {
    if (name == data.classes[i].className) {
      var myNotes = data.classes[i].notes;
      break;
    }
  }
  for (var x=0; x<myNotes.length; x++) {
    if (noteName == data.classes[i].notes[x].notesName) {
      myData = (data.classes[i].notes[x].noteData);
      break;
    }
  }
  res.render('notePage', {
    'noteName' : noteName,
    'myData': myData
  });
};

exports.saveNote = function(req, res) {
  var info = req.body.information;
  var myNotes;
  for (var i=0; i<data.classes.length; i++) {
    if (name == data.classes[i].className) {
      var myNotes = data.classes[i].notes;
      break;
    }
  }
  for (var x=0; x<myNotes.length; x++) {
    if (noteName == data.classes[i].notes[x].notesName) {
      data.classes[i].notes[x].noteData = info;
      console.log(data.classes[i].notes[x].noteData);
      break;
    }
  }
  res.json(data);
};

exports.addVocab = function(req, res) {
  var term = req.body.term;
  var def = req.body.def;
  var newVocab = { "term": term,
                  "def": def }
  bool = true;

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
  var question = req.body.question;
  var answer = req.body.answer;
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
  newNotesName = req.body.name;
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

exports.addCM = function(req, res) {
  newCM = req.body;
  for (var i=0; i<data.classes.length; i++) {
    if (name == data.classes[i].className) {
      data.classes[i].leaderboard.push(newCM);
      break;
    }
  }
  res.json(data);
};
