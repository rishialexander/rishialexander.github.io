$( document ).ready(function() {

	$(window).scroll(function(){
		if ($(document).scrollTop() >= 0) {
			$('#card-1').css('position', 'relative');
			$('#card-2').css('position', 'fixed');
			$('#card-3').css('position', 'fixed');
			$('#card-4').css('position', 'fixed');
			$('#card-5').css('position', 'fixed');
		}
		if ($(document).scrollTop() > 700) {
			$('#card-1').css('position', 'relative');
			$('#card-2').css('position', 'relative');
			$('#card-3').css('position', 'fixed');
			$('#card-4').css('position', 'fixed');
			$('#card-5').css('position', 'fixed');
		}
		if ($(document).scrollTop() > 1400) {
			$('#card-1').css('position', 'relative');
			$('#card-2').css('position', 'relative');
			$('#card-3').css('position', 'relative');
			$('#card-4').css('position', 'fixed');
			$('#card-5').css('position', 'fixed');
		}
		if ($(document).scrollTop() > 2100) {
			$('#card-1').css('position', 'relative');
			$('#card-2').css('position', 'relative');
			$('#card-3').css('position', 'relative');
			$('#card-4').css('position', 'relative');
			$('#card-5').css('position', 'fixed');
		}
		if ($(document).scrollTop() > 2800) {
			$('#card-1').css('position', 'relative');
			$('#card-2').css('position', 'relative');
			$('#card-3').css('position', 'relative');
			$('#card-4').css('position', 'relative');
			$('#card-5').css('position', 'relative');
		}

	});
});
