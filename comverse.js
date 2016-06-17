$(document).ready(function(){
	$(".nav-button").click(function(){
    $(".phone-header-links").slideToggle();
  	});


$.preloadImages = function() {
  for (var i = 0; i < arguments.length; i++) {
    $("<img />").attr("src", arguments[i]);
  }
}

$.preloadImages("img/solution_icon_smart-money_hover.png",
	"img/solution_icon_personal_hover.png",
 	"img/solution_icon_optimize-efficnt_hover.png",
  	"img/solution_icon_biz-analitics_hover.png",
  	"img/solution_icon_diti-cx_hover.png",
  	"img/solution_icon_biz-transform_hover.png",
 	"img/eventListIconNews_hover.png",
 	"img/eventListIconEvents_hover.png",
 	"img/eventListIconPress_hover.png",
 	"img/socialMenuIcon-youtube_hover.png",
 	"img/searchBtnMobile.png");

});