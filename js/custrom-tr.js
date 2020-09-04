$(document).ready(function(){
  new WOW().init();
	/*slider phong ngu*/
	$('.slide-homepage').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
    autoplaySpeed: 1200,
	  slidesToShow: 1,
	  adaptiveHeight: true,
    autoplay: true,
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
        slidesToShow: 2,
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
  $('.slider-trademark').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='images/leftx.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='images/rightx.png' alt=''></button>",
    
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

  $(function() {

      // Chung
      var topup = $('.top-up');

      topup.on('click', function(e) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  });

 $(document).ready(function() {
    $('.block__title').click(function(event) {
        if($('.block').hasClass('one')){
            $('.block__title').not($(this)).removeClass('active');
            $('.block__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });

});
  $(document).ready(function() {
        if($('.block__item').hasClass('block__item__active')){
            $(".block__item__active .block__text", this).css("display","block");
        }
        
      });


   $(".block__item").click(function(){
      $(this).addClass("block__item__active");
      if($('.block').hasClass('one')){
            $('.block__item').not($(this)).removeClass('block__item__active');
        }
    });
  
/* slider feed back */
 $('.slider-feedback').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  });

/* menu cố định */
        jQuery(document).ready(function($) {
            var $filter = $('.header-mobile');
            var $filterSpacer = $('<div />', {
                "class": "vnkings-spacer",
                "height": $filter.outerHeight()
            });
            if ($filter.size())
            {
                $(window).scroll(function ()
                {
                    if (!$filter.hasClass('hd-mb') && $(window).scrollTop() > $filter.offset().top)
                    {
                        $filter.before($filterSpacer);
                        $filter.addClass("hd-mb");
                    }
                    else if ($filter.hasClass('hd-mb')  && $(window).scrollTop() < $filterSpacer.offset().top)
                    {
                        $filter.removeClass("hd-mb");
                        $filterSpacer.remove();
                    }
                });
            }
        });
  /**/
  $(".icon-menu").click(function () {
        $(".sub-menu-mb").fadeToggle("slow");
    });
  $(".img-serach").click(function () {
        $(".item-search").fadeToggle("slow");
    });

 /* post page mobile */
  $('.post-page-slide-mb').slick({
    responsive:[
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        autoplay: true,
      }
    },
    ]
  });
  $('.fami-app-slide').slick({
    responsive:[
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='images/next2.png' alt=''></button>",
      }
    },
    ]
  });




});