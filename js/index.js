

function itemEntered(event){ // event handler that drives functionality

	event.preventDefault(); //should prevent form submit event from reloading page

	var city = $('#city-type').val(); //creates the variable city and assigns it the input in the input box

	if (city = "New York" || "NYC" || "New York City") {

		$('body').html('background-image', 'url(images/nyc.jpg)' );

	}else if(city = "San Francisco" || "SF" || "Bay Area"){

		$('body').html('background-image', 'url(images/sf.jpg)' );

	} else{

		$('body').html('background-image', 'url(images/citipix_skyline.jpg)' );
	}


}



$('#submit-btn').submit(itemEntered); //listen for form submission and assign it to the event itemEntered





/* 
Take user user input value and store input as a string
var city = $('#city-type').submit();
 -check if if input is a string?
create variable that stores the user input value 
check if the variable that user inputs matches any of the 
if city

*/

