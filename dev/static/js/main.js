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


$(function(){
    $('.tab-panels .tabs li').on('click', function(){

        var $panel = $(this).closest('.tab-panels');
        //event listener listening for clicks on the tabs panels

        //figure out which panel to show

        $panel.find(' .tabs li.active').removeClass('active');

        $(this).addClass('active');

        var clickedPanel = $(this).attr('data-panel-name');

        //hide current panel
        $panel.find('.panel.active').slideUp(0, nextPanel);

        //show new panel
        function nextPanel(){
            $(this).removeClass('active');

            $('#'+clickedPanel).slideDown(0, function(){
                $(this).addClass('active');
            });
        }
    })
});