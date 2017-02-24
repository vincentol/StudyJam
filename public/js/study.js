'use strict';

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
  var information = $(this).val();
  timeoutId = setTimeout(function () {
    $.get("/saveNotes/" + information, save);
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
  $.get("/addClass/"+name, reloadFun);
  //alert("YAY!");
}

function reloadFun (result) {
  window.location.reload();
}

function addNote() {
  var x = document.getElementById("addNoteForm");
  var name =(x.elements[0].value);
  $.get("/addNotes/"+name, reloadFun);
  //alert("YAY!");
}
/** End Adding Functions **/

function goBack() {
  location.replace(document.referrer);
}

function addVocab() {
  var x = document.getElementById("vocabForm");
  var term = (x.elements[0].value);
  var def = (x.elements[1].value);
  x.reset();
  $.get("/addVocab/"+term+"/"+def, hideModal);
}

function hideModal() {
  $('.modal').modal('hide');
}

function addQuizQ() {
  console.log("Called");
  var x = document.getElementById("quizForm");
  var question = (x.elements[0].value);
  console.log(question);
  var answer = (x.elements[1].value);
  $.get("/addQuizQ/"+question+"/"+answer, hideModal);
  x.reset();
}

function myFunction() {
  alert("Oops! This is not yet implemented!");
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

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
		modal.style.display = "block";
}
span.onclick = function() {
		modal.style.display = "none";
}
window.onclick = function(event) {
		if (event.target == modal) {
				modal.style.display = "none";
		}
}
