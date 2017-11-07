//JavaScript Document
$(document).ready(function(){
	
	/*$(window).scroll(function() {
	if ($(this).scrollTop() > 100){  
		$('.topSection').addClass("sticky");
	  }
	  else{
		$('.topSection').removeClass("sticky");
	  }
	});*/
	
	
	/************* Mobile MENU ****************/
		$('#nav-icon').click(function(){
			if ( $('#nav-icon + ul').css('display') == 'none' ) {

			  $('#nav-icon').addClass('open');
			  $('header nav').addClass('active');
			  $('#nav-icon + ul').slideDown();
			  
		
			} else {
		
			  $('#nav-icon').removeClass('open');
			  $('#nav-icon + ul').slideUp();
			  $('header nav').removeClass('active');
		
			}
			//$(this).toggleClass('open');
		});
	  
	  	$(window).resize(function () {

	    if ($(window).width() > 769) {
				//$('#nav-icon').addClass('open');
				$('#nav-icon + ul').show();
				
			}else{
				$('#nav-icon + ul').hide();
				 $('header nav').removeClass('active');
				 $('#nav-icon').removeClass('open');
			}
		});
         //  $("#block").vide("videos/ocean"); // Non declarative initialization

/*$('#SurveySecond,#SurveyThird,#SurveyFourth,#SurveyFifth,.discussionDoctorSection,.videoList,#SurveySixth,#paymentProcess').hide();*/

// Hides all default slides... Exept the first one
$('.slidesQ').hide();
			
			$('input[name="eol"]').click(function(){
				if($('input.homeRadio').is(':checked'))
					{
						$(".ifHomeSelected input").prop('disabled', false);
					}else{
						$(".ifHomeSelected input").prop('disabled', true);
						$(".ifHomeSelected input[type='radio']").removeAttr('checked');
					}
				
			})

		  
		$('.discussNow').click(function() {
            $('#SurveySeventh').slideUp();
			 $('.discussionDoctorSection').slideDown();
        });
		$('.videoBg').click(function() {
            $('#SurveySeventh').slideUp();
			 $('.videoList').slideDown();
        });
		$('.goToLastSlide').click(function() {
			
            $('.discussionDoctorSection,.videoList').slideUp();
			 $('#lastSlide').slideDown();
        });
		
		$('.slides a.defaultBtn').click(function() {
			$(this).parent().hide();
			var slides =  $(this).attr("href");
			$(slides).slideDown(500,function()
			{	
				$(this).siblings().slideUp();
				
				});
			//alert(slides);
		 });
		
		$('.goBack a').click(function() {
			//$(this).parent().hide();
			$(this).parent().parent().parent().hide();
			var slides =  $(this).attr("href");
			$(slides).slideDown(500,function()
			{	
				$(this).siblings().slideUp();
				
				});
			//alert(slides);
		 });
		
		
		
		
		
		
    });
	

	
