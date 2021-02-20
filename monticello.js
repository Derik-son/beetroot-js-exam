$('.slider').slick({
   
   slidesToShow: 3,
   slidesToScroll: 1,
   dots:true,
   });

   $('.header-slider').slick({
      lazyLoad:'progressive',
      draggable: false,
      infinite: true,
      
      arrows: false,
      autoplay: true,
      speed: 10,
   });
   $('#header-slider').on('afterChange', function(_event,slick,currentSlide){
      if (currentSlide ==3) { 
        console.log('yes, there will be all title'); 
      }
    });
    