var data = require("../data.json");
var firebase = require("firebase");
var dbRef = firebase.database().ref();
var classRef = dbRef.child("classes");


exports.addNewClass = function(req, res) {
  var newClassName = req.params.name;
  var check = true;
  var newClass = { className: newClassName,
    classScore: "0",
    notes: [],
    leaderboard: []
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
  if (check) data.classes.unshift(newClass);
  console.log(data);
  res.json(data);
}
