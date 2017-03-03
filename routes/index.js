// Initialize Firebase
var data = require('../data.json');
var firebase = require("firebase");

var dbRef = firebase.database().ref();

exports.view = function(req, res){
  data["version2"] = false;

	res.render('index', data);
  /*
	dbRef.on('value', function(snap) {
    	res.render('index',snap.val());
 	});
  */
};

exports.viewv2 = function(req, res) {
  data["version2"] = true;
  res.render('index', data);
}
