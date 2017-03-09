function validateForm(){

		//use a regular expression to validate if alpha characters
	    var alphaRegex = new RegExp('^[a-zA-Z]*$');

		// validate the first name
		var x = document.forms["validate-form"]["first-name"].value;

	    if (x == "") {
	        var msg = "First Name is a required field and must be filled out";
	        generateResults(msg, 'res1');
	        return false;
	    } else if(!alphaRegex.test(x)){
		    var msg = "Only alpha characters allowed for first name";
	        generateResults(msg, 'res1');
	        return false;
		} else {
			stripErrors();
		}



		// validate the last name
		var x = document.forms["validate-form"]["last-name"].value;

	    if (x == "") {
	        var msg = "Last Name is a required field and must be filled out";
	        generateResults(msg, 'res2');
	        return false;
	    }else if(!alphaRegex.test(x)){
		    var msg = "Only alpha characters allowed for last name";
	        generateResults(msg, 'res2');
	        return false;
		} else {
			stripErrors();
		}


		//regex that will only allow for health authority numbers matching: ZHA346783 (ZHA prepended to a 6 digit number)
		var healthNumberRegex = new RegExp('^(ZHA)[0-9]{6}$');

		// validate the health authority number
		var x = document.forms["validate-form"]["han"].value;

		if (x == "") {
	        var msg = "Health Authority Number is a required field and must be filled out";
	        generateResults(msg, 'res3');
	        return false;
	    }else if(!healthNumberRegex.test(x)){
		    var msg = "Must match this format: ZHA346783";
	        generateResults(msg, 'res3');
	        return false;
		} else {
			stripErrors();
		}


		//validate the email address format
		//note I have not used the HTML attribute type of 'email' but opted to use just native javascript
		//please note that this regex has been taken from http://emailregex.com/ and is extremely well tested with a huge range of email address formats

		var emailRegex = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$');

		var x = document.forms["validate-form"]["email"].value;

		if (x == "") {
	        var msg = "Email address is a required field and must be filled out";
	        generateResults(msg, 'res4');
	        return false;
	    } else if(!emailRegex.test(x)){
		    var msg = "A valid email format must be submitted.";
	        generateResults(msg, 'res4');
	        return false;
		} else{
			stripErrors();
		}


		//validate the telephone number
		var numericalRegex = new RegExp('^[0-9]{11}$');

		var x = document.forms["validate-form"]["telephone"].value;
		if (x == "") {
	        var msg = "Telephone Number is a required field and must be filled out";
	        generateResults(msg, 'res5');
	        return false;
	    } else if(!numericalRegex.test(x)){
		    var msg = "Only 11 digit numbers can be submitted";
	        generateResults(msg, 'res5');
	        return false;
		} else {
			stripErrors();
		}


	    return false;
	   
	}

	function stripErrors(){
		var paras = document.getElementsByClassName('results');

		//if there are old results on the page then remove them
		while(paras[0]){
		    paras[0].parentNode.removeChild(paras[0]);
		}
	}

	function generateResults(resultMessage, container){

		stripErrors();		

		//create the results element and give it class name of 'results'
		var m = document.createElement("p");
		m.className = "results";
		var t = document.createTextNode(resultMessage);

		m.appendChild(t);

		//print the new results by the text container with ther validation error
		document.getElementById(container).appendChild(m); 
	}

	/*
	*	Focus on the firstname field when user loads the page.
	*/
	function focusField(){
		window.onload = function() {
		  document.getElementById("first-name").focus();
		};
	}

	function init(){
		focusField();
	}

	init();