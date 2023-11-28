$('.slider_slick').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite:true,
    centerMode: true,
    // dots: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '.slick-next',
    prevArrow: '.slick-prev',
    responsive: [{
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 400,
       settings: {
        slidesToShow: 1,
        slidesToScroll: 1
       }
    }]
  });
$('.slider_slick1').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    infinite:true,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '.slick-next',
    prevArrow: '.slick-prev',
    responsive: [{
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
       breakpoint: 570,
       settings: {
        slidesToShow: 1,
        // variableWidth: false,
       }
    }]
  });
  