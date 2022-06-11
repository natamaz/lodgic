$(document).ready(function(){

    //Scroll to ID from another page
    var HashValue = location.hash; 
    //var headerHeight = $('header').height();
    location.hash = ''; 
    if(HashValue[1] != undefined){ 
        $('html, body').animate({scrollTop: $(HashValue).offset().top}, 'slow');
    };
    //End Scroll to ID from another page
}); 


