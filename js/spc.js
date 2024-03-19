$(document).ready(function(){
	
var $slides = $(".slide");
var current = 0; //현재 슬라이드 번호
//console.log($slides);
$slides.css("display","none");
$slides.eq(0).css("display","block");

function fnFade(idx){
	$slides.fadeOut(1000);
	$slides.eq(idx).fadeIn(1000);
	current = idx; //현재 슬라이드 번호를 이미 보여진 슬라이드 번호로 갱신
}

//번호를 지정해주는 함수
function setSlide(){
	if(current == 2){
		fnFade(0);
	}else{
		fnFade(current + 1);
	}
}

setInterval(setSlide,3000);
	
	
	
$('.autoplay').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});	
	


});