
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

//Firebase
var firebase = require("firebase");
var config = {
    apiKey: "AIzaSyChJr4sJsuol5Z_8-qIiqluW3VgVEKgOIw",
    authDomain: "studyjamapp.firebaseapp.com",
    databaseURL: "https://studyjamapp.firebaseio.com",
    storageBucket: "studyjamapp.appspot.com",
    messagingSenderId: "682675386486"
  };
firebase.initializeApp(config);
//End Firebase

var login = require('./routes/login');
var index = require('./routes/index');
var classPage = require('./routes/classPage');
var blank = require('./routes/blank');
var addClass = require('./routes/addClass');
var addNotes = require('./routes/addNotes');
var notePage = require('./routes/notes');
// Example route
// var user = require('./routes/user');

var app = express();


// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', login.view);
app.get('/home', index.view);
app.get('/blank', blank.viewBlank);
app.get('/addClass/:name', addClass.addNewClass);
app.get('/addNotes/:name', classPage.addNewNotes);
app.get('/addVocab/:term/:def', classPage.addVocab);
app.get('/addQuizQ/:question/:answer', classPage.addQuizQ);
app.get('/classPage/:name', classPage.viewClass);
app.get('/notePage/:name', classPage.viewNote);
app.get('/saveNotes/:notes', classPage.saveNote);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
