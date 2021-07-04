
$(document).ready(function(){
  $('.slider').slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    arrows: true,
    nextArrow: document.querySelector('.main-sliderControl__left-arrow'),
    prevArrow: document.querySelector('.main-sliderControl__right-arrow'),
    dotsClass: document.querySelector('.main-sliderControl__dots')
  });
});


$(".slider").on("afterChange", function(event, slick, currentSlide, nextSlide, prevSlide){
  $(".main-sliderControl__number span").text(currentSlide + 1);
});

