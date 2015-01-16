$(document).ready(setup);

function setup() {
	$('#bar h2').on('click', function() {
		resetClasses($(this));
		revealRecipe($(this));
	});
}