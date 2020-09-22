$("#nav").hide(); //how to show icon only when reloading the page

$("#nav i").click(function () {
	$("#nav").slideToggle(1000);
});
$("nav button").click(function () {
	$("#nav").slideToggle(1000);
});
// navbar toggles
$(window).scroll(function(){
    let scrollTop = $(window).scrollTop();

if(scrollTop > 800)
{
    $("#btnUp").fadeIn(500)
    
}
else{
    $("#btnUp").fadeOut(500)
}
}) //nav options


$("#btnUp").click(function(){
    $("body,html").animate({scrollTop:0},1000) 
}) //button up

/* Start loading screen*/
$(document).ready(function () {
	$("#loading").fadeOut(2000, function () {
		$("body").css("overflow", "auto");
	});
});
/* End loading screen*/

/* Start rate option*/

$("#rate").click(function () {
	$("#rate-options").slideToggle(1500);
});
$("#rate-options").hide();
/* End rate option*/


/* Start Filter section*/
$("#filter").hide();
$("#filterToggle").click(function () {
	$("#filter").slideToggle(1500);
});
/* End Filter section*/

jQuery(function ($) {
	("use strict");

	// $(window).on("scroll", function () {
	// 	if ($(this).scrollTop() > 260) {
	// 		// Set position from top to add class
	// 		$("header").addClass("header-appear");
	// 	} else {
	// 		$("header").removeClass("header-appear");
	// 	}
	// });
	/* ===================================
        Side Menu
    ====================================== */

	if ($("#sidemenu_toggle").length) {
		$("#sidemenu_toggle").on("click", function () {
			$(".pushwrap").toggleClass("active");
			$(".side-menu").addClass("side-menu-active"),
				$("#close_side_menu").fadeIn(700);
		}),
			$("#close_side_menu").on("click", function () {
				$(".side-menu").removeClass("side-menu-active"),
					$(this).fadeOut(200),
					$(".pushwrap").removeClass("active");
			}),
			$(".side-nav .navbar-nav .nav-link").on("click", function () {
				$(".side-menu").removeClass("side-menu-active"),
					$("#close_side_menu").fadeOut(200),
					$(".pushwrap").removeClass("active");
			}),
			$("#btn_sideNavClose").on("click", function () {
				$(".side-menu").removeClass("side-menu-active"),
					$("#close_side_menu").fadeOut(200),
					$(".pushwrap").removeClass("active");
			});
	}

	/* ===================================
         Side Menu Animation
    ====================================== */

	$(".side-nav .navbar-nav .nav-item .nav-link").on("mouseenter", function () {
		var value = $(this).text();
		$("#mega-title .inner-mega-title")
			.addClass("animation-effect")
			.text(value);
	});

	$(".side-nav .navbar-nav .nav-item .nav-link").on("mouseleave", function () {
		$("#mega-title .inner-mega-title").removeClass("animation-effect");
	});

	$(".side-nav .navbar-nav .nav-item .nav-link").on("click", function () {
		$("body").addClass("cursor-change");

		setTimeout(function () {
			$("body").removeClass("cursor-change");
		}, 1500);
	});
});