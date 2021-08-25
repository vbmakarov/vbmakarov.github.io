let bg = document.querySelector('.f-screen__cover');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});


function writeTextByJS(id, text, speed) {

    var ele = document.getElementById(id),
        txt = text.join("").split("");
    document.getElementById(id).innerHTML = '';


    var interval = setInterval(function () {

        if (!txt[0]) {

            return clearInterval(interval);
        };

        ele.innerHTML += txt.shift();
    }, speed != undefined ? speed : 100);

    return false;
};

writeTextByJS('htext', [document.getElementById('htext').innerHTML]);


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