$(function() {
    $('a[href^="#"]').click(function() {
        let speed = 500;
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html' : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

$(function() {
    ScrollReveal().reveal('.about');
    ScrollReveal().reveal('.works');
});

window.onload = function() {
    scroll_effect();

    $(window).scroll(function() {
        scroll_effect();
    });

    function scroll_effect() {
        $('.effect-fade').each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight) {
                $(this).addClass('effect-scroll');
            }
        });
    }
};

$(window).on('scroll', function() {

    var scrollTop = $(window).scrollTop();
    var bgPosition = scrollTop / 2; //スクロール後のポジションを指定（値を大きくすると移動距離が小さくなる）

    if (bgPosition) {
        $('#app').css('background-position', 'center top -' + bgPosition + 'px');
    }
});