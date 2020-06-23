
      <!-- feature -->
      <section class="position-relative py-5 bg-light">
        <!-- .sticker -->
        <div class="sticker">
          <div class="sticker-item sticker-top-right sticker-soften translate-x-50">
            <img src="assets/images/decoration/bubble1.svg" alt="" data-aos="fade-left">
          </div>
        </div><!-- /.sticker -->
        <!-- .container -->
        <div class="container position-relative">
          <h2 class="text-center"> Buscar  película</h2>

          <div class="row align-items-center">

            <!-- .page-section -->
            <div class="page-section">
              <div class="d-xl-none">
                <!--<button class="btn btn-danger btn-floated" type="button" data-toggle="sidebar"><i class="fa fa-th-list"></i></button>-->
              </div><!-- .card -->
              <div id="base-style" class="card">
                <!-- .card-body -->
                <div class="card-body">

                  <!-- .form -->
                  <form id="form_div">
                
                    <!-- .fieldset -->
                    <fieldset>
					  <!-- .form-group -->
                       <div id = "nameError"  aling="center" class="textError text-center"></div>
                      <!--1-->
                      <div class="form-group">
                        <div class="textForm">
                         <label for="name">&nbsp;<i data-placement="bottom"  data-toggle="tooltip" title="Escribir  nombre de pelicula" class="fa fa-question-circle"></i></label>
                          <span class="message" id="name_message"></span>
                       </div>
                        <div class="input-group">
                        <input type="text" required placeholder="Ingrese el nombre de la pelicula" id="name" name="name" class="form-control" onChange="Vname();">    
                        <span class="input-group-addon"><i class="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
                      </div>         
                      <!--2-->
                       


                         
                
				<div id="center_box_save">
                 
					<div id="error_msg" class="alert alert-danger alert-dismissable">
						<div  class="text-center"><strong >Uups!</strong> Verifique su información.</div>
					</div>
					<div class="text-center"  id="div_message_ok"></div>					
					<div class="div_btn_register">
					<div id="loading_submit" style="display:none;"><img src='<?= $url_site;?>assets/images/ajax-loader.gif'/></div>
					<div id="div_btn_save"><button id="btn_save" name="btn_save" type="button" class="btn btn-primary btn-lg btn-block">Guardar</button></div>
					<div class="response-holder"></div>
					</div><div class="height_space"></div> 
				</div>   

                      <!-- /.form-group -->
                      <!-- .form-group -->

                    </fieldset><!-- /.fieldset -->
                  </form><!-- /.form -->          
                </div>
              </div>          
            </div>

<!-- star categories -->

        <div class="col-md-3">
            <div class="card border-info mx-sm-1 p-3">
                <div class="card border-info shadow text-info p-3 my-card" ><span class="fa fa-car" aria-hidden="true"></span></div>
                <div class="text-info text-center mt-3"><h4>Cars</h4></div>
                <div class="text-info text-center mt-2"><h1>234</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-success mx-sm-1 p-3">
                <div class="card border-success shadow text-success p-3 my-card"><span class="fa fa-eye" aria-hidden="true"></span></div>
                <div class="text-success text-center mt-3"><h4>Eyes</h4></div>
                <div class="text-success text-center mt-2"><h1>9332</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-danger mx-sm-1 p-3">
                <div class="card border-danger shadow text-danger p-3 my-card" ><span class="fa fa-heart" aria-hidden="true"></span></div>
                <div class="text-danger text-center mt-3"><h4>Hearts</h4></div>
                <div class="text-danger text-center mt-2"><h1>346</h1></div>
            </div>
        </div>
        <div class="col-md-3">
            <div class="card border-warning mx-sm-1 p-3">
                <div class="card border-warning shadow text-warning p-3 my-card" ><span class="fa fa-inbox" aria-hidden="true"></span></div>
                <div class="text-warning text-center mt-3"><h4>Inbox</h4></div>
                <div class="text-warning text-center mt-2"><h1>346</h1></div>
            </div>
        </div>




<!-- end categories -->


          </div><!-- /.row -->
        </div><!-- /.container -->
      </section><!-- /feature -->


      
<script src="<?= $url_paht;?>assets/javascript/register.js"></script>
<link href="<?= $url_paht;?>assets/stylesheets/register.css" rel="stylesheet" type="text/css" /> 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
<style>
.my-card
{
    position:absolute;
    left:40%;
    top:-20px;
    border-radius:50%;
}
</style>
<?php
$movieDAO->__destruct();
?>