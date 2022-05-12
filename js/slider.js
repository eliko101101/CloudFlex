$('.center').slick({
   
    slidesToShow: 3,
   
    dots: true,
   
    
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode:false,
        }
      }
    ]
  });