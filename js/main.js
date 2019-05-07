$(document).ready(function() {
	
	var owl = $('.owl-carousel');
		owl.owlCarousel({
		    items:2,
		    loop:true,
		    margin:10,
		    autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true,
		    responsive:{

		    	768:{
		    		items:3
		    	},

		    	1024:{
		    		items:2
		    	}
		    }
	});


	// TRIGGER MENU
	$('.burger').click(function(){
		$( ".menu__principal" ).fadeIn( "fast" );
		$('.menu__principal').css('display','flex');
	});

	$('.menu__close').click(function(){
		$(".menu__principal").fadeOut("fast");
	});

});