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
(function($){
    // asNavFor can be set a selector string
asNavFor: '.carousel-main'
    // or an element
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


    //  radio
var logID = 'log',
    log = $('<div id="'+logID+'"></div>');
$('body').append(log);
$('[type*="radio"]').change(function () {
    var me = $(this);
    log.html(me.attr('value'));
});



