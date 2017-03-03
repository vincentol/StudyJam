// Initialize Firebase
var data = require('../data.json');
var unames = [];
var pwords = [];

exports.register = function(req, res){
  var account = req.body;
  // implement existing check here TODO
  data.users.push(account);
  unames.push(account.uname);
  pwords.push(account.pword);
  res.json(data);
};

exports.login = function(req, res) {
  var unameCheck = req.body.uname;
  var pwordCheck = req.body.pword;
  var i;
  for (i=0; i<unames.length; i++) {
    if (unames[i] == unameCheck) {
      // here if userName matches
      data.loginChecks[0] = true;
      if (pwords[i] == pwordCheck) {
        // allow users to logg in
        data.loginChecks[1] = true;
        data.currFN = data.users[i].fn;
        data.currLN = data.users[i].ln;
      }
    }
  }

  res.json(data);

}
