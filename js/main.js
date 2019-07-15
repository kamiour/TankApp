$(document).ready(function(){

	var swiper = new Swiper('.swiper-container', {
	  navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	  },
	  autoplay: {
		delay: 3000,
	  },
	  roundLengths : true,
	});

	$('.burger-menu').on('click', function(e){
		e.preventDefault();
		$('.nav-mobile ul').toggleClass('is-open')
	});
  
})