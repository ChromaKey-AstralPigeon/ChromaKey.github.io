//index.js

$(document).ready(function() {

"use strict";

var WhoButton = document.getElementById("WhoButton");
if(WhoButton)
{
	if (WhoButton.addEventListener)
		WhoButton.addEventListener("click", SetContentToWhoHTML, false);
	else if (WhoButton.attachEvent)
		WhoButton.attachEvent('onclick', SetContentToWhoHTML);
}

function SetContentToWhoHTML(){
	$("#CurrentContent").load("who.html");
}

var WhatButton = document.getElementById("WhatButton");
if(WhatButton){
	if (WhatButton.addEventListener)
		WhatButton.addEventListener("click", SetContentToWhatHTML, false);
	else if (WhatButton.attachEvent)
		WhatButton.attachEvent('onclick', SetContentToWhatHTML);
}

function SetContentToWhatHTML(){
	$("#CurrentContent").load("what.html");
}

var WhereButton = document.getElementById("WhereButton");
if(WhereButton){
	if (WhereButton.addEventListener)
		WhereButton.addEventListener("click", SetContentToWhereHTML, false);
	else if (WhereButton.attachEvent)
		WhereButton.attachEvent('onclick', SetContentToWhereHTML);
}

function SetContentToWhereHTML(){
	$("#CurrentContent").load("where.html");
}



});