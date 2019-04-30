$(document).ready(function() {
	var owl = $('.owl-carousel');
		owl.owlCarousel({
		    items:2,
		    loop:true,
		    margin:10,
		    autoplay:true,
		    autoplayTimeout:3000,
		    autoplayHoverPause:true
	});
});