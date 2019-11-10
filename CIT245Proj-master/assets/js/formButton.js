"use strict";
//Js for Button to Hide and reveal Contact Us form
// Vincent Daugherty and Bryce Gaylord


//Function for button
function toggleButton() {
	//Declare Variable
	var form = document.getElementById("footerContactForm");
	
	//Reveal Form
	if (form.style.display === "none") {
	form.style.display = "block";
	} 
	
	else {
    form.style.display = "none";
  }
  
}