$(document).ready(function() {
   
   $("#switch1").click(function(){
 		if($(this).attr("src") == "img/switch_off.png") {
 			$(this).attr("src", "img/switch_on.png");
 			$("#bulb1").attr("src", "img/bulbon.gif");
 		}else if ($(this).attr("src") == "img/switch_on.png") {
 		    $(this).attr("src", "img/switch_off.png");
 			$("#bulb1").attr("src", "img/bulboff.gif");
 		}
   });
   $("#switch2").click(function(){
 		if($(this).attr("src") == "img/switch_off.png") {
 			$(this).attr("src", "img/switch_on.png");
 			$("#bulb2").attr("src", "img/bulbon.gif");
 		} else if ($(this).attr("src") == "img/switch_on.png") {
 		    $(this).attr("src", "img/switch_off.png");
 			$("#bulb2").attr("src", "img/bulboff.gif");
 		}
   });
   $("#switch3").click(function(){
 		if($(this).attr("src") == "img/switch_off.png") {
 			$(this).attr("src", "img/switch_on.png");
 			$("#bulb3").attr("src", "img/bulbon.gif");
 		} else if ($(this).attr("src") == "img/switch_on.png") {
 		    $(this).attr("src", "img/switch_off.png");
 			$("#bulb3").attr("src", "img/bulboff.gif");
 		}
   });
});