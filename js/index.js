//index.js

$(document).ready(function() {

"use strict";

$("#CurrentContent").load("buttons.html");


var ReturnButton = document.getElementById("ReturnButton");
if(ReturnButton){
	if (ReturnButton.addEventListener)
		ReturnButton.addEventListener("click", SetContentToButtonsHTML, false);
	else if (ReturnButton.attachEvent)
		ReturnButton.attachEvent('onclick', SetContentToButtonsHTML);
}

function SetContentToButtonsHTML(){
	$("#CurrentContent").load("buttons.html");
}

});