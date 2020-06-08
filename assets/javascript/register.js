$(document).ready(function(){
	/*
	//btn emal
	$("#email").keyup(function() {
		Vemail();
	  //console.log( "Handler for .keyup() called." );
	});	
	//btn pass
	$("#Password").keyup(function() {
		Vpassword();
	  //console.log( "Handler for .keyup() called. passs" );
	});	
	//btn login	
	
	*/
	
	/*
	
	$(document).keypress(function( event ) {
		$("#btn_save").click(function(){register(); console.log('2--Askary, funshiona!!');});
		console.log('Askary, funshiona!!');
		if(event.which == 13 ) {
			console.log('funshiona!!');
			register();
		}
	});
	*/
	$("#btn_save").click(function(){register() });
});
function Top(){

/*	$('html, body').stop().animate({
		scrollTop : 0
	}, 1500, 'easeInOutExpo');*/
	 $("html, body").animate({scrollTop:"0px"});
}
function ucWords(string){
	 var arrayWords;
	 var returnString = "";
	 var len;
	 arrayWords = string.split(" ");
	 len = arrayWords.length;
	 for(i=0;i < len ;i++){
		  if(i != (len-1)){
		   returnString = returnString+ucFirst(arrayWords[i])+" ";
		  }
		  else{
		   returnString = returnString+ucFirst(arrayWords[i]);
		  }
	 }
	 return returnString;
}
function ucFirst(string){
 return string.substr(0,1).toUpperCase()+string.substr(1,string.length).toLowerCase();
}
function Vname(){
	var name =  $.trim($("#name").val());
	var valid_name =  $("#valid_name").val();
	var url_site = $("#url_paht").val();
	console.log("entra en el name");
	// var patron = /^[a-zA-Z]*$/;
  // En caso de querer validar cadenas con espacios usar: /^[a-zA-Z\s]*$/

	if(name == 0){
		//$("#valid_name").val(0);
		$("#label_name").css("color","rgba(255,0,0,1)");
	    $('#name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		$("#name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
		console.log("entra en el name in correcto url_site"+url_site);
	}else{
		//if(!name.search(patron)){	
			console.log('entra en el name correcto <img src="'+url_site+'assets/images/ok.png" border="0">');
			$("#name").val(ucWords(name));
			//$("#valid_name").val(1);
			$("#label_name").css("color","#777");
			$('#name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
			$("#name_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
/*

		}else{
			$("#label_name").css("color","rgba(255,0,0,1)");
			$('#name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
			$("#name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');			
		}
		*/
	}
}

function Vconsecutive_number(){
	var consecutive_number =  $.trim($("#consecutive_number").val());
	var valid_consecutive_number=  $("#valid_consecutive_number").val();
	var url_site = $("#url_paht").val();

	if(consecutive_number == 0){
		$("#valid_consecutive_number").val(0);
	    $('#consecutive_number').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		$("#consecutive_number_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
	}else{
		//if(!last_name.search(patron)){
			$("#consecutive_number").val(ucWords(consecutive_number));
			$("#valid_consecutive_number").val(1);
			$('#consecutive_number').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
			$("#consecutive_number_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
		/*
		}else{
			$("#valid_lastname").val(0);
			$("#label_last_name").css("color","rgba(255,0,0,1)");
			$('#last_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
			$("#last_name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');			
		}
		*/
	}
}
function Vnumber_of_categories(){
	var number_of_categories =  $.trim($("#number_of_categories").val());
	var valid_number_of_categories=  $("#valid_number_of_categories").val();
	var url_site = $("#url_paht").val();

	if(number_of_categories == 0){
		$("#valid_number_of_categories").val(0);
	    $('#number_of_categories').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		$("#number_of_categories_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
	}else{
		//if(!last_name.search(patron)){
			$("#number_of_categories").val(ucWords(number_of_categories));
			$("#valid_number_of_categories").val(1);
			$('#number_of_categories').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
			$("#number_of_categories_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
		/*
		}else{
			$("#valid_lastname").val(0);
			$("#label_last_name").css("color","rgba(255,0,0,1)");
			$('#last_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
			$("#last_name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');			
		}
		*/
	}
}
function Vcategory(){
	var category =  $("#category").val();
	var valid_category =  $("#valid_category").val();
	var url_site = $("#url_paht").val();

	if(category == 0){
		$("#valid_category").val(0);
		$("#category_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
	    $('#category').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
	}else{
		$("#valid_category").val(1);
		$("#category_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
	    $('#category').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
	}
}

function register(){
	console.log(' entra');
	//console.log("funshiona");
	$('#btn_save').attr('disabled', true);

	$("#div_btn_save").html('<button class="btn btn-primary btn-lg btn-block type="button" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Validando...</button>');

	var name =  $.trim($("#name").val());
	var valid_name =  $("#valid_name").val();

	var consecutive_number =  $.trim($("#consecutive_number").val());
	var valid_consecutive_number=  $("#valid_consecutive_number").val();
	var category =  $("#category").val();
	var valid_category = $("#valid_category").val();
	var number_of_categories =  $.trim($("#number_of_categories").val());
	var valid_number_of_categories=  $("#valid_number_of_categories").val();

	
	var url_site = $("#url_paht").val();
	$("#save_loading").html('');
	$("#div_message_ok").html('');	
	
	if(name == 0){
		$("#valid_name").val(0);
		valid_name = 0;		
	    $('#name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		$("#name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
		console.log("entra en el name in correcto url_site"+url_site);
	}else{
		//if(!name.search(patron)){	
			console.log('entra en el name correcto <img src="'+url_site+'assets/images/ok.png" border="0">');
			$("#name").val(ucWords(name));
			$("#valid_name").val(1);
			valid_name = 1;
			$('#name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
			$("#name_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
/*

		}else{
			$("#label_name").css("color","rgba(255,0,0,1)");
			$('#name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
			$("#name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');			
		}
		*/
	}
	if(consecutive_number == 0){
		$("#valid_consecutive_number").val(0);
		valid_consecutive_number = 0;
	    $('#consecutive_number').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		$("#consecutive_number_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
	}else{
		//if(!last_name.search(patron)){
			$("#consecutive_number").val(ucWords(consecutive_number));
			$("#valid_consecutive_number").val(1);
			valid_consecutive_number = 1;			
			$('#consecutive_number').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
			$("#consecutive_number_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
		/*
		}else{
			$("#valid_lastname").val(0);
			$("#label_last_name").css("color","rgba(255,0,0,1)");
			$('#last_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
			$("#last_name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');			
		}
		*/
	}

	if(number_of_categories == 0){
		$("#valid_number_of_categories").val(0);
		valid_number_of_categories = 0;				
	    $('#number_of_categories').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		$("#number_of_categories_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
	}else{
		//if(!last_name.search(patron)){
			$("#number_of_categories").val(ucWords(number_of_categories));
			$("#valid_number_of_categories").val(1);
			valid_number_of_categories = 1;			
			$('#number_of_categories').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
			$("#number_of_categories_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
		/*
		}else{
			$("#valid_lastname").val(0);
			$("#label_last_name").css("color","rgba(255,0,0,1)");
			$('#last_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
			$("#last_name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');			
		}
		*/
	}	

	if(category == 0){
		$("#valid_category").val(0);
		valid_category = 0;
		$("#category_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
	    $('#category').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
	}else{
		$("#valid_category").val(1);
		valid_category = 1;
		$("#category_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
	    $('#category').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
	}

	console.log("valid_name: "+valid_name+",valid_consecutive_number :"+valid_consecutive_number+", valid_category:"+valid_category+", valid_number_of_categories "+valid_number_of_categories);
		
		//$("#div_message_ok").html('<div class="alert alert- alert-success"><i class="fa fa-check"></i><p>Ya solo te queda un paso...,</p> Valida tu email através del correo que acabamos de enviarte de <strong>atencion@redmedica.com</strong>.</div>');
		
		//alert("finc22");
 	if(valid_name == 1 && valid_consecutive_number == 1 &&  valid_category == 1 && valid_number_of_categories == 1){
		//bootbox.confirm("¿Está seguro, que la información que ha ingresado es correcta?, <p>Le informamos que los campos señalados con un paloma negra, son indispensables para que pueda registrarse. </p>", function(result){
		//if(result == true){ 			
			$("#error_msg").fadeOut();
			$("#save_loading").html('');
			//$("#btn_save").html('<i class="fa fa-save"></i> &nbsp; &nbsp;Guardando.');
			console.log('envia');
					$.ajax({ 
					   type: "POST",       
					   url: url_site+"assets/data/insert_movi.php",
					   cache: false,
					   data: "url_site="+url_site+"&name="+name+"&consecutive_number="+consecutive_number+"&number_of_categories="+number_of_categories+"&category="+category,
						success: function(msg){
						console.log("datos recibidos, respuesta: "+msg);
						//location.href=url_site+"my_reports";

							
						//Top();
						$("#div_message_ok").html('<div class="alert alert- alert-success"><i class="fa fa-check"></i><p>¡Guardado!</p></div>');
						setTimeout(function(){
							$("#div_message_ok").html('');
							$("#name").val('');
							$("#consecutive_number").val('');
							$("#number_of_categories").val('');
							$('#category option:first').prop('selected',true);
							$("#div_btn_save").html('<button id="btn_save" name="btn_save" type="button" class="btn btn-primary btn-lg btn-block">Guardar</button>');

						},2000);
					  }
					});	
					
		/*			
			}else{
				$("#error_msg").fadeIn();
				$("#btn_save").html('<i class="fa fa-save"></i> &nbsp; &nbsp;Guardar');
				$('#btn_save').attr('disabled', false);	
				$("#div_message_ok").html('');	
			}
		});					
		*/
					
	}else{
		console.log('Verifiar campos');
		$("#error_msg").fadeIn();
		$("#save_loading").html('<div class="alert  alert-icon alert-danger" role="alert"><i class="fa fa-times"></i>La información de uno o mas campos son incorrectos.</div>');
		$("#div_btn_save").html('<button id="btn_save" name="btn_save" type="button" class="btn btn-primary btn-lg btn-block">Guardar</button>');

		//$('#btn_save').attr('disabled', false);
	}
	
}


function IsNumber(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla==8) return true;
	if (tecla==0) return true;
	
	patron = /\d/; // Solo acepta nÃºmeros
	te = String.fromCharCode(tecla);
	return patron.test(te);
}
function IsNumber2(e) {
    tecla=(document.all) ? e.keyCode : e.which;
    //alert(tecla);
    //48
   // if(tecla<48 || tecla>57)
   //if(tecla!=44 || tecla!=46 || tecla!=48 || tecla!=49 || tecla!=50 || tecla!=51 || tecla!=52 || tecla!=53|| tecla>57)
   if (tecla==8) return true;
   if (tecla==0) return true;
   if (tecla==46) return true;
   //if (tecla==44) return true; ,,,
   if(tecla<48 || tecla>59)
   
   return false;
}

