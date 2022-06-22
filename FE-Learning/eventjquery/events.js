// change & blur
$(".txt1").change(function(){
    console.log("change event")
});
$(".txt2").blur(function(){
    console.log("blur event")
});
$(".txt20").focus(function(){
    console.log("focus event")
});
// key event
$(".txt3").keypress(function(){
    console.log("keypress")
});
$(".txt4").keyup(function(){
    console.log("keyup")
});
$(".txt5").keydown(function(){
    console.log("keydown")
});
// mouse event
// enter p
$(".enter p").mouseenter(function(){
    $(this).css({"border": "3px solid green"});
    console.log("mouseenter p")
})
$(".enter p").mouseleave(function(){
    $(this).css({"border": "3px solid yellow"});
    console.log("mouseleave p")
})
// over p
$(".over p").mouseover(function(){
    $(this).css({"border": "3px solid green"});
    console.log("mouseover p")
})
$(".over p").mouseout(function(){
    $(this).css({"border": "3px solid yellow"});
    console.log("mouseout p")
})
// enter div
$(".enter").mouseenter(function(){
    $(".enter").css({"background-color": "blue","color":"white"})
    console.log("mouseenter div add color blue")
})
$(".enter").mouseleave(function(){
    $(".enter").css({"background-color": "red","color":"white"})
    console.log("mouseleave div remove color blue")
})
// over div
$(".over").mouseover(function(){
    $(".over").css({"background-color": "blue","color":"white"})
    console.log("mouseover div add color blue")
})
$(".over").mouseout(function(){
    $(".over").css({"background-color": "red","color":"white"})
    console.log("mouseout div remove color blue")
})
// on
// single fun
$(".onevent").on("click",function(){
    $(".onevent ").css({"color":"white","background-color":"orange","border":"3px solid red"})
})
// multiple fun
$(".onevent01 ").on({
    click:function(){
        $(".onevent01").css({"color":"white","background-color":"blue","border":"3px solid black"})
    },
    mouseenter:function(){
        $(".onevent01").css({"color":"black","background-color":"yellow"})
    },
    mouseleave:function(){
        $(".onevent01").css({"color":"white","background-color":"green"})
    }
})
