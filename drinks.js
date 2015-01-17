$(document).ready(setup);

function setup() {
	$('#bar h2').on('click', function() {
		resetClasses($(this));
		revealRecipe($(this));
	});
}

function revealRecipe($elem) {
	var drinkIndex = $elem.closest('section').index('#bar section') + 1;

	$('.recipes ul:nth-of-type(' + drinkIndex + ')').addClass('visible');
	$('.recipes h3:nth-of-type(' + drinkIndex + ')').addClass('visible');
}

function resetClasses($elem) {
	$('.recipes ul, .recipes h3, .recipes ul li').removeClass();
	$('.recipes').removeClass('row2');
	$('.recipes').addClass('visible');
}