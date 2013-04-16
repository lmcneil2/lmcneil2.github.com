
$(document).ready(function() {
	//alert("I'm tired");

	//Set a variable to a string.
	var firstName = 'Laura';

	//Set a variale for last name
	var lastName = 'McNeil';

	//Set a variable to an integer.
	var age = 29;

	//alert ('My name is ' + firstName +' '+ lastName + '.');
	//alert ('My age is '+ age + '.' + ' Next year I will be ' + (age + 1));

$('#image-slideshow').cycle({
	 fx:      'scrollRight', 
    next:   '#image-slideshow', 
    timeout:  0, 

});

});


