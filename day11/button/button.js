$(document).ready(function(){
    
//    $(".container").click(function() {
//       $(".container div").hide();
//    });
    
//    $(".theButton").click(function() {
//         $(this).hide();
//    });


    $(".container").click(function() {
    $(this).siblings().css("opacity",0.1);
    });
    
    $(".superButton").click(function() {
    $(".container").fadeTo("500",1);
    });
    
    $(".theButton").mouseenter(function() {
    $(this).css("background-color", "black");
    });
    
    $(".theButton").mouseleave(function() {
    $(this).css("background-color", "");
    });
});