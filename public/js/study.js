'use strict';

$(document).ready(function() {
  initializePage();
})

function initializePage() {
  $("#testjs").click(function(e) {
    window.alert("Oops! This is not yet implemented!");
  });
}

function addClass() {
  var x = document.getElementById("addClassForm");
  var name =(x.elements[0].value);
  $.get("/addClass");
  //alert("YAY!");
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
