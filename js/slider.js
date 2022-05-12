$('.center').slick({
   
    slidesToShow: 3,
   autoplay: true,
    dots: true,
   
    
    responsive: [
      {
        breakpoint: 1440,
        settings: {
            centerMode:true,
          arrows:false,
          slidesToShow: 1,
          
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode:false,
          arrows:false,
        }
      }
    ]
  });