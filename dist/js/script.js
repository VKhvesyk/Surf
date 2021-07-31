document.addEventListener('DOMContentLoaded', function() {


  //Auto lines height

  function autoLinesHeight() {
    let siteHeight = document.querySelector('body').clientHeight,
        line = document.querySelector('.lines');

    console.log(siteHeight); // only for test

    line.style.height = `${siteHeight}px`;
  }

  autoLinesHeight();

    

  // Hamburger menu
  const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.hamburger-menu'),
      closeElement = document.querySelector('.hamburger-menu__close');

      hamburger.addEventListener('click', function() {
          menu.classList.toggle('active');
          document.body.style.overflow = 'hidden';
      });

      closeElement.addEventListener('click', function() {
          menu.classList.toggle('active');
          document.body.style.overflow = '';
      });

  menu.addEventListener('click', (event) => {
      let target = event.target;

      if (target && target.classList.contains('hamburger-menu__overlay')) {
        menu.classList.toggle('active');
        document.body.style.overflow = '';
      }
  });
  
  // Slider

    const slides = document.querySelectorAll('.main-slide'),
          prev = document.querySelector('.main-viewport-control__left-arrow'),
          next = document.querySelector('.main-viewport-control__right-arrow'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.main-viewport'),
          slidesField = document.querySelector('.main-viewport__inner'),
          touchZone = document.querySelectorAll('.main-slide'),
          width = window.getComputedStyle(slidesWrapper).width;


    let slideIndex = 1;
    let offset = 0;

    total.textContent = slides.length;
    current.textContent = slideIndex;


    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';


    slides.forEach(slide => {
        slide.style.width = width;
    });

    function moveToNextSlide() {
          if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        current.textContent = slideIndex;
    }

    function moveToPrevSlide() {
          if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        current.textContent = slideIndex;
    }


    next.addEventListener('click', () => {
        moveToNextSlide();
    });

    prev.addEventListener('click', () => {
        moveToPrevSlide();
    });

    // swipe
    touchZone.forEach(slide => {
      slide.addEventListener('touchstart', handleTouchStart, {passive: true});
    });
    touchZone.forEach(slide => {
      slide.addEventListener('touchmove', handleTouchMove, {passive: true});
    });


    let x1 = null;
    let y1 = null;

    function handleTouchStart(event) {
      const firstTouch = event.touches[0];

      x1 = firstTouch.clientX;
      y1 = firstTouch.clientY;
    }

    function handleTouchMove(event) {
      if (!x1 || !y1) {
        return false;
      }

      let  x2 = event.touches[0].clientX;
      let  y2 = event.touches[0].clientY;

      let xDiff = x2 - x1;
      let yDiff = y2 - y1;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        // move left - right or right -left
        if (xDiff > 0) {
          moveToPrevSlide();
        } else {
          moveToNextSlide();
        }
      }

      x1 = null;
      y1 = null;
    }


  // Show hide shop cards  
 
  const showButton = document.querySelector('.shop__show-cards'),
        cards = document.querySelectorAll('.shop-cards');
  let clickNumber = 2;

  showButton.addEventListener('click', (event) => {
      event.preventDefault();

      for (let i = 3; i < cards.length; i++) {
        cards[i].classList.remove('hide');
        cards[i].classList.add('animation');

        autoLinesHeight();
      }
      
  });

  
  // Player

  $("document").ready(function() {
    $("#video").simplePlayer();
  });

  // $("#video").simplePlayer({

  //   // autoplay: 1,
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
  
  

});

