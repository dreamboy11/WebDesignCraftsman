//navgation (down)

//$(".nav > ul > li").hover(function(){
// //  mouseover
// $(this).find(".submenu").stop().slideDown();
//}, function(){
//  // mouseleave
//  $(this).find(".submenu").stop().slideUp();
//});

//navgation (sideways)
$(".nav > ul > li").hover(function(){
 //  mouseover
 $(this).find(".submenu").stop().slideDown();
}, function(){
  // mouseleave
  $(this).find(".submenu").stop().slideUp();
});

//slideList > slideImg (1) eq(0)
//slideList > slideImg (2) eq(1)
//slideList > slideImg (3) eq(2)

//image slide (fade)
$(".slideList").children("div:gt(0)").hide();

var currentIndex = 0;
//var currentIndex = 1;
//var currentIndex = 2;

setInterval(function(){
  var next = (currentIndex + 1) % 3;
//            0 + 1 / 3 = 1
//            1 + 1 / 3 = 2
//            2 + 1 / 3 = 0
//            0 + 1 / 3 = 1
  $(".slideList").find("div").eq(currentIndex).fadeOut();
  $(".slideList").find("div").eq(next).fadeIn();
  
  console.log("currentIndex=" + currentIndex);
  console.log("next=" + next);
  //  currentIndex  =  0
  //  next = 1
  currentIndex = next;
},3000);

