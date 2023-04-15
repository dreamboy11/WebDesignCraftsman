// 네비게이션
    $('.nav > ul > li').mouseover(function(){
      $('.nav > ul > li > .submenu').stop().slideDown();
    });
    $('.nav > ul > li').mouseleave(function(){
      $('.nav > ul > li > .submenu').stop().slideUp();
    });
    
    // 이미지 슬라이드
    $('.slideList').children("div:gt(0)").hide();
    var currentIndex = 0;
    
    setInterval(function(){
      var next = (currentIndex + 1) % 3;
      $('.slideList').find("div").eq(currentIndex).fadeOut();
      $('.slideList').find("div").eq(next).fadeIn();
      currentIndex = next;
    },3000);
    
    // 탭 메뉴
    var tabMenu = $(".notice");
    
    tabMenu.find("ul > li > ul").hide();
    tabMenu.find("ul > li.active > ul").show();
    
    function tabList(e){
      e.preventDefault();
      
      var target = $(this);
      
      target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    };
    
    tabMenu.find("ul > li > a").click(tabList).focus(tabList);
    
    // 레이어 팝업
    $('#layers').click(function(){
      $('.layer_bg, .layer').show();
    });
    $('.layer .close').click(function(){
      $('.layer_bg, .layer').hide();
    });