$(function() {
    var speed = 500;
    $('.top-button').on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, speed);
    });
    $('.top-button').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.top-button').fadeIn();
        } else {
            $('.top-button').fadeOut();
        }
    });
    $('a[href^="#"]').on('click', function() {
        var href = $(this).attr('href');
        var target = $(href == '#' || href == "" ? 'html' : href);
        var position = target.offset().top;
        var speed = 1000;

        $('html,body').animate({
            scrollTop: position + '200px'
        }, speed);
        return false;
    });
    var
        cursor = $(".cursor"),
        cWidth = 20, //カーソルの大きさ
        mouseX = 0, //マウスのX座標
        mouseY = 0; //マウスのY座標

    $(document).on('mousemove', function(e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        cursor.css({
            //カーソルの真ん中に座標軸が来るよう、
            //カーソルの大きさの半分を引きます
            left: mouseX - (cWidth / 2),
            top: mouseY - (cWidth / 2)
        })
    });
    $("a, button,.skill-click").on({
        "mouseenter": function() {
            cursor.addClass("is-active");
        },
        "mouseleave": function() {
            cursor.removeClass("is-active");
        }
    });
    luxy.init({
        wrapper: '#luxy',
        targets: '.luxy-el',
        wrapperSpeed: 0.2
    });

    $(window).scroll(function() {
        $('.fadeIn').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active')
            }
        });
    });
    $(window).scroll(function() {
        $('.fuwat').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 100) {
                $(this).addClass('active')
            }
        });
    });

    $('#box1').on('inview', function(event, isInView) {
        if (isInView) {
            //要素が見えたときに実行する処理
            $("#box1 .count-up").each(function() {
                $(this).prop('Counter', 0).animate({ //0からカウントアップ
                    Counter: $(this).text()
                }, {
                    // スピードやアニメーションの設定
                    duration: 1000, //数字が大きいほど変化のスピードが遅くなる。2000=2秒
                    easing: 'swing', //動きの種類。他にもlinearなど設定可能
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        }
    });
});