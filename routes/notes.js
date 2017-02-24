var data = require('../data.json');

exports.view = function(req, res) {
  res.render('notePage');
};

exports.save = function(req, res) {
  console.log("CALLED");
}
