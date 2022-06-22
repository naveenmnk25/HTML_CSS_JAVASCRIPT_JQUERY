//  get
 $(".btn1").click(function(){
    alert($(".h1").text());
 }); 
    $(".btn2").click(function(){
    alert($(".h1").html());
});
    $(".btn3").click(function(){
    alert($("#work").val());
});
    $(".btn4").click(function(){
    alert($(".linkattr").attr("href"));
});
// set
$(".btn5").click(function(){
    $(".h1").text("Dhanush");
 }); 
    $(".btn6").click(function(){
    $(".h1").html("<h3>NAZRIYA</h3>");
});
    $(".btn7").click(function(){
    $("#work").val(".net developer");
});
    $(".btn8").click(function(){
    $(".linkattr").text("Facebook");
    $(".linkattr").attr("href","www.facebook.com");
    alert($(".linkattr").attr("href"));
});
// add
$(".button1").click(function(){
    $(".place").append(" 625503");
 });
$(".button2").click(function(){
    $(".place").prepend(" Vadipatti ");
 });
$(".button3").click(function(){
    $(".place").after("<h2>t kolinchipatti</h2>");
 });
$(".button4").click(function(){
    $(".place").before(" <h2>thethur (po) </h2>");
 });
//  remove
$(".btnrmve1").click(function(){
    $(".css001").remove();
 });
$(".btnrmve2").click(function(){
    $(".css002").empty();
 });
//  css classes
$(".btncss1").click(function(){
    $("#cssc01").addClass("cssclasses01");
 });
$(".btncss2").click(function(){
    $("#cssc01").removeClass("cssclasses01");
 });
$(".btncss3").click(function(){
    $("#cssc01").toggleClass("cssclasses01");
 });
$(".btncss4").click(function(){
    $(".h1").css({"background-color": "yellow","color":"red"});
 });
//  animaton
$(".btnAni1").click(function(){
    $("#cssc01").animate("cssclasses01");
 });
$(".btnAni2").click(function(){
    $("#cssc01").animate("cssclasses01");
 });
$(".btnAni3").click(function(){
    $("#cssc01").animate("cssclasses01");
 });
$(".btnAni4").click(function(){
    $(".h1").animate({"background-color": "yellow","color":"red"});
 });
 