$(document).ready(setup);

function setup() {
	var text = "...a good dinner/is of great/importance/to good talk./One cannot/";
	var text2 = "if one has not/dined well./-Virginia Woolf";

	$('#roller, #one').addClass('scene1');
	letters(250, "#one span, #one br", "#one", text);
}

function letters(initialDelay, selector, element, text) {
	var re = /[-.\w]/;
	for (var i in text) {
		if (text[i].match(re)) {
			var el = document.createElement("span");
			var letter = document.createTextNode(text[i]);
			el.appendChild(letter);
			$(element).append(el);
		}
		else if (text[i] === "/") {
			$(element).append(document.createElement("br"));
		}
		else {
			$(element).append(document.createTextNode(text[i]));
		}
	}

	var delay = initialDelay;
	$(selector).each(function() {
		if ($(this).is('span')) {
			this.style[Modernizr.prefixed('animation')] = "letterAppear 100ms " + delay + "ms forwards";
			delay += 250;
		}
		//if this is a br element, but NOT a br element with the class "skip"
		else if ($(this).is('br') && ( ! $(this).is('.skip'))) {
			delay += 1500;
		}
	});

}