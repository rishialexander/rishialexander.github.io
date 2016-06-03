$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(window).load(function() {

	var numCards = $('#cards').children().length;
	var totalOffset = 0;
	for (var i = 0; i < numCards; i++) {
		var offset = $('#cards').children().eq(i)[0].getBoundingClientRect().top + $('#cards').children().eq(i).outerHeight();
		totalOffset += offset;
		$('#cards').children().eq(i).attr('data-offset', totalOffset);
	}

	$(window).resize(function() {
		$(window).scrollTop(0);
		totalOffset = 0;
		for (var i = 0; i < numCards; i++) {
			var offset = $('#cards').children().eq(i)[0].getBoundingClientRect().top + $('#cards').children().eq(i).outerHeight();
			totalOffset += offset;
			$('#cards').children().eq(i).attr('data-offset', totalOffset);
		}		
	});



	$(window).scroll(function(){

		for (var i = 1; i < numCards; i++) {
			var thisOffset = $('#cards').children().eq(i - 1).attr('data-offset');
			if ($(document).scrollTop() > thisOffset) {
				$('#cards').children().eq(i).css('position', 'relative');
			} else {
				$('#cards').children().eq(i).css('position', 'fixed');
			}
		}

	});
});



