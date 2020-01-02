$(function(){
	
	$(window).resize(function () {
    screenRespond();
	});
	screenRespond();
	function screenRespond(){
	  var screenWidth = $(window).width(); 
	  var screenHeight = $(window).height(); 
	  if(screenWidth <= 1360){
		$("body").addClass("hsty");
	  }else{
		 $("body").removeClass("hsty"); 
	  }
	  
	  $('.hsty-cen02,.hsty-cen01').height($(window).height());
	  $('.hsty-c4img2').css('top',$('.hsty-c4img1').outerHeight()+5)	
	  $('.hsty-m4nr').height($('.hsty-c4img5').height())	
	}
	
//	if(navigator.appName == "Microsoft Internet Explorer"&&parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE",""))<9){
//	   $('.hsty-cen01').css('background','#999');
//	   alert("����羌頵��������篏�鐚�莚隙�莉�IE9��篁ヤ�����");	 
//  };
	
	var height = window.innerHeight,
	width = document.body.clientWidth;
	if(typeof height != 'number'){
		height = document.body.clientHeight;
	}
	var ratio = height/width;

	//�����蘂�筝�1280*720
	if(ratio>(720/1280)){
		var leftOffset = -(height*1280/720 - width)/2;
	    $('#hsty-video-bg,.hsty-c2bg').css({'height':'100%','margin-left':leftOffset});
	}else{	
		var topOffset = -(width*720/1280 - height)/2;
	    $('#hsty-video-bg').css({'width':'100%','margin-top':topOffset});
		$('.hsty-c2bg').css('width','100%');
		
	};
	
	var myVideo=document.getElementById("video-large");
	$('.hsty-start').click(function(){
		
		$('.hsty-video-large').show();
		myVideo.play();
		$('.hsty-header').hide();
		$('body,html').addClass('hsty-fix');
		
	});
	
	$('.hsty-video-close').click(function(){
		$('.hsty-video-large').hide();
		myVideo.pause();
		$('.hsty-header').show();
		$('body,html').removeClass('hsty-fix');
	});
	
	
	
	$('.hsty-nav li').click(function(){
		var Nindex = $(this).index();
		$('html,body').animate({scrollTop:$('.hsty-dw').eq(Nindex).offset().top}, 800);
	});
	
	$('.hsty-gotop').click(function(){
		$('html,body').animate({scrollTop:0}, 800);
	});
	$(window).scroll(function(){
		
		if($(document).scrollTop()>$('.hsty-cen02').offset().top){
			$('.hsty-gotop').fadeIn();
		}else{
			$('.hsty-gotop').fadeOut();
		}		
	});
	var mySwiper = new Swiper ('.swiper-container', {
    mode:'horizontal',
    pagination:{
    el:'.swiper-pagination',
    },
	mousewheelControl:false,
    paginationClickable:true,
    slidesPerView:1,
	autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
  });
});
