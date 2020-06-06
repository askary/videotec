<?php
//session_start();
//include("assets/data/session.php");
/*Global variables*/
//$id_partner = 36965;

$url_paht = 'http://'.$_SERVER['SERVER_NAME'].'/';

//setcookie("logged", $logged, time()+10);  /* expira en una hora 3600*/
//echo $_SESSION['logged'];
?>
<!DOCTYPE html>
<html lang="es">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><!-- End Required meta tags -->
    <!-- Begin SEO tag -->
    <title>Films </title>
    <meta property="og:title" content="Films ">
    <meta name="author" content="Films ">
    <meta property="og:locale" content="es_MEX">
    <meta name="description" content="sitio Films ">
    <meta property="og:description" content="Films">
    <link rel="canonical" href="home">
    <meta property="og:url" content="home">
    <meta property="og:site_name" content="Films ">

    <!-- FAVICONS -->
    <link rel="apple-touch-icon" sizes="144x144" href="<?= $url_paht; ?>assets/apple-touch-icon.png">
    <link rel="shortcut icon" href="<?= $url_paht; ?>assets/favicon.ico">
    <meta name="theme-color" content="#5C2D83"><!-- End FAVICONS -->
    <!-- GOOGLE FONT -->
    <link href="https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600" rel="stylesheet"><!-- End GOOGLE FONT -->
    <!-- BEGIN PLUGINS STYLES -->
    <link rel="stylesheet" href="<?= $url_paht; ?>assets/vendor/%40fortawesome/fontawesome-free/css/all.min.css"><!-- END PLUGINS STYLES -->    
    <!-- BEGIN PLUGINS STYLES -->
    <link rel="stylesheet" href="assets/vendor/aos/aos.css"><!-- END PLUGINS STYLES -->
    <!-- BEGIN THEME STYLES -->
    <link rel="stylesheet" href="<?= $url_paht; ?>assets/stylesheets/theme.min.css" data-skin="default">
    <link rel="stylesheet" href="<?= $url_paht; ?>assets/stylesheets/theme-dark.min.css" data-skin="dark">
    <link rel="stylesheet" href="<?= $url_paht; ?>assets/stylesheets/custom.css">
    <script>
      var skin = localStorage.getItem('skin') || 'default';
      var isCompact = JSON.parse(localStorage.getItem('hasCompactMenu'));
      var disabledSkinStylesheet = document.querySelector('link[data-skin]:not([data-skin="' + skin + '"])');
      // Disable unused skin immediately
      disabledSkinStylesheet.setAttribute('rel', '');
      disabledSkinStylesheet.setAttribute('disabled', true);
      // add flag class to html immediately
      if (isCompact == true) document.querySelector('html').classList.add('preparing-compact-menu');
	</script><!-- END THEME STYLES -->
	
	<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>

		<script type="text/javascript">
        	document.oncontextmenu = function(){return false;}
        </script> 
        	
  </head>
  <body>
    <!-- .app -->
    <main class="app app-site">
      <!--[if lt IE 10]>
      <div class="page-message" role="alert">You are using an <strong>outdated</strong> browser. Please <a class="alert-link" href="http://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</div>
      <![endif]-->
      <!-- site header -->
      <!-- .navbar -->
      <nav class="navbar navbar-expand-lg navbar-light py-4" data-aos="fade-in">
        <!-- .container -->
        <div class="container">
          <!-- .hamburger -->
          <button class="hamburger hamburger-squeeze hamburger-light d-flex d-lg-none" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button> <!-- /.hamburger -->
          <!-- .navbar-brand -->
          <a class="navbar-brand ml-auto mr-0" href="<?= $url_paht; ?>" id="logo_rd"><img src="<?= $url_paht; ?>assets/images/logo.png" height="60" />
		  </a> <!-- /.navbar-brand -->
          <!--<a class="navbar-btn  ml-auto order-lg-2" href="#"></a>&nbsp;&nbsp;-->
               		
          
		<?php
		echo ' <a class="navbar-btn btn btn-subtle-primary ml-auto order-lg-2"href="#">Buscar</a>';	
	
			
 		?>           
		  
		  
		  <div class="navbar-collapse collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mx-auto">
			
              <li class="nav-item mr-lg-3 active">
              <?php
			  if(!$_GET['rt']  || $_GET['rt'] == 'main'){
				  
			  }else{
               // echo '<a class="nav-link py-2" href="'.$url_paht.'medical_directory">Directorio</a>';
			  }
              
			  ?>
			  </li>

            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container -->
      </nav><!-- /.navbar -->
      <!-- /site header -->
	<input name="logged" id="logged" type="hidden" value="<?= $_SESSION['logged'];?>">
    <input name="url_paht" id="url_paht" type="hidden" value="<?= $url_paht;?>">
    <input name="url_preview" id="url_preview" type="hidden" value="<?= $url_preview;?>">
    <input name="id_partner" id="id_partner" type="hidden" value="<?= $_SESSION['id_partner'];?>">
    <input name="id_patients" id="id_patients" type="hidden" value="<?= $_SESSION['id_patients'];?>">
    <!-- Available classes for body: boxed , pattern1...pattern10 . Background Image - example add: data-background="assets/images/boxed_background/1.jpg"  -->