$(document).ready(function() {	
	$("form").submit(function(){
	    var name = $('#name').val()	;
	    var phone = $('#phone').val()	;	    
	    var state = $('#state').val()	;
	   	var email = $('#email').val()	;
	   	var password = $('#password').val()	;

// check that all important fields are filled in
	   	if (name.length === 0 ||
	   		phone.length === 0 ||
	   		state.length === 0 ||
	   		email.length === 0 ||
	   		password.length === 0) {
	   			$("#error").show();
	   			
    	}
	});
});

