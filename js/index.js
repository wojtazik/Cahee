$(window).scroll(function() {    
    var scroll = $(window).scrollTop();   
    if (scroll > 50) {
        $(".header__navigation").addClass("bg-white");
    }
    if (scroll <= 50) {
        $(".header__navigation").removeClass("bg-white");
    }
});

$(function() {
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "elastic",
        closeEffect: "elastic"
    });
});

$(function() {
	$("#showmore").click(function(){	
		$(this).text() == "View More" ? $(this).text("Hide less") : $(this).text("View More");
		$("#show-hide").slideToggle('slow');
	});
	$("#showmore1").click(function(){	
		$(this).text() == "View More" ? $(this).text("Hide less") : $(this).text("View More");
		$("#show-hide1").slideToggle('slow');
	});
});

