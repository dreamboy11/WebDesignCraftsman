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
    
    // 레이어 팝업
    $('.layers').click(function(){
      $('.layer_bg, .layer').show();
    });
     $('.layer .close').click(function(){
      $('.layer_bg, .layer').hide();
    });