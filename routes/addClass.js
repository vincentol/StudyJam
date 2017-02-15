var data = require("../data.json");

exports.addNewClass = function(req, res) {
  var newClassName = req.query.newClassName;
  var check = true;
  var newClass = { className: newClassName,
    classScore: "0",
    notes: [],
    leaderboard: []}
  for (var i = 0; i < data.classes.length; i++) {
    if (data.classes[i].className == newClassName) {
      check = false;
      break;
    }
  }
  if (check) data.classes.unshift(newClass);
  res.render('index', data);
}
