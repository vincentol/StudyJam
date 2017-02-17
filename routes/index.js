// Initialize Firebase
var data = require('../data.json');
var firebase = require("firebase");

var dbRef = firebase.database().ref();

exports.view = function(req, res){
	res.render('index', data);
  /*
	dbRef.on('value', function(snap) {
    	res.render('index',snap.val());
 	});
  */
};
