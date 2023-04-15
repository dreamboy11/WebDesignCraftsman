 // 네비게이션
    $('.nav > ul > li').mouseover(function(){
      $('.nav > ul > li > .submenu').stop().slideDown();
    });
    $('.nav > ul > li').mouseleave(function(){
      $('.nav > ul > li > .submenu').stop().slideUp();
    });
    
    // 이미지 슬라이드
    var currentIndex = 0;
    
    setInterval(function(){
      if(currentIndex < 2){
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      var slidePosition = currentIndex * (-1200)+"px";
      $('.slideList').animate({left:slidePosition},400);
    },3000);
    
    // 탭메뉴
    var tabMenu = $(".notice");
    
    tabMenu.find(".active").hide();
    tabMenu.find(".active").show();
    
    function tabList(e){
      e.preventDefault();
      
      var target = $(this);
      
      target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
    };
    
    tabMenu.find(".active").click(tabList).focus(tabList);
    
    // 레이어 팝업
    $('.layers').click(function(){
      $('.layer').show();
    });
    $('.layer .close').click(function(){
      $('.layer').hide();
    });