$(document).ready(function(){

    //mobile menu
    $(document).mouseup(function(e){
        $('.toggle-menu').on('click', function () {
            $('#mainMenu').toggleClass('show');
            $(this).toggleClass('active');
        });
        var menu = $('#mainMenu.show');
        if (!menu.is(e.target) && menu.has(e.target).length === 0) {
            menu.removeClass('show');
            $('.toggle-menu').removeClass('active');
        }
    });
    //end mobile menu

    //hide cookie
    $(".cookie-btn").on("click", function(event) {
        event.preventDefault();
        $("#cookie-notice").slideToggle();
    });

    //mobile fixed menu
    //Resize > 768px
    function ResizeFunc(m) {
        if (!m.matches) {
            var liheHeight = $('.header__bottom').offset().top;
            $(document).scroll(function() {
                var scroll = $(this).scrollTop();
                if (scroll > liheHeight) {
                    $('.header__bottom').addClass('fixed');
                    $('header+section').addClass('afterFixed');
                } else {
                    $('.header__bottom').removeClass('fixed');
                    $('header+section').removeClass('afterFixed');
                }
            });
        }else{
            $('.header__bottom').removeClass('fixed');
            $('header+section').removeClass('afterFixed');
            $(document).scroll(function() {
                $('.header__bottom').removeClass('fixed');
                $('header+section').removeClass('afterFixed');
            })
        }
    }

    var m = window.matchMedia("(min-width: 768px)")
    ResizeFunc(m);
    m.addListener(ResizeFunc);
    //Resize > 1024px

    //popups
    $('.open-thanksMsg').on("click",function(){
        $('.overlay-thanksMsg').addClass('active');
    });
    $('.open-requestCall').on("click",function(){
        $('.overlay-requestCall').addClass('active');
    });
    $('.overlay-thanksMsg .closeBtn, .overlay-thanksMsg .close').on("click",function(){
        $('.overlay-thanksMsg').removeClass('active');
    });
    $('.overlay-requestCall .closeBtn, .overlay-requestCall .close').on("click",function(){
        $('.overlay-requestCall').removeClass('active');
    });
    //end popups

    //проверка формы
    $("form input, textarea").on("change input keyup paste", function() {
        $(this).parent().find(":invalid").length ? ($(this).parent().removeClass("valid"),
        $(this).parent().addClass("invalid")) : ($(this).parent().removeClass("invalid"),
        $(this).parent().addClass("valid"))
    });
    $("form input, textarea").on("invalid", function(event) {
        event.preventDefault();
        $(this).parent().addClass('invalid');
        $(this).attr("placeholder", "Неправильно введено");
    });

    //input only number
    $('input[type=number]').on("click", function () {
        $(this).keydown(function(e){
            if((e.which >=48 && e.which <=57)  // number
            || (e.which >=96 && e.which <=105)  // num lock
            || e.which==8 // backspace
            || (e.which >=37 && e.which <=40) // arrows
             || e.which==46) // delete 
          {
            return true;
          } else {
              return false;            
          }		 
        });
    });
    //End 


    //Map setting
    ymaps.ready(init);
    var mapCoord = $('#map').attr('data-coord');
    mapCoord = JSON.parse(mapCoord);
    function init() {
        var center = mapCoord;
            var myMap1 = new ymaps.Map('map', {
                center: center,
                zoom: 14
            });
            myPlacemark1 = new ymaps.Placemark(myMap1.getCenter(), {
                hintContent: '',
                balloonContent: ''
            }, {
                iconLayout: 'default#image',
                iconImageHref: '../img/maps-and-flags.svg',
                iconImageSize: [37, 50],
                iconImageOffset: [-5, -38]
            });

            myMap1.geoObjects.add(myPlacemark1);
            myMap1.setCenter(mapCoord, 14);
            myMap1.controls.remove('geolocationControl');
            myMap1.controls.remove('searchControl');
            myMap1.controls.remove('trafficControl');
            myMap1.controls.remove('typeSelector');
            myMap1.controls.remove('fullscreenControl');
            myMap1.controls.remove('rulerControl');
        }
    //End Map setting 
});


