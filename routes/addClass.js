var data = require("../data.json");
var firebase = require("firebase");
var dbRef = firebase.database().ref();
var classRef = dbRef.child("classes");


exports.addNewClass = function(req, res) {
  var newClassName = req.body.name;
  var check = true;
  var newClass = { className: newClassName,
    classScore: "0",
    notes: [],
    leaderboard: [],
    vocab: [],
    quizQ: []
  }



  /*
  classRef.push(newClass);

  dbRef.on('value', function(snap) {
    res.render('index',snap.val());
  }); */


  for (var i = 0; i < data.classes.length; i++) {
    if (data.classes[i].className == newClassName) {
      check = false;
      break;
    }
  }
  if (check) {
    data.classes.unshift(newClass);
    data.classExists = "false";
  } else {
    data.classExists = "true";
  }
  res.json(data);
}
