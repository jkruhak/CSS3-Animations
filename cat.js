$(document).ready(setup);

function setup() {
	setTimeout(function() {
		$('#stage').addClass('scene1');
	}, 100);

	setTimeout(function() {
		$('#newspaper').addClass('scene1');
	}, 500);

	setTimeout(function() {
		$('#page1').addClass('scene1');
	}, 500);

	setTimeout(function() {
		$('#lefteye, #righteye').addClass('scene1');
	}, 500);
}