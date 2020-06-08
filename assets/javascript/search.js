$(document).ready(function(){

	//https://rubenlacasa.es/2013/05/24/clase-para-sumar-tiempos-con-php-php-tips/
	var url_site = $("#url_paht").val();
/*	
    window.addEventListener("beforeunload", function (e) { 
	  //location.href = "logout";
      
				$.ajax({
				   type: "POST",       
				   url:  url_site+"logout",//recover_pass.php
				   cache: false,
				   data: "Email=askary.almazan@alianzamedica.com",
					success: function(msg){
				  }
				});
						  
      return;
    });
	
*/


/*		
var seconds = 1800; //número de segundos a contar 60seg = 1  minuto 5400
function secondPassed() {

  var minutes = Math.round((seconds - 30)/60); //calcula el número de minutos
  var remainingSeconds = seconds % 60; //calcula los segundos
  //si los segundos usan sólo un dígito, añadimos un cero a la izq
  if (remainingSeconds < 10) { 
    remainingSeconds = "0" + remainingSeconds; 
  } 
  //document.getElementById('countdown').innerHTML = minutes + ":" +     remainingSeconds; 

  //$("#countdown").html(minutes + ":" +     remainingSeconds);
  console.log(minutes + ":" +     remainingSeconds);
  if (seconds == 0) { 
    clearInterval(countdownTimer); 
    	//alert('Tiempo de sesión concluida'); 
	  location.href = url_site+"logout";
    //document.getElementById('countdown').innerHTML = "Buzz Buzz"; 
  } else { 
    seconds--; 
  } 
} 

var countdownTimer = setInterval(secondPassed, 1000);

*/

//-----------------------------------------------------------------------------------

/*
if($("#online_status").val() == 0){//conectado
	//alert("hola netra");
	var seconds_t = 900; //número de segundos a contar
	function stopwatch_for_attention() {
	
	  var minutes = Math.round((seconds_t - 30)/60); //calcula el número de minutos
	  var remainingSeconds = seconds_t % 60; //calcula los segundos
	  //si los segundos usan sólo un dígito, añadimos un cero a la izq
	  if (remainingSeconds < 10) { 
		remainingSeconds = "0" + remainingSeconds; 
	  } 
	  //document.getElementById('countdown').innerHTML = minutes + ":" +     remainingSeconds; 
	  $("#countdown_t").html(minutes + ":" +     remainingSeconds);
	  $("#countdown_val").val(minutes + ":" +     remainingSeconds);
	  if (seconds_t == 0) { 
		clearInterval(countdownTimer_t); 
		//alert('Se acabó el tiempo'); 
		//document.getElementById('countdown').innerHTML = "Buzz Buzz"; 
	  } else { 
		seconds_t--; 
	  } 
	} 
	
	var countdownTimer_t = setInterval(stopwatch_for_attention, 1000);
}
	*/
//--------------------------------------------------------------end attention time	
	//show_patient_connection_status();

	//setInterval(show_patient_connection_status, 3000);

	
	 var online_s = 0;
	 var s; //número de segundos a contar 60seg = 1  minuto 5400
	 var sp =0;
	 var t_g = 0;
	$("#btn_save").click(function(){search_p() }); 
	
	$(document).keypress(function( event ) {
		if(event.which == 13 ) {
			//console.log('funshiona!!');
			search_p();
		}
	});	
	
});
//----------------------------------------------------- start status


function cron() {

  var minutes = Math.round((s - 30)/60); //calcula el número de minutos
  var remainingSeconds = s % 60; //calcula los segundos
  //si los segundos usan sólo un dígito, añadimos un cero a la izq
  if (remainingSeconds < 10) { 
    remainingSeconds = "0" + remainingSeconds; 
  } 
  //document.getElementById('countdown').innerHTML = minutes + ":" +     remainingSeconds; 

  $("#countdown_t").html(minutes + ":" + remainingSeconds);
  //$("#countdown_val").val(minutes + ":" +remainingSeconds);
  
 // console.log(minutes + ":" +     remainingSeconds);
  if (s == 0) { 
    clearInterval(countdownTimer); 
  } else { 
    s--; 
  } 
} 

function time_elapsed() {
//calcula el número de minutos
  var minutes = Math.round((sp + 30)/60); 
  var remainingSeconds = sp % 60; //calcula los segundos
  //si los segundos usan sólo un dígito, añadimos un cero a la izq
  if (remainingSeconds < 10) { 
    remainingSeconds = "0" + remainingSeconds; 
  } 
  //document.getElementById('countdown').innerHTML = minutes + ":" +     remainingSeconds; 

  $("#countdown_val").val(minutes + ":" +remainingSeconds);
  
 //console.log('tiempo: '+minutes + ":" +     remainingSeconds);
  if (sp == 0) { 
    clearInterval(t_g); 
  } else { 
    sp++; 
  } 
}


//-----------------------------------------------------end status


function show_patient_connection_status(){
	var url_site = $("#url_paht").val();
	var array = 0;
	
	$.ajax({ 
	   type: "POST",       
	   url: url_site+"assets/data/show_patient_connection_status.php",
	   cache: false,
	   data: "url_site="+url_site,
		success: function(msg){		
		console.log("mostrar estatus: "+msg);
			array = msg.split('|');
			$("#p_show_patient_st").html("Pacientes conectados <strong>"+array[0]+"</strong>  desconectados <strong>"+array[1]+"</strong>");
	  }
	});		
}

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
	//console.log("entra en el name");
	// var patron = /^[a-zA-Z]*$/;
	var patron = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/;
  // En caso de querer validar cadenas con espacios usar: /^[a-zA-Z\s]*$/

	if(name == 0){
		//$("#valid_name").val(0);
		$("#label_name").css("color","rgba(255,0,0,1)");
	    $('#name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		$("#name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
		console.log("entra en el name in correcto ");
	}else{
		if(!name.search(patron)){	
			console.log("entra en el name correcto ");
			$("#name").val(ucWords(name));
			//$("#valid_name").val(1);
			$("#label_name").css("color","#777");
			$('#name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
			$("#name_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
			//fullname();
		}else{
			$("#label_name").css("color","rgba(255,0,0,1)");
			$('#name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
			$("#name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');			
		}
	}
}
function VMiddle_name(){
	var middle_name = $.trim($("#middle_name").val());
	var validMiddle_name = $("#validMiddle_name").val();
	var patron = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/;
	var url_site = $("#url_paht").val();

	if(middle_name == 0){
        //$("#middle_name").val($.trim(middle_name));
		//$("#validMiddle_name").val(0);
		$("#middle_name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
        $('#middle_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
	}else{
		if(!middle_name.search(patron)){
			console.log("entra");
			//middle_name2 = $.trim(middle_name);
			$("#middle_name").val(ucWords(middle_name));
			//$("#validMiddle_name").val(1);
			$("#middle_name_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
			$('#middle_name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
			//fullname();
		}else{
			$("#middle_name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
        	$('#middle_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");			
		}
	}
	
}

function Vlast_name(){
	var last_name =  $.trim($("#last_name").val());
	var valid_lastname =  $("#valid_lastname").val();
	var patron = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/;
	var url_site = $("#url_paht").val();

	if(last_name == 0){
		$("#valid_lastname").val(0);
		$("#label_last_name").css("color","rgba(255,0,0,1)");
	    $('#last_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		$("#last_name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
	}else{
		if(!last_name.search(patron)){
			$("#last_name").val(ucWords(last_name));
			$("#valid_lastname").val(1);
			$("#label_last_name").css("color","#777");
			$('#last_name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
			$("#last_name_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
			//fullname();
		}else{
			$("#valid_lastname").val(0);
			$("#label_last_name").css("color","rgba(255,0,0,1)");
			$('#last_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
			$("#last_name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');			
		}
	}
}
function fullname(){

	var name =  $.trim($("#name").val());
	var valid_name =  $("#valid_name").val();
	var validName = 0;
	var middle_name = $.trim($("#middle_name").val());
	var validMiddle_name = $("#validMiddle_name").val();
	var validMiddleName = 0;
	var last_name =  $.trim($("#last_name").val());
	var valid_lastname =  $("#valid_lastname").val();
	var validLastName = 0;
	var sexo = $("#gender").val();
	var patron = /^[a-zA-Z\s]*$/;
	var url_phat = $("#url_paht").val();
		
	//var sexo = $("#sexo").val();
	//var url_phat = $("#url_phat").val();
   //console.log("Medico con id: "+id_socio);

	if($.trim(name) == 0){
		$("#valid_name").val(0);
		validName = 0;
		$("#name_message").html('<img src="'+url_phat+'assets/images/no.png" border="0">');
        $('#name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
	}else{
		if(!name.search(patron)){
			$("#valid_name").val(1);
			validName = 1;
			$("#name").val(ucWords(name));
			$("#name_message").html('<img src="'+url_phat+'assets/images/ok.png" border="0">');
			$('#name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
		}else{
			$("#valid_name").val(0);
			validName = 0;
			$("#name_message").html('<img src="'+url_phat+'assets/images/no.png" border="0">');
			$('#name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");			
		}
	}
	
	if($.trim(middle_name) == 0){
		$("#validMiddle_name").val(0);
		validMiddleName  = 0;
		$("#middle_name_message").html('<img src="'+url_phat+'assets/images/no.png" border="0">');
        $('#middle_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
	}else{
		if(!middle_name.search(patron)){		
			$("#validMiddle_name").val(1);
			validMiddleName  = 1;
			$("#middle_name").val(ucWords(middle_name));
			$("#middle_name_message").html('<img src="'+url_phat+'assets/images/ok.png" border="0">');
			$('#middle_name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
		}else{
			$("#validMiddle_name").val(0);
			validMiddleName  = 0;
			$("#middle_name_message").html('<img src="'+url_phat+'assets/images/no.png" border="0">');
			$('#middle_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");			
		}
	}
	
	if($.trim(last_name) == 0){
		$("#valid_lastname").val(0);
		validLastName = 0;
		$("#last_name_message").html('<img src="'+url_phat+'assets/images/no.png" border="0">');
        $('#last_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
	}else{
		if(!last_name.search(patron)){			
			//last_name2 = $.trim(last_name);
			//$("#last_name").val(last_name2);
			$("#valid_lastname").val(1);
			validLastName = 1;
			$("#last_name").val(ucWords(last_name));
			$("#last_name_message").html('<img src="'+url_phat+'assets/images/ok.png" border="0">');
			$('#last_name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
		}else{
			$("#valid_lastname").val(0);
			validLastName = 0;
			$("#last_name_message").html('<img src="'+url_phat+'assets/images/no.png" border="0">');
			$('#last_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");			
		}
	}		
	
	if($.trim(name) != 0 && $.trim(middle_name) != 0 && $.trim(last_name) != 0){
		//console.log("entra en la validaciÃ³n");
		//alert("entra a la validaciÃ³n"+id_socio);
		//console.log("entra a la validaciÃ³n"+id_socio);
		//alert("name="+name+"&middle_name="+middle_name+"&last_name="+last_name+"&id_socio="+id_socio+"");
		///alert(url_phat+"data/valid_fullName.php");
		$("#nameError").html('<img src="assets/images/ajax-loader.gif"/>');
		$.ajax({
			   type: "POST",
			   url: url_phat+"assets/data/valid_fullName_patients.php",
			   cache: false,
			   data: "name="+name+"&middle_name="+middle_name+"&last_name="+last_name,
			   success: function(msg){
				    console.log("respuesta: "+msg);
  
				//var nmsg=parseInt(msg);
				//console.log("respuesta nmsg: "+nmsg);
				   if(msg == '0'){// the name is already registerd
				   		console.log('entra en el if 0');
				   	 $("#nameError").html('');
						$("#validFull_Name").val(1);
						validFull_Name = 1;
						$("#validNombre").val(1);
						validNombre = 1;
						$("#name_message").html('<img src="'+url_phat+'assets/images/ok.png" border="0">');
						$('#name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
						
						$("#validMiddle_name").val(1);
						validMiddle_name  = 1;
						$("#middle_name_message").html('<img src="'+url_phat+'assets/images/ok.png" border="0">');
						$('#middle_name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
						
						$("#validLast_name").val(1);
						validLast_name = 1;
						$("#last_name_message").html('<img src="'+url_phat+'assets/images/ok.png" border="0">');
						$('#last_name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");	
						//console.log("if- Nombre valido - valido"+validFull_Name);	
						//alert("Nombre valido - valido"+validFullName);		   
				   }else{// 

				        $("#nameError").html('Este nombre ya se encuentra registrado,de no ser así, comuniquese a nuestros teléfonos.');
						$("#validFull_Name").val(0);
						validFull_Name = 0;
						$("#validNombre").val(0);
						validNombre = 0;
						$("#name_message").html('<img src="'+url_phat+'assets/images/no.png" border="0">');
						$('#name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
						
						$("#validMiddle_name").val(0);
						validMiddle_name  = 0;
						$("#middle_name_message").html('<img src="'+url_phat+'assets/images/no.png" border="0">');
						$('#middle_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
						
						$("#validLast_name").val(0);
						validLast_name = 0;
						$("#last_name_message").html('<img src="'+url_phat+'assets/images/no.png" border="0">');
						$('#last_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
						//console.log("if- Nombre no valido - novalido"+validFull_Name);						   
				   }
				   
				}
		});	
	}else{
		//alert("despues de la validaciÃ³n");
		validFull_Name = 0;
		$("#validFull_Name").val(0);
		//console.log("No valido ");
	}	
}




function search_p(){
	//console.log(' entra');
	//console.log("funshiona");
    $("#btn_save").html('Validando..');
	$('#btn_save').attr('disabled', true);
	var patron = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]*$/;	
	var name =  $("#name").val();
	var valid_name =  $("#valid_name").val();
	var last_name =  $("#last_name").val();
	var valid_lastname =  $("#valid_lastname").val();
	var middle_name = $.trim($("#middle_name").val());
	var validMiddle_name = $("#validMiddle_name").val();
	var validFull_Name = $("#validFull_Name").val();



	var url_site = $("#url_paht").val();
	$("#save_loading").html('');
	$("#div_message_ok").html('');	
	


	if(name == 0){
		valid_name = 0;
		$("#valid_name").val(0);
		$("#label_name").css("color","rgba(255,0,0,1)");
	    $('#name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		$("#name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
	}else{
		valid_name = 1;
		$("#valid_name").val(1);
		$("#label_name").css("color","#777)");
	    $('#name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
		$("#name_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
	}
	
	if(middle_name == 0){
        //$("#middle_name").val($.trim(middle_name));
		//$("#validMiddle_name").val(0);
		validMiddle_name = 0;
		$("#middle_name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
        $('#middle_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
	}else{
		//middle_name2 = $.trim(middle_name);
		$("#middle_name").val(ucWords(middle_name));
		//$("#validMiddle_name").val(1);
		validMiddle_name = 1;
		$("#middle_name_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
        $('#middle_name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");

	}
/*	
	if(last_name == 0){
		valid_lastname = 0;
		$("#valid_lastname").val(0);
		$("#label_last_name").css("color","rgba(255,0,0,1)");
	    $('#last_name').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
		$("#last_name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
	}else{
		valid_lastname = 1;		
		$("#valid_lastname").val(1);
		$("#label_last_name").css("color","#777");
	    $('#last_name').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");
		$("#last_name_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
	}
	
	
*/
	 
console.log("valid_name :"+valid_name+", validMiddle_name:"+validMiddle_name+", valid_lastname "+valid_lastname);
		
								
		
		//alert("finc22");
		//validFull_Name == 1 &&  &&  validMiddle_name == 1
 	if(valid_name == 1 && validMiddle_name == 1){
		console.log('entra en if');
			$("#error_msg").fadeOut();
			$("#save_loading").html('');
			$("#btn_save").html('<i class="fa fa-save"></i> &nbsp; &nbsp;Buscando ...');
			console.log('envia');
					$.ajax({ 
					   type: "POST",       
					   url: url_site+"assets/data/search_patient.php",
					   cache: false,
					   data: "url_site="+url_site+"&name="+name+"&middle_name="+middle_name+"&last_name="+last_name,
						success: function(msg){
						console.log("datos recibidos, respuesta: "+msg);
						$('#btn_save').attr('disabled', false);
						$("#btn_save").html('<i class="fa fa-save"></i> &nbsp; &nbsp;Buscar');
						$("#tbl_search").html(msg);
							
						//Top();

						$("#name").val("");
						$('#name').css("box-shadow","0 0 0 #00CC00","border","0px solid #003300");
						$(".messageAlert").html("");
        				$('#middle_name').css("box-shadow","0 0 0 #00CC00","border","0px solid #003300");
						$("#middle_name").val("");
						$('#last_name').css("box-shadow","0 0 0 #00CC00","border","0px solid #003300");
						$("#last_name").val("");

					  }
					});											
	}else{
		console.log('Verifiar campos');
		$("#error_msg").fadeIn();
		$("#save_loading").html('<div class="alert  alert-icon alert-danger" role="alert"><i class="fa fa-times"></i>La información de uno o mas campos son incorrectos.</div>');
		$("#btn_save").html('<i class="fa fa-save"></i> &nbsp; &nbsp;Buscar');
		$('#btn_save').attr('disabled', false);
	}
	
}

function Vpatient_status(id_patient){
	var patient_status =  $("#patient_status").val();
	var val_patient_status = 0;
	var id_patient = id_patient;
	var id_partner = $("#id_partner").val();
	var url_site = $("#url_paht").val();
	
	//alert(id_patient);
	
	if(patient_status == 0){
		val_patient_status = 0;
		//$("#middle_name_message").html('<img src="'+url_site+'assets/images/no.png" border="0">');
        $('#patient_status').css("box-shadow","0 0 5px rgba(255,0,0,1)","border","1px solid rgba(255,0,0,0.8)");
	}else{
		val_patient_status = 1;
		//$("#middle_name_message").html('<img src="'+url_site+'assets/images/ok.png" border="0">');
        $('#patient_status').css("box-shadow","0 0 5px #00CC00","border","1px solid #003300");

	}		
	$.ajax({ 
		   type: "POST",       
		   url: url_site+"assets/data/update_status_patient.php",
		   cache: false,
		   data: "url_site="+url_site+"&id_partner="+id_partner+"&id_patient="+id_patient+"&patient_status="+patient_status,
			success: function(msg){
			console.log("datos recibidos, respuesta: "+msg);
			
			$("#msg_status_patient").html('<div class="alert alert-success"><strong>!Muchas gracias! La información se ha guardado correctamente</strong></div>');


			$("#tbl_search").html('');
			//Top();
			setTimeout(function(){
				$("#msg_status_patient").html('');
			},2000);


		  }
		});
					
}
/*
    function restarFechas(){

       // var horaAcordada = document.getElementById("hora_acordada").value;
        //var horaReal = document.getElementById("hora_real").value;


        var horaAcordada = '30:00';
        var horaReal = '29:10';//$("#countdown_val").val();		
		console.log("tiempo real:"+horaReal);
        //Separa las horas y los minutos en un array(también llamado arreglo o vector) de 2 posiciones, separandolo por el carácter de los ":".
        var arrayHoraAcordada= horaAcordada.split(":");
        //Separa las horas y los minutos en un array(también llamado arreglo o vector) de 2 posiciones, separandolo por el carácter de los ":".
        var arrayHoraReal= horaReal.split(":");
        //El parseInt es necesario para convertir el string devuelto por el split a un número entero para poder realizar operaciones matemáticas.
        var diferenciaHoras = parseInt(arrayHoraAcordada[0]) - parseInt(arrayHoraReal[0]);
        var diferenciaMinutos = parseInt(arrayHoraAcordada[1]) - parseInt(arrayHoraReal[1]);
        //Aquí hay que comprobar que los minutos no sean negativos, si es así, hay que hacer lo que comentaba anteriormente.
        if(diferenciaMinutos<0){ 
            //.Esta parte seguro que eres capaz de hacerla tú :)
        }
        //Muestra el resultado en el textfield de abajo
       // document.getElementById("resultado").value=diferenciaHoras+":"+diferenciaMinutos;
	   
   var start_time =  '30:00';
     var end_time = '29:10';

       var ress_t =  new Date(end_time) - new Date( start_time);  

 


  console.log('nuevo valor: '+ress_t+', tiempor transcurrido: '+diferenciaHoras + ':' + diferenciaMinutos);
    }	
*/
function Vonline_status(){
	var id_partner = $("#id_partner").val();
	var online_status  = $("#online_status").val();
	var url_site = $("#url_paht").val();
	var time = $("#countdown_val").val();
	var arrayT = 0;
	//alert("tiem:"+time);
	
	$("#msg_pat").html('<div class="alert alert-success"><strong>Actualizado</strong></div>');

	$.ajax({ 
		   type: "POST",       
		   url: url_site+"assets/data/online_status.php",
		   cache: false,
		   data: "url_site="+url_site+"&id_partner="+id_partner+"&online_status="+online_status,
			success: function(msg){
			//console.log("datos recibidos, respuesta: "+msg+" ---  id_partner="+id_partner+"&online_status="+online_status);
			

				if(online_status == 1){//conectado
					setTimeout(function(){
					$("#msg_pat").html('<div class="alert alert-success" role="alert"> Si recibes llamada, colócate como<strong> "OCUPADO"</strong> o seguirás recibiendo llamadas.</div>');
					},1000);	
				
					$("#countdown_t").html("");
					//$("#countdown_val").val("");
					clearInterval(online_s);
					s = 1800; //número de segundos a contar 60seg = 1  minuto 5400 | 900 -> 15 min| 1800 -> 30 min
					// conteno
					clearInterval(t_g);	
					sp = 1;				
					//send time
					 arrayT = time.split(":");	
					 time = '00:'+(arrayT[0]-1)+':'+arrayT[1];			
					
							$.ajax({ 
								   type: "POST",       
								   url: url_site+"assets/data/update_add_time.php",
								   cache: false,
								   data: "url_site="+url_site+"&id_partner="+id_partner+"&time="+time,
									success: function(msg){
									//console.log("tiempo transcurrido: "+time+", respuesta: "+msg);
								  }
								});	
												
					
				}else{//ocupado
					 //ejecuta cronometro
					 s = 900; //número de segundos a contar 60seg = 1  minuto 5400 | 900 -> 15 min | 1800 -> 30 min
					 online_s = setInterval(cron, 1000);
					 //ejecutar timer
					 sp = 1; //número de segundos a contar 60seg = 1  minuto 5400 | 900 -> 15 min | 1800 -> 30 min
					 t_g = setInterval(time_elapsed, 1000);

					setTimeout(function(){
				$("#msg_pat").html('<div class="alert alert-danger" role="alert"> Debes de poner <strong>"CONECTADO"</strong> para poder recibir Videollamadas COVID-19.</div>');
					},1000);	

				}

		  }
		});	
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

