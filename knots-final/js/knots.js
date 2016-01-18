$(document).ready(function(){

   $("#template-contactform-phoneno").inputmask({"mask": "(999) 999-9999"}); //specifying options
   
				});
							$("#livesg").change(function () {
               		
								    // alert(currentYear + 1);
								    if ($("#livesg").val() == "No") {
								        swal({ 
								        	title: "Our Apologies",   
								        	text: "This service is for professional singles living in Singapore. We will be in touch with you when our services are available outside Singapore. Thank you for your understanding",   
								        	type: "error",   
								        	confirmButtonText: "Okay" });
								    } else if ($("#livesg").val() == "Yes") {
								        console.log("Good to go");
								    }
            });

							$("#template-contactform").validate({
								submitHandler: function(form) {
									$('.form-process').fadeIn();
									$(form).ajaxSubmit({
										target: '#contact-form-result',
										success: function() {
											$('.form-process').fadeOut();
											$(form).find('.sm-form-control').val('');
											$('#contact-form-result').attr('data-notify-msg', $('#contact-form-result').html()).html('');
											SEMICOLON.widget.notifications($('#contact-form-result'));
										}
									});
								}
							});
