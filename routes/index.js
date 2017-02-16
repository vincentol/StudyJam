// Initialize Firebase
var data = require('../data.json');
var firebase = require("firebase");
var config = {
	apiKey: "AIzaSyChJr4sJsuol5Z_8-qIiqluW3VgVEKgOIw",
	authDomain: "studyjamapp.firebaseapp.com",
	databaseURL: "https://studyjamapp.firebaseio.com",
	storageBucket: "studyjamapp.appspot.com",
	messagingSenderId: "682675386486"
};
firebase.initializeApp(config);

var dbRef = firebase.database().ref();

exports.view = function(req, res){
  dbRef.on('value', function(snap) {
    console.log(snap.val());
  });
	res.render('index', data);
};
