$(document).ready(function(){

	show_info();
	setInterval(show_info, 5000);
	


});




function show_info(){
	var url_site = $("#url_paht").val();
	var array = 0;
	
	$.ajax({ 
	   type: "POST",       
	   url: url_site+"assets/data/show_info.php",
	   cache: false,
	   data: "url_site="+url_site,
		success: function(msg){		
		console.log("mostrar estatus: "+msg);
			//array = msg.split('|');
			$("#cont").html(msg);
	  }
	});		
}

