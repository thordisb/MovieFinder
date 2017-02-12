$(document).ready(function(){
	$('superslider').slick({
		infinite: true,
		dots: true,
		arrows: true
	})
	
	$('.video').coverVid(1280,720);
});