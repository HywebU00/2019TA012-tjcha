$(function(){
    // 單張輪播 活動
    $('.Singleplay_act').slick({
        arrows: false,
        slidesToShow: 1,         //一次顯示幾張
        slidesToScroll: 1,       //一次卷幾張
        dots: true,              //顯示圓點
        dotsClass: 'slick-dots', //圓點樣式
        // 自訂左右箭頭
        // next arrow
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        // next arrow
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        infinite: true,          //無限輪播
        autoplay: true,         //自動輪播
        autoplaySpeed: 3000      //輪播速度
    });

    // 單張輪播 最新出版品
    $('.Singleplay_public').slick({
        arrows: true,
        slidesToShow: 1,         //一次顯示幾張
        slidesToScroll: 1,       //一次卷幾張
        dots: true,              //顯示圓點
        dotsClass: 'slick-dots', //圓點樣式
        // 自訂左右箭頭
        // next arrow
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        // next arrow
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        infinite: true,          //無限輪播
        autoplay: false,          //自動輪播
        autoplaySpeed: 3000      //輪播速度
    });

    // Banner輪播
    $('.Banner_slider').slick({
        arrows: true,
        slidesToShow: 5,         //一次顯示幾張
        slidesToScroll:5,       //一次卷幾張
        dots: false,              //顯示圓點
        dotsClass: 'slick-dots', //圓點樣式
        // 自訂左右箭頭
        // next arrow
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        // next arrow
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        infinite: true,          //無限輪播
        autoplay: false,          //自動輪播
        autoplaySpeed: 3000,      //輪播速度
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll:4
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }, {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }]
    });

    // 自營業務
    $('.Responsive_slider').slick({
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll:1
            }
        }]
    });

    // 單張輪播 多圖slider
    $('.Singleplay').slick({
        arrows: true,
        slidesToShow: 1,         //一次顯示幾張
        slidesToScroll: 1,       //一次卷幾張
        dots: true,              //顯示圓點
        dotsClass: 'slick-dots', //圓點樣式
        // 自訂左右箭頭
        // next arrow
        prevArrow: '<button type="button" data-role="none" class="slick-prev">Previous</button>',
        // next arrow
        nextArrow: '<button type="button" data-role="none" class="slick-next">Next</button>',
        infinite: true,          //無限輪播
        autoplay: true,         //自動輪播
        autoplaySpeed: 3000      //輪播速度
    });


    // 多圖預視slider
    $('.Slider-for').on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);//把目前第幾張放進html裡
    });

    $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.Slider-nav',
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true
    });
    $('.Slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        infinite: true,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });

});