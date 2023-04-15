 //  navgation
  $(".nav > ul > li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(200);
  });
  $(".nav > ul > li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(200);
  });
  
  //image slide(up,down)
  //  currentIndex = 0; first image : 0
  //  currentIndex = 1; second image : -300
  //  currentIndex = 2; third image : -600
   
//  var currentIndex = 0; //first image
//   
//  setInterval(function(){
//    if(currentIndex < 2){
//      currentIndex++;
//    } else {
//      currentIndex = 0;
//    }
//    
//    var slidePosition = currentIndex * (-300)+"px";
//    $(".slideList").animate({top: slidePosition},400);
//  },3000);
   
   //   image slide(left,right)
   var currentIndex = 0;
   
   setInterval(function(){
     if(currentIndex < 2){
       currentIndex++;
     } else {
       currentIndex = 0;
     }
     
     var slidePosition = currentIndex * (-1000)+"px";
     $(".slideList").animate({left:slidePosition},400);
   },3000);

// tab menu
var tabBtn = $(".tab-btn > ul > li");
var tabCont = $(".tab-cont > div");

tabCont.hide().eq(0).show();

tabBtn.click(function(event){
  event.preventDefault();
  var target = $(this);
  var index = target.index();
//  alert(index);
  tabBtn.removeClass("active");
  target.addClass("active");
  tabCont.css("display","none");
  tabCont.eq(index).css("display","block");
});

//layer popup
$("#content1 .right").click(function(){
  $(".layer").slideDown(300);
  $(".layer_bg").show();
});
$(".layer .close").click(function(){
  $(".layer").slideUp(300);
  $(".layer_bg").hide();
});