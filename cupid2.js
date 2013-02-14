$(document).ready(function() {

	pageState();

});

function pageState() {

	// Listen for spacebar events
	$(document).on('keypress', function(e) {
		if (e.which === 32) {
			e.preventDefault();
			next();
		}
	})
}

function next() {
	$(".textField").html("New Text");
}