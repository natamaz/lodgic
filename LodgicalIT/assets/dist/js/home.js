
$(document).ready(function(){
    //slider
    var swiper = new Swiper('.ourClients__slider', {
        slidesPerView: 6,
        slidesPerColumn: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        breakpoints: {
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
            }
          }
    });
});