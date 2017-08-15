$(document).ready(function() {
    $('#fullpage').fullpage();
});


    // surfboards list
(function($){
var $surfboardList = $('.surfboard-list').flickity({
    draggable: false,
    prevNextButtons: false,
    pageDots: false
});
    // previous
$('.surfboard-btn--previous').on( 'click', function() {
    $surfboardList.flickity('previous', true);
});
    // next
$('.surfboard-btn--next').on( 'click', function() {
    $surfboardList.flickity( 'next', true );
});
})(jQuery);


    // caroucel
/**
(function($){
    // asNavFor can be set a selector string
asNavFor: '.carousel-main'
asNavFor: $('.carousel-main')[0]
asNavFor: document.querySelector('.carousel-main')

$('.carousel-main').flickity();
    // 2nd carousel, navigation
$('.carousel-nav').flickity({
    asNavFor: '.carousel-main',
    contain: true,
    pageDots: false
});
})(jQuery);
**/


    //  radio
$(function() {
    $('#star-rating1').barrating({
        theme: 'fontawesome-stars-o',
        initialRating: 4
    });
    $('#star-rating2').barrating({
        theme: 'fontawesome-stars-o',
        initialRating: 5
    });
    $('#star-rating3').barrating({
        theme: 'fontawesome-stars-o',
        initialRating: 3
    });
});


(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));