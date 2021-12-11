$(document).ready(function() {
    $("#slider").bxSlider({
		randomStart: true,
        auto: true,
		moveSlides: 1,
        minSlides: 1,
        maxSlides: 2,
        slideWidth: 500,
		captions: true,
		pause: 5000,
		pager: true,
        pagerType: 'long',
        pagerSelctor:"id_pager",
    });
});