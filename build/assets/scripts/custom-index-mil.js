//custom.js
$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		center: true,
		items:3,
		loop:true,
		margin:30,
		responsive:{
			320:{
				items:1
			},
			600:{
				items:2
			},
			1024:{
				items:3
			}
		}
	});
	//.mobiletoggle
	$('.mobiletoggle').on('click', function(){
		$('.nav-header .nav-block').slideToggle();
	});
});
function myFunction(x) {
    x.classList.toggle("change");
}