
var ww = $(window).width();

<!--Menu Button--> 
$(document).ready(function() {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").slideToggle('fast');
	});
	adjustMenu();
})

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

<!--DropDown Menu--> 
var adjustMenu = function () {
    if (ww <= 991) {
        $(".toggleMenu").css("display", "inline-block");
        if (!$(".toggleMenu").hasClass("active")) {
            $(".nav").hide();
        } else {
            $(".nav").show();
        }
        $(".nav li").unbind('mouseenter mouseleave');
        $(".nav li a.parent").unbind('click').bind('click', function (e) {
            // must be attached to anchor element to prevent bubbling
            $(this).parent("li").toggleClass("hover");
            if ($(this).parent("li").hasClass("hover")) e.preventDefault();
        });
    }
    else if (ww > 991) {
        $(".toggleMenu").css("display", "none");
        $(".nav").show();
        $(".nav li").removeClass("hover");
        $(".nav li a").unbind('click');
        $(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function () {
            // must be attached to li so that mouseleave is not triggered when hover over submenu
            $(this).toggleClass('hover');
        });
    }
}

<!--More Button--> 
$(function()
{
$('.toggleMenu_more').click(function(event) {
	event.preventDefault();
	$(".top_menu_prim").slideToggle('fast');
		if ($(this).text() == 'More'){
			 $(this).text('Close'); 
			 $(this).css({'background-color':'#000', 'color':'white'});               
		} else {
			 $(this).text('More');
			 $(this).css({'background-color':'transparent', 'color':'#888'});                   
		} 
	});	
});

