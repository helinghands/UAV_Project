$(function(){
    $("ul#menu li").click(function(){
        $(this).addClass("selected").siblings().removeClass("selected");
    });
});