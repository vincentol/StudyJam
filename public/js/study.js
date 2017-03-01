'use strict';

var currentUsername = null;
var currentUserIndex = (-1);

$(document).ready(function() {
  initializePage();
})

function initializePage() {
  $("#testjs").click(function(e) {
    window.alert("Oops! This is not yet implemented!");
  });
}

var timeoutId,
    $status = $('#status'),
    $notes = $('#notes');

$notes.keyup(function() {
  $status.attr('class', 'pending').text('changes pending');
  if (timeoutId) clearTimeout(timeoutId);
  var information = {"information": $(this).val()};
  timeoutId = setTimeout(function () {
    $.post("/saveNotes", information, save);
    $status.attr('class', 'saved').text('changes saved');
  }, 750);
});

function save() {
  console.log("In Save");
}

/** Adding Functions **/
function addClass() {
  var x = document.getElementById("addClassForm");
  var name =(x.elements[0].value);
  var className = {"name": name};
  $.post("/addClass", className, reloadClasses, 'JSON');
  //alert("YAY!");
  x.reset();
}

function reloadClasses (result) {
  console.log(result.classExists == "false");
  if (result.classExists == "true") {
    console.log("HERE");
    alert("Class already exists!\nTry a different name");
  }
  else {
    window.location.reload();
  }
}

function reloadFun (result) {
  window.location.reload();
}

function addNote() {
  var x = document.getElementById("addNoteForm");
  var name =(x.elements[0].value);
  var noteName = {"name": name};
  $.post("/addNotes", noteName, reloadFun);
}
/** End Adding Functions **/

function goBack() {
  location.replace(document.referrer);
}

function addVocab() {
  var x = document.getElementById("vocabForm");
  var term = (x.elements[0].value);
  var def = (x.elements[1].value);
  var vocab = { "term": term,
          "def": def};
  x.reset();
  //$.get("/addVocab/"+term+"/"+def, hideModal);
  $.post("/addVocab", vocab, hideModal);
}

function hideModal() {
  $('.modal').modal('hide');
}

function addQuizQ() {
  var x = document.getElementById("quizForm");
  var question = (x.elements[0].value);
  var answer = (x.elements[1].value);
  var quizQ = {"question": question,
        "answer": answer};
  x.reset();
  $.post("/addQuizQ", quizQ, hideModal);
}

function myFunction() {
  alert("Oops! This is not yet implemented!");
}

function login() {
  // move to loginControl
  window.location.replace("/home");
  // get login
}

function loginControl() {

}

function viewUser() {
		document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
		if (!event.target.matches('.dropbtn')) {
				var dropdowns = document.getElementsByClassName("dropdown-content");
				var i;
				for (i = 0; i < dropdowns.length; i++) {
						var openDropdown = dropdowns[i];
						if (openDropdown.classList.contains('show')) {
								openDropdown.classList.remove('show');
						}
				}
		}
}

function searchFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById('searchBar');
  filter = input.value.toUpperCase();
  ul = document.getElementById("searchUL");
  li = ul.getElementsByTagName('li');

  // loop through search results and hide anything that doesn't match
  for (i=0; i<li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

var modal = document.getElementById('myModal');
//var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
/*
btn.onclick = function() {
		modal.style.display = "block";
}*/
span.onclick = function() {
		modal.style.display = "none";
}
window.onclick = function(event) {
		if (event.target == modal) {
				modal.style.display = "none";
		}
}
