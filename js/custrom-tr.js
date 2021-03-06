$(document).ready(function(){
  new WOW().init();
  
  
	/*slider*/
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


/* back to top */
 $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.top-up').fadeIn();
        } else {
            $('.top-up').fadeOut();
        }
    });
 $(window).scroll(function(){
        if ($(this).scrollTop() > 500) {
            $('.header_top').fadeIn();
        } else {
            $('.header_top').fadeOut();
        }
    });
$(window).scroll(function(){
        if ($(this).scrollTop() > 1000) {
            $('.poster').css("opacity", "1");
            $('.poster').css("transition", "1s");
        } else {
            $('.poster').css("opacity", "0");
        }
    });
 
    
    //Click event to scroll to top
    $('.top-up').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

 /*$(document).ready(function() {
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
    });*/
  


 /* menu cố định pc*/
        jQuery(document).ready(function($) {
            var $filter = $('.header-pc');
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

/* menu cố định mobile*/
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
      settings: {/*
        centerMode: true,*/
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,/*
        autoplay: true,*/
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


/**/


});