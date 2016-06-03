$( document ).ready(function() {

	var vid1 = false;
	var vid2 = false;
	var vid3 = false;
	var vid4 = false;
	var vid5 = false;


	$(window).scroll(function(){

		if ($("#hero-splash")[0].getBoundingClientRect().bottom <= 0) {
			$('#app-right').css('position', 'fixed');
			$('#app-right').css('top', '0');
		} else {
			$('#app-right').css('position', 'absolute');
			$('#app-right').css('top', '100vh');
		}

		if ($('#text-1').visible() && ( !vid1 )) {
			$('#phone-block').fadeTo(75, 1, function(){
				$('#phone-inset video').attr('src', 'assets/videos/hero.mp4');
				$('#phone-block').fadeTo(75, 0);
			});
			vid1 = true;
			vid2 = false;
			vid3 = false;
			vid4 = false;
			vid5 = false;
		} 
		if ($('#text-2').visible() && ( !vid2 )) {
			$('#phone-block').fadeTo(75, 1, function(){
				$('#phone-inset video').attr('src', 'assets/videos/budtender.mp4');
				$('#phone-block').fadeTo(75, 0);
			});
			vid1 = false;
			vid2 = true;
			vid3 = false;
			vid4 = false;
			vid5 = false;
		} 
		if ($('#text-3').visible() && ( !vid3 )) {
			$('#phone-block').fadeTo(75, 1, function(){	
				$('#phone-inset video').attr('src', 'assets/videos/history.mp4');
				$('#phone-block').fadeTo(75, 0);
			});
			vid1 = false;
			vid2 = false;
			vid3 = true;
			vid4 = false;
			vid5 = false;
		} 
		if ($('#text-4').visible() && ( !vid4 )) {
			$('#phone-block').fadeTo(75, 1, function(){	
				$('#phone-inset video').attr('src', 'assets/videos/grower.mp4');
				$('#phone-block').fadeTo(75, 0);
			});
			vid1 = false;
			vid2 = false;
			vid3 = false;
			vid4 = true;
			vid5 = false;
		} 
		if ($('#text-5').visible() && ( !vid5 )) {
			$('#phone-block').fadeTo(75, 1, function(){	
				$('#phone-inset video').attr('src', 'assets/videos/beta.mp4');
				$('#phone-block').fadeTo(75, 0);
			});
			vid1 = false;
			vid2 = false;
			vid3 = false;
			vid4 = false;
			vid5 = true;
		}
		$('#phone-inset').css('background-size', 'cover');   
	});
});
