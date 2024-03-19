$(document).ready(function(){

$(window).on("scroll",function(){
	var pos = $("html").scrollTop();

	if(pos>10){
		$("header").addClass("on");
        $(".inner").addClass("on");
        $(".left a").addClass("on");
        $(".right a").addClass("on");
		$("#btn_lang").addClass("on");
		$(".logo img").addClass("on");
	}else{
		$("header").removeClass("on");
        $(".inner").removeClass("on");
        $(".left a").removeClass("on");
        $(".right a").removeClass("on");
		$("#btn_lang").removeClass("on");
		$(".logo img").removeClass("on");
	}
	
	if(pos>550){
		$("header").addClass("in");
	}else{
		$("header").removeClass("in");
	}

});
	

$("#btn_lang").on("click",function(){
	$("#sitemapInner").toggleClass("open");
});

});