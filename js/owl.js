$(document).ready(function() {    
    $('#owl-intro').owlCarousel({
    autoplay:true,
    autoplayTimeout:3000,
    loop:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
    });
    $('#owl-partner').owlCarousel({
        autoplay:true,
        autoplayTimeout:1000,
        dots: true,
        margin:10,
        loop:true,
        touchDrag: true,
        autoWidth:true,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:7
        }
    }
    });
    $(document).ready(function(){
		$("a[href*='#']").on("click",function (e) {
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$("html, body").stop().animate({
			"scrollTop": $target.offset().top - 50
			}, 900, "swing", function () {
			window.location.hash = target;
			});
		});
	});
   
});