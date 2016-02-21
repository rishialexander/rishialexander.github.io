$( document ).ready(function() {
		
/* ==================================== */	


	//set behavior for interactive images: CLICK | HOVERIN | HOVERINOUT
	var action = 'HOVERINOUT';
	
	var links = {
		'#img7' :	{	
							'#71' 		: 'images/71.png',
							'#72' 		: 'images/72.png',
							'#73' 		: 'images/73.png',
							'#74' 		: 'images/74.png'
						},
						
		'#img10' :	{	
							'#101' 		: 'images/101.png',
							'#102' 		: 'images/102.png',
							'#103' 		: 'images/103.png',
							'#104'		: 'images/104.png',
							'#105'		: 'images/105.png',
							'#106'		: 'images/106.png'
						}/*
,
		'#img13' :	{
							'#13'		: 'images/13.png',
							'#132'		: 'images/132.png',
							'#133'		: 'images/133.png',
							'#134'		: 'images/134.png',
							'#135'		: 'images/135.png'
		}
*/
	}
	
	
	

/*
	var settings = {
		'#findingmap' :	[{	
							'#drugcourt' 		: 'images/3finding21.png',
							'#incarceration' 	: 'images/3finding22.png',
							'#probationL' 		: 'images/3finding23.png',
							'#probationR' 		: 'images/3finding24.png'
						},
							['fadeInRight', 'fadeOutRight']
						],
						
		'#chargesmap' :	[{	
							'#possession' 		: 'images/5being21.png',
							'#delivery' 		: 'images/5being22.png',
							'#property' 		: 'images/5being23.png'
						},
							['bounceInRight', 'bounceOutRight']
						]
	}	
*/
	
	
/* ==================================== */

	
	//preloads images in the background to improve the responsiveness
	$.preload = function() {
		var _image = $('<img/>');
		_image[0].src = arguments[0];
	
		_image.on('load', function() {
       		console.log('Image ' + _image[0].src + ' loaded.');
		});
	}
	
	
/*
	function runAnim(target, animation) {
    	$( target ).removeClass().addClass(animation + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$( target ).removeClass();
		});
	};
*/
	

	$( 'area[href="#1down"]').click(function(){
		$('html,body').animate({scrollTop: $( '#overview' ).offset().top},400);;
	});
		

	$.each(links, function(image, pair){
		$.each(links[image], function(reference, source){
			
			//preload image
			$.preload( source );
						
			if (action == 'HOVERINOUT') {
				var original = $( image ).attr( 'src' );
				$( 'area[href="' + reference + '"]').hover(function(){
					$( image ).attr( 'src', source );
				}, function(){
					$( image ).attr( 'src', original );
				});
			} else if (action == 'HOVERIN' ) {
				$( 'area[href="' + reference + '"]').hover(function(){
					$( image ).attr( 'src', source );
				});				
			} else if (action == 'CLICK' ) {
				$( 'area[href="' + reference + '"]').click(function(){
					$( image ).attr( 'src', source );
				});					
			}
		});
	});
	
	
	var carousel = ['images/13.png', 'images/132.png', 'images/133.png', 'images/134.png', 'images/135.png'];
	var current = 0;
	
	//DRUG COURT REQUIREMENTS HACK
	$( 'area[href="#13"]').click(function(){
		$( '#img13' ).attr( 'src', 'images/13.png' );
		current = 0;
	});
	$( 'area[href="#132"]').click(function(){
		$( '#img13' ).attr( 'src', 'images/132.png' );
		current = 1;
	});
	$( 'area[href="#133"]').click(function(){
		$( '#img13' ).attr( 'src', 'images/133.png' );
		current = 2;
	});
	$( 'area[href="#134"]').click(function(){
		$( '#img13' ).attr( 'src', 'images/134.png' );
		current = 3;
	});
	$( 'area[href="#135"]').click(function(){
		$( '#img13' ).attr( 'src', 'images/135.png' );
		current = 4;
	});
		
	
	$( 'area[href="#13left"]').click(function(){
		if ( carousel[ current - 1 ] )  {
			$( '#img13' ).attr( 'src', carousel[ current - 1] );
			current--;
		}
	});
	
	$( 'area[href="#13right"]').click(function(){
		if ( carousel[ current + 1 ] )  {
			$( '#img13' ).attr( 'src', carousel[ current + 1] );
			current++;
		}
	});

/*
	$.each(settings, function(image){
		$.each(settings[image][0], function(reference, source){
			//preload image
			$.preload( source );
						
			if (action == 'HOVERINOUT') {
				var original = $( image ).attr( 'src' );
				$( 'area[href="' + reference + '"]').hover(function(){
					runAnim( image, settings[image][1][0] );
					$( image ).attr( 'src', source );
				}, function(){
					runAnim( image, settings[image][1][0] );					
					$( image ).attr( 'src', original );
				});
			} else if (action == 'HOVERIN' ) {
				$( 'area[href="' + reference + '"]').hover(function(){
					runAnim( image, settings[image][1][0] );
					$( image ).attr( 'src', source );
				});				
			} else if (action == 'CLICK' ) {
				$( 'area[href="' + reference + '"]').click(function(){
					runAnim( image, settings[image][1][0] );
					$( image ).attr( 'src', source );
				});					
			}			
		});
	});
*/
	
	
	//makes image maps responsive	
	$('img[usemap]').rwdImageMaps();
	
	//removes blue selection border around image maps
	$( 'area' ).attr( 'onfocus', 'blur();' );
	
	$( '.nav' ).singlePageNav();	
});

