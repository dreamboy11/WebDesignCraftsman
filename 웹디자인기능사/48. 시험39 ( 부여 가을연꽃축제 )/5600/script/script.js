// 네비게이션
    $('.nav > ul > li').mouseover(function(){
      $(this).find('.submenu').stop().slideDown();
    });
    $('.nav > ul > li').mouseleave(function(){
      $(this).find('.submenu').stop().slideUp();
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
    
    // 레이어 팝업
    $('.layers').click(function(){
      $('.layer_bg, .layer').show();
    });
    $('.layer .close').click(function(){
      $('.layer_bg, .layer').hide();
    });