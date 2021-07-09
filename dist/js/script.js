

window.onload = function() {
  
  $(document).ready(function(){
    $('.slider').slick({
      adaptiveHeight: true,
      slidesToShow: 1,
      arrows: true,
      nextArrow: document.querySelector('.main-sliderControl__right-arrow'),
      prevArrow: document.querySelector('.main-sliderControl__left-arrow'),
      dotsClass: document.querySelector('.main-sliderControl__dots')
    });
  });
  
  
  $(".slider").on("afterChange", function(event, slick, currentSlide, nextSlide, prevSlide){
    $(".dynamic-slide-number").text(currentSlide + 1);
  });
  
 

  //Автоматичне встановлення висоти горизонтальних ліній

  let siteHeight = document.querySelector('body').clientHeight,
        line = document.querySelector('.lines');
  console.log(siteHeight);
  
  line.style.height = `${siteHeight}px`;



  $("document").ready(function() {
    $("#video").simplePlayer();
  });

  // $("#video").simplePlayer({

  //   autoplay: 1,
  //   autohide: 1,
  //   border: 0,
  //   wmode: 'opaque',
  //   enablejsapi: 1,
  //   modestbranding: 1,
  //   version: 3,
  //   hl: 'en_US',
  //   rel: 0,
  //   showinfo: 0,
  //   hd: 1,
  //   iv_load_policy: 3 // add origin
    
  //   });


  

};

