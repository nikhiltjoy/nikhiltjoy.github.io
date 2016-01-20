$(function() {
    var cRatio = {
        height: 0,
        width: 0
    };
    var lRatio;
    var cArray = ["rgb(0,0,0)", "rgb(255,255,255)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(255,255,255)"];
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            $('#timeline').height($(window).height() - $('#navBar').height());
            if ($(window).width() >= 768 && $(".navbar").offset().top < 50) {
                var index = $('#myCarousel').find('.active').index();
                $(".textColor").css('color', cArray[index]);
            } else {
                $(".textColor").css({
                    color: "#fff"
                });
            }
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $('#timeline').height($(window).height());
            if ($(window).width() >= 768 && $(".navbar").offset().top < 50) {
                var index = $('#myCarousel').find('.active').index();
                $(".textColor").css('color', cArray[index]);
            } else {
                $(".textColor").css({
                    color: "#fff"
                });
            }
        }
    });
    $(window).load(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
        var iHeight = $(window).height() * 0.55 - $('#button').height();
        var iWidth = $(window).width() * 0.7;
        var dim = Math.min(iHeight, iWidth);
        var offset = parseFloat($('.hover').css('margin-bottom'));
        offset = (offset === 0) ? ($('#caption').height() + $('#button').height() * 1.25) : (offset - $('#button').height() / 2);
        $('#introContainer').height(dim).width(dim);
        $('#button').css('bottom', offset);
        $('#timeline').height($(window).height() - $('#navBar').height());
        $('#logo').height($('#introContainer').height() * 0.76).width($('#introContainer').height() * 0.76);
        $('#logoContainer').height($('#introContainer').height() * 0.76).width($('#introContainer').height() * 0.76);
        $('#introContainer').css('left', $(window).width() * 585 / 1280);
        $('#button').css('left', $(window).width() / 2);
        if ($(window).width() >= 768 && $(".navbar").offset().top < 50) {
            var index = $('#myCarousel').find('.active').index();
            $(".textColor").css('color', cArray[index]);
        } else {
            $(".textColor").css({
                color: "#fff"
            });
        }
    });
    $(window).resize(function() {
        var iHeight = $(window).height() * 0.55 - $('#button').height();
        var iWidth = $(window).width() * 0.7;
        var dim = Math.min(iHeight, iWidth);
        var offset = parseFloat($('.hover').css('margin-bottom'));
        offset = (offset === 0) ? ($('#caption').height() + $('#button').height() * 1.25) : (offset - $('#button').height() / 2);
        $('#introContainer').height(dim).width(dim);
        $('#timeline').height($(window).height());
        $('#button').css('bottom', offset);
        $('#logo').height($('#introContainer').height() * 0.76).width($('#introContainer').height() * 0.76);
        $('#logoContainer').height($('#introContainer').height() * 0.76).width($('#introContainer').height() * 0.76);
        $('#introContainer').css('left', $(window).width() * 585 / 1280);
        $('#button').css('left', $(window).width() / 2);
        if ($(window).width() >= 768 && $(".navbar").offset().top < 50) {
            var index = $('#myCarousel').find('.active').index();
            $(".textColor").css('color', cArray[index]);
        } else {
            $(".textColor").css({
                color: "#fff"
            });
        }
    });
});
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
$('#myCarousel').carousel({
    interval: 3500,
    cycle: true
});
$('#myCarousel').on('slide.bs.carousel', function(e) {
    var index = $(this).find('.active').index();
    var slideTo = $(e.relatedTarget).index();
    if ($(window).width() >= 768 && $(".navbar").offset().top < 50) {
        var whiteText = [1, 4];
        if (whiteText.indexOf(slideTo) > -1) {
            $(".textColor").animate({
                color: "#fff"
            }, 600);
        } else {
            $(".textColor").animate({
                color: "#000"
            }, 600);
        }
    } else {
        $(".textColor").css({
            color: "#fff"
        });
    }
    var blackBox = [1, 3];
    if (blackBox.indexOf(slideTo) > -1) {
        $(".intro-body-text").animate({
            backgroundColor: "rgba(0, 0, 0, 0.4)"
        }, 600);
    } else {
        $(".intro-body-text").animate({
            backgroundColor: "rgba(255, 255, 255, 0.4)"
        }, 600);
    }
});
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});