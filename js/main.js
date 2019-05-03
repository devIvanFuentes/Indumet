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
});