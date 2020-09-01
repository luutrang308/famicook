$(document).ready(function(){
  new WOW().init();
	/*slider phong ngu*/
	$('.slide-homepage').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  adaptiveHeight: true,
	  prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='images/prev.png' alt=''></button>",
      nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='images/next.png' alt=''></button>",
	});

  $('.slider-partner').slick({
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='images/p6.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='images/p7.png' alt=''></button>",
    responsive:[
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    ]
  });

	
  /**/

  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
  });


$(document).ready(function(){
  $('.your-class').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive:[
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    ]
  });
});

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  $('.your-class').slick('setPosition');
});
    
});