//navgation
   $(".nav > ul > li").mouseenter(function(){
     $(this).find('.submenu').stop().slideDown();
   });
   $(".nav > ul > li").mouseleave(function(){
     $(this).find('.submenu').stop().slideUp();
   });
   
//image slide
var currentIndex = 0;
 setInterval(function(){
  if(currentIndex < 2){
    currentIndex++;
  } else {
     currentIndex = 0;
  }
  var slidePosition = currentIndex * (-300)+"px";
  $(".slideList").animate({top:slidePosition},400);
},3000);

//tab menu
var tabMenu = $(".notice");

tabMenu.find("ul > li > ul").hide();
tabMenu.find("ul > li.active > ul").show();

function tabList(e){
  e.preventDefault();
  var target = $(this);
  target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
};

tabMenu.find("ul > li > a").click(tabList).focus(tabList);

//popup
$(".ad").click(function(){
  $(".layer_bg").css("display","block");
});
$(".layer .close").click(function(){
  $(".layer_bg").css("display","none");
});