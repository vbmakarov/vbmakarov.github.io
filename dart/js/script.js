$(document).ready(function () {
    
	$('.header__burger').click(function (event) {
		$('.header__burger span,.header__body').toggleClass('active');
		$('body').toggleClass('lock');
	});

    $('.row__title').click(function (event) {
    $(this).closest('.row__content').toggleClass('active');
});


    $('.slider').slick({
    vertical: true,
    slidesToShow: 2,
    mobileFirst: true,
    prevArrow: '<span class="material-icons slick-prev">keyboard_arrow_up</span>',
    nextArrow: '<span class="material-icons slick-next">keyboard_arrow_down</span>',
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
            }
        },
    ]
});

$('.unit-slider').slick({
    slidesToShow: 1,
    dots: true,
    mobileFirst: true,
    rows: 0

});
});