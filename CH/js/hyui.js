$(function() {
    /*--------------*/
    ///// wow //////
    /*--------------*/
    wow = new WOW(
      {
        boxClass:     'wow',      // 要套用WOW.js縮需要的動畫class(預設是wow)
        animateClass: 'animated', // 要"動起來"的動畫，預設是animated,
                                  // 因此如果你有其他動畫library要使用也可以在這裡調整
        offset:       0,          // 距離顯示多遠開始顯示動畫 (預設是0, 因此捲動到顯示時才出現動畫)
        mobile:       true,       // 手機上是否要套用動畫 (預設是true)
        live:         true,       // 非同步產生的內容是否也要套用(預設是true, 非常適合搭配SPA)
        callback:     function(box) {
          // 當每個要開始時, 呼叫這裡面的內容, 
          // 參數是要開始進行動畫特效的element DOM
        },
        scrollContainer: null     // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
      }
    )
    wow.init();

    /*-----------------------------------*/
    ///////////////// 變數 ////////////////
    /*-----------------------------------*/
    var _window = $(window),
        ww = _window.width(),
        wh = _window.height(),
        _body = $('body'),
        wwNormal = 1400,
        wwMedium = 992,
        wwSmall = 768,
        wwxs = 576;
    /*-----------------------------------*/
    //////////// nojs 先移除////////////////
    /*-----------------------------------*/

    /*-----------------------------------*/
    //////////// nav如果有兩個選單///////////
    /*-----------------------------------*/
    // var _navLength = $('.navigation ul').length;
    // $(window).load(function() {
    //     if (_navLength > 1) {
    //         $('.navigation ul:nth-child(1)').addClass('left_nav');
    //     }
    // });
    /*-----------------------------------*/
    /////// header選單 tab及 fix設定////////
    /*-----------------------------------*/
    // var _menu = $('.header .menu');
    // _menu.find('li').has('ul').addClass('hasChild');
    // var liHasChild = _menu.find('li.hasChild');
    // var subMenuWidth = liHasChild.first().children('ul').outerWidth();

    /*-----------------------------------*/
    /////// header選單 tab及 fix設定////////
    /*-----------------------------------*/
    // $('.scrollmenu').css("width",'680px');
    var $scrollmenu = $(".Main_menu"),
        _top = $scrollmenu.offset().top;
    var $win = _window .scroll(function(){
        // 假如捲軸捲的長度大於 menu 距離 top 的長度
        // menu 就加入 fixed , top 0
        if($win.scrollTop() >= _top){
            $scrollmenu.addClass('fixed');
        }else{
            $scrollmenu.removeClass('fixed');
        }
    });
    /*-------------------------*/
    ///// 手機版 頁面設定開關 //////
    /*-------------------------*/
    $('.Multi_Conrtrol>.Helps>button').click(function(e){
        $(this).next('.navigation').slideToggle(600,'easeInQuart');
        e.preventDefault();
    });

    $('.search > button').click(function(e){
        $(this).next('.inner_wrap').fadeToggle(600,'easeOutExpo');
        e.preventDefault();
    });
    /*----------------*/
    ///// 字級切換 //////
    /*----------------*/
    $(".FontSmall").click(function(e){
        $(".main").css({fontSize:"100%"});
        e.preventDefault();
    });
    $(".FontMidium").click(function(e){
        $(".main").css({fontSize:"110%"});
        e.preventDefault();
    });
    $(".FontLarge").click(function(e){
        $(".main").css({fontSize:"120%"});
        e.preventDefault();
    });

    $('.Word-level a.FontSmall').addClass('Active');
    $('.Word-level a').click(function(){
        $(this).siblings().removeClass('Active');
        $(this).addClass('Active');
    });
    /*---------------------*/
    ///// slid 選單切換 //////
    /*---------------------*/
    $(".Side li a.Links").click(function(e){
        // alert('有');
        $(this).next('ul').fadeToggle(600,'easeOutExpo');
        e.preventDefault();
    });
    /*-----------------------------*/
    ///// Identity 分眾的people //////
    /*-----------------------------*/
    // $(".Identity .People h3:first-child").addClass('Hover');
    // $(".Identity .People h3").hover(function(){
    //     $(this).siblings().removeClass('Hover');
    //     $(this).addClass('Hover');
    // },function(){
    //     $(this).addClass('Hover');
    // });
    /*----------------------------------------*/
    ///// Identity 分眾的people 0423 宏璋修改//////
    /*----------------------------------------*/
    $(".Identity .People h3:first-child").addClass('Hover');
    $(".Identity .People h3").hover(function(){
        $(this).siblings().removeClass('Hover');
        $(this).addClass('Hover');
        //顯示第幾個 Link 區塊
        var People_index = $(".Identity .People h3").index(this);
        $(".wrap .Links").hide();
        $(".wrap .Links").eq(People_index).show();
    },function(){
        $(this).addClass('Hover');
    });

    /*----------------------------------*/
    ///// mega menu 開關 0423 宏璋修改//////
    /*----------------------------------*/
    // $('.Main_menu .scrollmenu a').click(function(e){
    //     $('.Mega_menu section').slideToggle(600);
    // });
    $('.Main_menu .scrollmenu a').click(function(e){
        var menu_index = $(".Main_menu .scrollmenu a").index(this);
        if($('.Mega_menu section').eq(menu_index).is(':hidden')){
            $('.Mega_menu section').hide().removeClass('Show');
        };
		if($('.Mega_menu section').eq(menu_index).html() != '' ){
			$('.Mega_menu section').eq(menu_index).addClass('Show').slideToggle(600);
		};
    });

    /*-----------------------------------*/
    ////////////單元搜尋 tag 開關////////////
    /*-----------------------------------*/
    $('.Unit_search .Switch').click(function(e){
        $(this).prev().slideToggle(600);
        // alert('123');
    });
    /*-----------------------------------------*/
    //////////// CP頁 手機版 內容開合開關////////////
    /*-----------------------------------------*/
    // $('.cp+.Switch').click(function(e){
    //     $(this).prev().slideToggle(600);
    //     // alert('123');
    // });

    /*-----------------------------------*/
    ///////// 條列頁 GRID/LIST 切換 /////////
    /*-----------------------------------*/
    $('#btnContainer button.grid').addClass('active');

    $("#btnContainer button.list").click(function(e){
        // alert('123');
        $('#btnContainer button').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.GRID').addClass('LIST');
    });
    $("#btnContainer button.grid").click(function(e){
        $('#btnContainer button').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.GRID').removeClass('LIST');
    });

    /*-----------------------------------*/
    //////////// 條列頁 常見問題 ////////////
    /*-----------------------------------*/
    //預設第一個打開
    $('.QandA div:first-child').find('li:first-child .Ans').show().addClass('Show');

    //第一層選單被click時
    $('.QandA .Qus').click(function(){
        //所有的.Ans刪掉.Show
        $('.QandA .Qus').next('.Ans').hide().removeClass('Show');
        //它底下的.Ans 打開 + .Show
        $(this).next('.Ans').slideDown(300).addClass('Show');
        return false;
    })

    /*-----------------------------------*/
    ///////// 上下篇 最近文章 欄高等高 ////////
    /*-----------------------------------*/
    $(window).on("load resize", function(e) {
        var WindowWidth = $(window).width();
        var myDIV = $(".Coulmn>.Recent a");
        if (WindowWidth >= 992) {
          $(".Coulmn").each(function() {
            var highestBox = 0;
            $(myDIV, this).each(function() {
              if ($(this).height() > highestBox) {
                highestBox = $(this).height();
              }
            });
            $(myDIV, this).height(highestBox);
          });
        }
    });

    /*-----------------------------------*/
    ////////////// 行動版選單切換////////////
    /*-----------------------------------*/

    //設定resize 計時器
    // var resizeTimer;
    // _window.on("load resize", function(event) {
    //     clearTimeout(resizeTimer);
    //     resizeTimer = setTimeout(function() {
    //         // switch PC/MOBILE 
    //         ww = _window.width();
    //         if (ww < wwSmall) {
    //             /*-----------------------------------*/
    //             /////////////// 手機版設定 /////////////
    //             /*-----------------------------------*/
    //             menu_status = false;
    //             _sidebar.show();
    //             _overlay.hide();
    //             _nav.prependTo(_sidebar);
    //             _menu.prependTo(_sidebar);
    //             _search.prependTo(_body);
    //             _search.addClass('m_search');
    //             _sidebar.css({ 'margin-left': _sidebar.width() * -1 + 'px' });
    //             $('.header').addClass('fixed');
    //             liHasChild.on({
    //                 mouseenter: function() {
    //                     $(this).children('ul').stop(true, true).slideDown();
    //                 },
    //                 mouseleave: function() {
    //                     $(this).parent().siblings('ul').hide();
    //                     $(this).children('ul').stop(true, true).slideUp();
    //                 }
    //             });
    //              // 副選單點出
    //             liHasChild.off().on('mouseenter,mouseleave');
    //             liHasChild.on('touchstart', function() {
    //                 $(this).off('mouseenter,mouseleave');
    //             });

    //             liHasChild.off().on('click', function(e) {
    //                 e.preventDefault();
    //                 $(this).siblings('li').find('ul').hide();
    //                 $(this).children('ul').stop(true, true).fadeToggle();
    //                 // $(this).prop('disabled', true);
    //             });
    //             // 行動版查詢
    //             var _searchCtrl = $('.searchCtrl');
    //             $('.m_search').hide();
    //             _searchCtrl.off().click(function() {
    //                 $('.m_search').stop(true, true).slideToggle();
    //             });
    //             // 如果點在外面
    //             $(document).on('touchend', function(e) {
    //                 var target = e.target;
    //                 if (!$(target).is('.m_search',_searchCtrl)) {
    //                     $('.m_search').stop(true, true).slideUp();
    //                     console.log("search_check");
    //                 }
    //             });
    //         } else {
    //             /*-----------------------------------*/
    //             /////////////// PC版設定 /////////////
    //             /*-----------------------------------*/
    //             hideSidebar();
    //             $('body').removeClass('noscroll');
    //             _nav.prependTo('.header .container');
    //             _search.appendTo('.header .container');
    //             _menu.appendTo('.header .container');
    //             _search.removeClass('m_search');
    //             _search.show();
    //             // 副選單滑出
    //             liHasChild.on({
    //                 mouseenter: function() {
    //                     $(this).children('ul').stop(true, false).fadeIn();
    //                 },
    //                 mouseleave: function() {
    //                     $(this).parent().siblings('ul').hide();
    //                     $(this).children('ul').stop(true, false).fadeOut();
    //                 }
    //             });
    //             // 如果點在外面
    //             $(document).on('touchend click', function(e) {
    //                 var target = e.target;
    //                 if (!$(target).is('.menu li a')) {
    //                     $('.menu').find('li ul').hide();
    //                     console.log("true");
    //                 }
    //             });


    //         }
    //     }, 50);
    // });
    // // 固定版頭
    // var hh = $('.header').outerHeight(true),
    //     menuH = _menu.outerHeight(),
    //     navH = $('.navbar').height();
    // $(window).on("load scroll resize", function(e) {
    //     ww = _window.width();
    //     if (ww >= wwSmall && $(this).scrollTop() > hh - menuH) {
    //         $('.header').addClass('fixed');
    //         $('.header').css('margin-top', menuH - hh);
    //         $('.main').css('margin-top', hh);
    //     } else {
    //         $('.header').removeClass('fixed');
    //         $('.header').css('margin-top', 0);
    //         $('.main').css('margin-top', 0);
    //     }
    // });

    /*-----------------------------------*/
    //////////// notice訊息區塊 ////////////
    /*-----------------------------------*/
    // $('[class*="notice"] a.close').click(function(e) {
    //     $(this).parent('[class*="notice"]').hide();
    // });
    /*-----------------------------------*/
    //////////// Accordion設定 ////////////
    /*-----------------------------------*/
    $('.accordion').each(function() {
        $(this).find('.accordion-content').hide();
        var _accordionItem = $(this).children('ul').children('li').children('a');
        _accordionItem.each(function() {
            $(this).click(function(e) {
                $(this).parent('li').siblings().children('.accordion-content').slideUp();
                $(this).next('.accordion-content').slideToggle();
                e.preventDefault();
            });
        });
    });
    /*-----------------------------------*/
    /////////////fatfooter開關/////////////
    /*-----------------------------------*/
    $('.btn-fatfooter').click(function(e) {

        $(this).parent('.container').find('nav>ul>li>ul').stop(true, true).slideToggle(function() {
            if ($(this).is(':visible')) {
                $('.btn-fatfooter').html("收合");
                $('.btn-fatfooter').attr('name', '收合選單');
            } else {
                $('.btn-fatfooter').html("展開");
                $('.btn-fatfooter').attr('name', '展開選單');
            }
        });
        $(this).stop(true, true).toggleClass('close');
    });
    /*-----------------------------------*/
    ////////img objectfix cover////////////
    /*-----------------------------------*/
    $(window).on('resize load', function(e) {
        $('.imgOuter').each(function(index, el) {
            var _imgContainer = $(this),
                cWidth = _imgContainer.width(),
                cHeight = _imgContainer.height(),
                ratioC = cWidth / cHeight,
                _img = _imgContainer.find('img');

            var iWidth = $(this).find('img').width(),
                iHeight = $(this).find('img').height(),
                ratioImg = iWidth / iHeight,
                scaleRatio;
            if (ratioC > ratioImg) {
                scaleRatio = cWidth / iWidth;
                //_img.width(cWidth).height(iHeight * scaleRatio).css('top', -.5 * (iHeight * scaleRatio - cHeight));
            } else {
                scaleRatio = cHeight / iHeight;
                //_img.height(cHeight).width(iWidth * scaleRatio).css('left', -.5 * (iWidth * scaleRatio - cWidth));
            }
            $(this).find('img').removeClass('img-responsive');
        });
    });

    /*-----------------------------------*/
    //////////////相簿縮圖+燈箱//////////////
    /*-----------------------------------*/
    //縮圖，same as thumbnail模組
    $(window).on('resize load', function(e) {
        $('.imgOuter').each(function(index, el) {
            var _imgContainer = $(this),
                cWidth = _imgContainer.width(),
                cHeight = _imgContainer.height(),
                ratioC = cWidth / cHeight,
                _img = _imgContainer.find('img');

            var iWidth = $(this).find('img').width(),
                iHeight = $(this).find('img').height(),
                ratioImg = iWidth / iHeight,
                scaleRatio;
            if (ratioC > ratioImg) {
                scaleRatio = cWidth / iWidth;
                //_img.width(cWidth).height(iHeight * scaleRatio).css('top', -.5 * (iHeight * scaleRatio - cHeight));
            } else {
                scaleRatio = cHeight / iHeight;
                //_img.height(cHeight).width(iWidth * scaleRatio).css('left', -.5 * (iWidth * scaleRatio - cWidth));
            }
            $(this).find('img').removeClass('img-responsive');
        });
    });
    //相簿JQ設定
    $('.gallery').append('<div class="lightbox"><a href="#" class="light_close">關閉</a><a href="#" class="light_prev">上一張</a><a href="#" class="light_next">下一張</a><img src="" alt=""><div class="galler_overlay"></div></div>')
    $('.gallery .lightbox').hide(); // lightbox先隱藏
    $('.light_close').click(function(event) {
        $('.gallery .lightbox').hide(); // 如果點到close，lightbox隱藏
        $('body').removeClass('noscroll');
        $('.gallery .lightbox .caption').html('');
    });
    $('.gallery .lightbox .galler_overlay').click(function(event) {
        $('.gallery .lightbox').hide(); // 如果點到overlay，lightbox隱藏
        $('body').removeClass('noscroll');
        $('.gallery .lightbox .caption').html('');
    });
    var PIC_SRC = $('.gallery .lightbox img').attr('src');
    // var THUMB_PIC = $(this).attr('src');
    var PIC_INDEX = 0;
    $('.gallery a').click(function(e) {
        e.preventDefault();
    });
    $('.gallery .thumbnail img').each(function(index) {
        $(this).click(function(e) {
            var THUMB_H3 = $(this).attr('alt');
            $('body').addClass('noscroll');
            $('.gallery .lightbox').append('<div class="caption">' + THUMB_H3 + '<div>');
            THUMB_PIC = $(this).attr('src');
            $('.gallery .lightbox img').attr('src', THUMB_PIC);
            $('.gallery .lightbox').fadeIn();
            $('.gallery .lightbox .galler_overlay').fadeIn();
            PIC_INDEX = index;
            e.preventDefault();
        });
    });
    //計算當頁縮圖數量
    var PIC_NUM = $('.gallery .thumbnail').length;
    // 下一張 function
    function NEXT_MOV() {
        //pic_index+1 如果小於 圖片數量
        if ((PIC_INDEX + 1) < PIC_NUM) {
            //PIC_INDEX = (PIC_INDEX + 1) % PIC_NUM;//取餘數
            PIC_INDEX++; //pic_index ++
            //if(PIC_INDEX >= PIC_NUM){PIC_INDEX=0;}
        } else {
            PIC_INDEX = 0 //如果等於或大於圖片數量 pic_index =0 ，跳到第一張
        }
        THUMB_PIC = $('.gallery .thumbnail img').eq(PIC_INDEX).attr('src');
        THUMB_H3 = $('.gallery .thumbnail img').eq(PIC_INDEX).attr('alt');
        $('.gallery .lightbox .caption').html(THUMB_H3);
        $('.gallery .lightbox img').hide();
        $('.gallery .lightbox img').fadeIn();
        $('.gallery .lightbox img').attr('src', THUMB_PIC);
        //放入燈箱 img src
        e.preventDefault();
    }
    $('.gallery .light_next').click(function(e) {
        NEXT_MOV();
        e.preventDefault();
    });
    // 上一張 function
    function PREV_MOV() {
        if ((PIC_INDEX + 1) > 1) { //pic_index+1  如果大於 1
            //PIC_INDEX = (PIC_INDEX + 1) % PIC_NUM;//取餘數
            PIC_INDEX--; //pic_index --
            //if(PIC_INDEX >= PIC_NUM){PIC_INDEX=0;}
        } else {
            PIC_INDEX = PIC_NUM - 1; //如果等於或小於圖片數量 pic_index =圖片數量-1 ，跳到最後一張
        }
        //取縮圖 img src
        THUMB_PIC = $('.gallery .thumbnail img').eq(PIC_INDEX).attr('src');
        THUMB_H3 = $('.gallery .thumbnail img').eq(PIC_INDEX).attr('alt');
        $('.gallery .lightbox .caption').html(THUMB_H3);
        $('.gallery .lightbox img').hide();
        $('.gallery .lightbox img').fadeIn();
        $('.gallery .lightbox img').attr('src', THUMB_PIC);
        //放入燈箱 img src
    }
    $('.gallery .light_prev').click(function(e) {
        PREV_MOV();
        e.preventDefault();
    });
    // 左右按鍵移動
    $('body').keydown(function(e) {
        if (e.keyCode == 37) {
            PREV_MOV();
        } else if (e.keyCode == 39) {
            NEXT_MOV();
        } else if (e.keyCode == 27) {
            $('.gallery .lightbox').hide();
        }
    });
    /*-----------------------------------*/
    ////////////////多組Tab////////////////
    /*-----------------------------------*/
    $('.tabs').find('.active').next('.tabContent').show();
    var tw = $('.tabSet').width();
    var tabItemHeight = $('.tabs>h2>a').innerHeight();
    $('.tabs').find('.tabContent').css('top', tabItemHeight);

    function tabs() {
        var WindowW = $(window).width();
        $('.tabs').find('.active').next('.tabContent').show();
        var tabItemHeight = $('.tabs>h2>a').innerHeight();
        $('.tabs').find('.tabContent').css('top', tabItemHeight);
        $('.tabSet').each(function() {
            tw = $(this).width();
            var tabContentHeight = $(this).find('.active').next('.tabContent').innerHeight();
            var tabItemLength = $(this).find('h2').length;
            $(this).height(tabContentHeight + tabItemHeight);
            var tabWidth = Math.ceil(tw / tabItemLength);
            $(this).find('h2>a').width(tabWidth);
            if (WindowW >= 768) {
                $(this).find('h2:last').css({
                    position: 'absolute',
                    right: '0',
                });
            } else {
                $(this).find('h2:last').css({
                    position: 'relative',
                    right: '0',
                });
            }
        });
        $(this).parent('h2').siblings().removeClass('active');
        $(this).parent('h2').addClass('active');
        tabContentHeight = $(this).parent('h2').next('.tabContent').innerHeight();
        $(this).parents('.tabSet').height(tabContentHeight + tabItemHeight);
        return false;
    }
    $('.tabs>h2>a').focus(tabs);
    $('.tabs>h2>a').click(tabs);
    $(window).on("load resize", function(e) {
        tabs();
    });
    /*-----------------------------------*/
    ///////////////置頂go to top////////////
    /*-----------------------------------*/
    $(window).bind('scroll', function() {
        if ($(this).scrollTop() > 200) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });
    /*-----------------------------------*/
    /////Click event to scroll to top//////
    /*-----------------------------------*/
    $('.scrollToTop').click(function(e) {
        $('html, body').animate({ scrollTop: 0 }, 400, 'easeOutQuint');
        e.preventDefault();
    });

	/*-----------------------------------*/
    ////////// Side icon control //////////
    /*-----------------------------------*/
	$(window).on("load resize", function(e) {
		var WindowW = $(window).width();
		if (WindowW >= 768) {
			$('li .Line').hide();
			$('li .Mail').hide();
			$('li .Print').show();
			if($(location).attr('href').indexOf("cp-") > 0){
				$('li .Mail').show();
			}
		} else {
			$('li .Line').show();
			$('li .Mail').hide();
			$('li .Print').hide();
		}
    });
	
	/*-----------------------------------*/
    ///////////// 上下跑馬燈 //////////////
    /*-----------------------------------*/
	// 先取得 .Marquee ul
	// 接著把 ul 中的 li 項目再重覆加入 ul 中(等於有兩組內容)
	// 再來取得 div#abgne_marquee 的高來決定每次跑馬燈移動的距離
	// 設定跑馬燈移動的速度及輪播的速度
	var $marqueeUl = $('.Marquee ul'),
		$marqueeli = $marqueeUl.append($marqueeUl.html()).children(),
		_height = $('.Marquee').height() * -1,
		scrollSpeed = 600,
		timer,
		speed = 3000 + scrollSpeed;
 
	// 幫左邊 $marqueeli 加上 hover 事件
	// 當滑鼠移入時停止計時器；反之則啟動
	if($marqueeUl.length > 0){
		$marqueeli.hover(function(){
			clearTimeout(timer);
		}, function(){
			timer = setTimeout(showad, speed);
		});
		
		// 啟動計時器
		timer = setTimeout(showad, speed);
	 
		$('a').focus(function(){
			this.blur();
		});
		
		// 視窗捲動時，重啟計時器，避免跑版
		$( window ).scroll(function() {
			clearTimeout(timer);
			timer = setTimeout(showad, speed);
		});
	}
	
	// 控制跑馬燈移動的處理函式
	function showad(){
		var _now = $marqueeUl.position().top / _height;
		_now = (_now + 1) % $marqueeli.length;
 
		// $marqueeUl 移動
		$marqueeUl.animate({
			top: _now * _height
		}, scrollSpeed, function(){
			// 如果已經移動到第二組時...則馬上把 top 設 0 來回到第一組
			// 藉此產生不間斷的輪播
			if(_now == $marqueeli.length / 2){
				$marqueeUl.css('top', 0);
			}
		});
 
		// 再啟動計時器
		timer = setTimeout(showad, speed);
	}

});
