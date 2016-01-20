$(function() {
    var cRatio = {
        height: 0,
        width: 0
    };
    var lRatio;
    var cArray = ["rgb(0,0,0)", "rgb(255,255,255)", "rgb(0,0,0)", "rgb(0,0,0)", "rgb(255,255,255)"]
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
            $('#timeline').height($(window).height() - $('#navBar').height());
            $(".textNav").css("color", cArray[0]);
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
            $('#timeline').height($(window).height());
            var index = $('#myCarousel').find('.active').index();
            $(".textNav").css("color", cArray[index]);
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
        if ($(window).width() >= 768 && $(".navbar").offset().top < 50) {
            var index = $('#myCarousel').find('.active').index();
            $(".textColor").css('color', cArray[index]);
        }
        $('#introContainer').height(dim).width(dim);
        $('#button').css('bottom', offset);
        $('#timeline').height($(window).height() - $('#navBar').height());
        $('#logo').height($('#introContainer').height() * 0.76).width($('#introContainer').height() * 0.76);
        $('#logoContainer').height($('#introContainer').height() * 0.76).width($('#introContainer').height() * 0.76);
        $('#introContainer').css('left', $(window).width() * 585 / 1280);
        $('#button').css('left', $(window).width() / 2);
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
    interval: 5000,
    cycle: true
});
$('#myCarousel').on('slide.bs.carousel', function(e) {
    var index = $(this).find('.active').index();
    var slideTo = $(e.relatedTarget).index();
    if ($(window).width() >= 768 && $(".navbar").offset().top < 50) {
        var whiteHead = [1, 4];
        var blackBox = [1, 3];
        if (whiteHead.indexOf(slideTo) > -1) {
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
google.maps.event.addDomListener(window, 'load', init);

function init() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(40.6700, -73.9400),
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}