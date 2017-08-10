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

