$(document).ready(function(){
	$("#email").keyup(function() {
		Vemail();
	  //console.log( "Handler for .keyup() called." );
	});	
	//btn pass
	$("#Password").keyup(function() {
		Vpassword();
	  //console.log( "Handler for .keyup() called. passs" );
	});	
	

	$("#btn_login").click(function(){login()});
	$(document).keypress(function( event ) {
		if(event.which == 13 ) {
			//console.log('funshiona!!');
			login();
		}
	});
});
function Vemail(){
	var Email =  $("#email").val();
	var valid_email =  $("#valid_email").val();
	var filter = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;

	if(Email == 0){
		$("#valid_email").val(0);
	    $('#label_email').css("color","rgba(255,0,0,1)");
	    $('#email').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
	}else{

		if (filter.test(Email)){
			$("#valid_email").val(1);        	
	    	$('#label_email').css("color","#777");
	    	$('#email').css("box-shadow","0 0 5px #00CC00","border","1px solid #00CC00");			
		}else{
			$("#valid_email").val(0);
	    	$('#label_email').css("color","rgba(255,0,0,1)");
	    	$('#email').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		}
	}
}
function Vpassword(){
	var Password =  $("#password").val();
	var valid_password =  $("#valid_password").val();
	var url_site = $("#url_site").val();

	if(Password == 0){
		$("#valid_password").val(0);
		$("#label_password").css("color","rgba(255,0,0,1)");
	    $('#password').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
	}else{
		$("#valid_password").val(1);
		$("#label_password").css("color","#777");
	    $('#password').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
		//VpasswordC();
	}
}
function login(){
	console.log(' entra password');

	
    $("#btn_login").html('Validando..');
	$('#btn_login').attr('disabled', true);	
			
	var Email =  $("#email").val();
	var valid_email =  $("#valid_email").val();
	// creamos nuestra regla con expresiones regulares.
	var filter = /[\w-\.]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
	var Password =  $("#password").val();
	var valid_password =  $("#valid_password").val();
	var url_site = $("#url_paht").val();

	$("#error_login").html('');
	$("#loading").html('<img src="'+url_site+'assets/images/ajax-loader.gif"/>');	
 //console.log("url_site:"+url_site);
	if(Email == 0){
		$("#valid_email").val(0);
	    $('#label_email').css("color","rgba(255,0,0,1)");
	    $('#email').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
	}else{

		if (filter.test(Email)){
			$("#valid_email").val(1);        	
	    	$('#label_email').css("color","#777");
	    	$('#email').css("box-shadow","0 0 5px #00CC00","border","1px solid #00CC00");			
		}else{
			$("#valid_email").val(0);
	    	$('#label_email').css("color","rgba(255,0,0,1)");
	    	$('#email').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		}
	}	

	if(Password == 0){
		$("#valid_password").val(0);
		$("#label_password").css("color","rgba(255,0,0,1)");
	    $('#password').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
	}else{
		$("#valid_password").val(1);
		$("#label_password").css("color","#777");
	    $('#password').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
	}
	
	//console.log('valores: privasidad_notice: '+$("#privasidad_notice").is(':checked')+', valid_email: ');
	console.log("url_site="+url_site+"&Email="+Email+"&password="+Password+"");
	if(Email != 0 && Password != 0){

		//console.log('envia');
				$.ajax({
				   type: "POST",       
				   url: url_site+"assets/data/verify_login.php",
				   cache: false,
				   data: "url_site="+url_site+"&Email="+Email+"&password="+Password+"",
					success: function(msg){
					console.log("respuesta: "+msg);
					var nmsg = parseInt(msg);
					console.log("respuesta parse: "+nmsg);
					if(nmsg == 1){
						console.log(" ok");
						//location.href=url_site+"search_patient";
						location.href=url_site+"dashboard";
					}else{
						console.log("No");
						$("#error_login").html('<div class="alert alert-danger"><i class="fa fa-frown-o"></i> Upps! <strong>E-mail incorrecta</strong> o <strong>Contraseña</strong>!</div>');
						$("#loading").html('');	
						$("#btn_login").html('&nbsp; &nbsp;Acceder');
						$('#btn_login').attr('disabled', false);					
					}
					//$("#btn_login").html('<i class="fa fa-save"></i> &nbsp; &nbsp;Guardar');
					//$("#FormR").html('<div class="alert alert-icon alert-success" role="alert"><i class="fa fa-check"></i>	Ya solo te queda un paso..., Se te acaban de enviar un correo para que actives tu cuenta.</div>');
					//location.href=url_site+"my_reports";
				  }
				});		
	}else{
		
		$("#valid_email").val(0);
		$('#label_email').css("color","rgba(255,0,0,1)");
		$('#email').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		
		$("#valid_password").val(0);
		$("#label_password").css("color","rgba(255,0,0,1)");
	    $('#password').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		
		$("#error_login").html('<div class="alert alert-danger"><i class="fa fa-frown-o"></i> Upps! <strong>E-mail incorrecta</strong> o <strong>Contraseña</strong>!</div>');
		$("#loading").html('');	
		//console.log('Verifiar campos');
		$("#error_login").fadeIn();
		$("#btn_login").html(' &nbsp; &nbsp;Acceder');
		$('#btn_login').attr('disabled', false);
	}
}