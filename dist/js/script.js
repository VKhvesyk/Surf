

window.onload = function() {


  //Автоматичне встановлення висоти горизонтальних ліній

    let siteHeight = document.querySelector('body').clientHeight,
        line = document.querySelector('.lines');

    console.log(siteHeight); // only for test

    line.style.height = `${siteHeight}px`;
  
  // Slider

    const slides = document.querySelectorAll('.main-slide'),
          prev = document.querySelector('.main-sliderControl__left-arrow'),
          next = document.querySelector('.main-sliderControl__right-arrow'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current'),
          slidesWrapper = document.querySelector('.main-viewport'),
          slidesField = document.querySelector('.main-viewport__inner'),
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


    next.addEventListener('click', () => {
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
    });

    prev.addEventListener('click', () => {
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
    });


  // Show hide shop cards  
 
  const showButton = document.querySelector('.shop__show-cards'),
        cards = document.querySelectorAll('.shop-cards');
  let clickNumber = 2;

  showButton.addEventListener('click', (event) => {
      event.preventDefault();

      // cards.forEach(card => {
      //   card.classList.remove('hide');
      // });
      console.log(event);

      // for (let i = 3; i < cards.length; i++) {
      //   cards[i].classList.toggle('hide');
      //   cards[i].classList.toggle('animation'); 
      // }

      
        if (clickNumber % 2 == 0) {
          for (let i = 3; i < cards.length; i++) {
            cards[i].classList.toggle('hide');
            cards[i].classList.toggle('animation'); 
          }
          showButton.textContent = 'Show less';
          clickNumber++;
        } else {
          for (let i = 3; i < cards.length; i++) {
            cards[i].classList.toggle('hide');
            cards[i].classList.toggle('animation'); 
          }
          showButton.textContent = 'Show all';
          clickNumber++;
        }
      
  });




  // Player

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

