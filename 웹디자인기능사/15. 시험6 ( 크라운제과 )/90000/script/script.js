// 네비게이션
    $('.nav > ul > li').mouseover(function(){
      $(this).find('.submenu').stop().slideDown();
    });
    $('.nav > ul > li').mouseleave(function(){
      $(this).find('.submenu').stop().slideUp();
    });
    
    // 이미지 슬라이드
    var currentIndex = 0;
    
    setInterval(function(){
      if(currentIndex < 2){
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      var slidePosition = currentIndex * (-750)+"px";
      $('.slideList').animate({left:slidePosition},400);
    },3000);
    
    // 탭 메뉴
    var tabMenu = $(".notice");
    
    tabMenu.find("ul > li > a.active > ul").hide();
    tabMenu.find("ul > li > a.active > ul > li").show();
    
    function tabList(e){
      e.preventDefault();
      var target = $(this);
      
      target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    };
    
    tabMenu.find("ul > li > a").click(tabList).focus(tabList);
    
    // 레이어 팝업
    $('.layers').click(function(){
      $('.layer, .layer_bg').show();
    });
    $('.layer .close').click(function(){
      $('.layer, .layer_bg').hide();
    });