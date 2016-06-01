$( document ).ready(function() {

	$(window).scroll(function(){
		if ($('#text-1').visible() && ($('#phone-inset video').attr('src') != 'assets/videos/hero.mp4')) {
			$('#phone-inset video').attr('src', 'assets/videos/hero.mp4');
		} 
		if ($('#text-2').visible() && ($('#phone-inset video').attr('src') != 'assets/videos/budtender.mp4')) {
			$('#phone-inset video').attr('src', 'assets/videos/budtender.mp4');
		} 
		if ($('#text-3').visible() && ($('#phone-inset video').attr('src') != 'assets/videos/history.mp4')) {
			$('#phone-inset video').attr('src', 'assets/videos/history.mp4');
		} 
		if ($('#text-4').visible() && ($('#phone-inset video').attr('src') != 'assets/videos/grower.mp4')) {
			$('#phone-inset video').attr('src', 'assets/videos/grower.mp4');
		} 
		if ($('#text-5').visible() && ($('#phone-inset video').attr('src') != 'assets/videos/beta.mp4')) {
			$('#phone-inset video').attr('src', 'assets/videos/beta.mp4');
		}
		$('#phone-inset').css('background-size', 'cover');   
	});
});
