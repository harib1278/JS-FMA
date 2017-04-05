/**
*	Function to initalise the main script, will invoke the calculation of the totals as well as the functionality to display the appropriate results message
*/

function init(){

	var total = generateTotals();

	generateResultsMessage(total);	

};

/**
*	Function is responsible for the generation of the markup of the results messages based on the calculated total
*	@param total: the total value of the summed checkbox values as an integer
*/

function generateResultsMessage(total){
	if(total >= 0 && total <= 15){

		var m = document.createElement("p");
		m.className = "results";
		var t = document.createTextNode("Low Risk: ");

		m.appendChild(t);
		var msg = document.createTextNode("Your results show that you currently have a low risk of developing diabetes. However, it is important that you maintain a healthy lifestyle in terms of diet and exercise.");

		m.append(msg);
		var resultMessage = '';

		generateResults(m);
	} else if(total > 15 && total <= 25){


		var m = document.createElement("p");
		m.className = "results";
		var t = document.createTextNode("Medium Risk: ");

		m.appendChild(t);
		var msg = document.createTextNode("Your results show that you currently have a medium risk of developing diabetes. For more information on your risk factors, and what to do about them, please visit our diabetes advice website at ");

		m.append(msg);


		var a = document.createElement('a');
		var linkText = document.createTextNode("zha.org.zd");
		a.appendChild(linkText);
		a.title = "ZHA Website";
		a.href  = "http://www.zha.org.zd/";

		m.append(a);

		
		generateResults(m);
	} else if(total > 25){
		var m = document.createElement("p");
		m.className = "results";
		var t = document.createTextNode("High Risk: ");

		m.appendChild(t);
		var msg = document.createTextNode("Your results show that you currently have a HIGH risk of developing diabetes. ");

		m.append(msg);

		var a = document.createElement('i');
		var linkText = document.createTextNode("[Your main risk factors are your BMI and your diet.]");
		a.appendChild(linkText);

		m.append(a);

		var n = document.createElement("p");
		n.className = "results";
		var t = document.createTextNode(" We advise that you contact the Health Authority to discuss your risk factors as soon as you can. Please fill in our ");

		n.appendChild(t);

		m.append(n);

		var a = document.createElement('a');
		var linkText = document.createTextNode("contact form");
		a.appendChild(linkText);
		a.title = "Contact Form";
		a.href  = "../q2/index.html";
		a.target  = "__blank";

		n.append(a);

		m.append(n);

		var t = document.createTextNode(" and a member of the Health Authority Diabetes Team will be in contact with you.");
		n.appendChild(t);

		generateResults(m);
	} else {
		//catch all error
		var resultMessage = 'Error: Please retake the test again, error calculating your results.';
	}
}

/**
*	Function will take the values of the user checked checkboxes and sum the result.
*	@return the summed calculated result value as an integer type
*/

function generateTotals(){
	var q_1_0 = parseInt(document.querySelector('input[name="radio_q0"]:checked').value);

	var q_1_1 = parseInt(document.querySelector('input[name="radio_q1"]:checked').value);

	var q_1_2 = parseInt(document.querySelector('input[name="radio_q2"]:checked').value);

	var q_1_3 = parseInt(document.querySelector('input[name="radio_q3"]:checked').value);

	
	return q_1_0 + q_1_1 + q_1_2 + q_1_3;
}

/**
*	Function takes care of the displaying of the results messages in the correct manner
*	@param resultsMessage: The generated mark up message based off of the calculation of the summed value of the checkboxes
*/

function generateResults(resultMessage){
	
	//grab the results message if there's already one displayed on the page
	var paras = document.getElementsByClassName('results');

	//if there are old results on the page then remove them
	while(paras[0]){
	    paras[0].parentNode.removeChild(paras[0]);
	}

	//print the new results
	document.getElementById("results-summary").appendChild(resultMessage); 
	

}