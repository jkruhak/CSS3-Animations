$(document).ready(setup);

function setup() {
	$('#bar h2').on('click', function() {
		resetClasses($(this));
		revealRecipe($(this));
	});

	$('.tumbler div').on('click', function() {
		resetClasses($(this));
		revealRecipe($(this));

		//add one since nth-of-type(1) is the first elem; nth-of-type(0) is null
		var ingredientIndex = $(this).index() + 1;

		//find the right ingredient element
		var elem = '.recipes ' + 'li:nth-of-type(' + ingredientIndex + ')';

		//add highlight class to the right ingredient in the paper
		$(elem).addClass('highlight');
	});
}

function revealRecipe($elem) {
	var drinkIndex = $elem.closest('section').index('#bar section') + 1;

	$('.recipes ul:nth-of-type(' + drinkIndex + ')').addClass('visible');
	$('.recipes h3:nth-of-type(' + drinkIndex + ')').addClass('visible');
}

function resetClasses($elem) {
	//removes ALL classes from the elems that match these jQuery selectors
	$('.recipes ul, .recipes h3, .recipes ul li').removeClass();

	$('.recipes').removeClass('row2');
	$('.recipes').addClass('visible');

	var drinkIndex = $elem.closest('section').index('#bar section') + 1;

	if(drinkIndex >= 4) {
		$('.recipes').addClass('row2');
	}
}