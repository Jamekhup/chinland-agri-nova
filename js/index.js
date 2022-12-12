$(document).ready(function(){

	$('.footer .myi .fas').click(function() {
	    $('html, body').animate({scrollTop: 0}, 800);
	  		return false;
	});

	$('.autoplay').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	});
});