/*
	Obviously the jquery validate plugin has been utilised for this section.
	Please note that I have installed the additional-modules extension for the plugin as it allows me to do regex pattern matching
	inside the individual html input elements. This kept things more simple and saved me a whole load of time as I didnt have to craft
	custom rules or custom functions to achieve this.
	Also please note that I have used CDNs to load the 2 external scripts and thus when marking this peice of work it must be done on a pc
	that can access the internet.
*/

function init(){
	formValidate();
}

function formValidate(){
	$("#validate").validate();
}

init();