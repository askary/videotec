
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
          <h2 class="text-center"> Registro  </h2>

          <div class="row align-items-center">
            
  <input name="valid_name" id="valid_name" type="hidden" value="0" />
<input name="valid_consecutive_number" id="valid_consecutive_number" type="hidden" value="0" /> 
<input name="valid_number_of_categories" id="valid_number_of_categories" type="hidden" value="0" />
<input name="valid_category" id="valid_category" type="hidden" value="0" />



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
                         <label for="name"> Nombre&nbsp;<i data-placement="bottom"  data-toggle="tooltip" title="Escribir  nombre de pelicula" class="fa fa-question-circle"></i></label>
                          <span class="message" id="name_message">asasas</span>
                       </div>
                        <div class="input-group">
                        <input type="text" required placeholder="Ingrese nombre de película" id="name" name="name" class="form-control" onChange="Vname();">    
                        <span class="input-group-addon"><i class="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
                      </div>         
                      <!--2-->
                      <div class="row">
                        <div class="col-md-6">
                              <div class="form-group">
                                <div class="textForm"><label for="consecutive_number"> Número consecutivo<i data-placement="bottom"  data-toggle="tooltip" title="Escribir  ap. paterno" class="fa fa-question-circle"></i>&nbsp;</label><span class="message" id="consecutive_number_message"></span></div>
                                <div class="input-group">
                                 <input type="text" required placeholder="Número consecutivo" id="consecutive_number" name="consecutive_number" class="form-control" onChange="Vconsecutive_number();" >   
                                <span class="input-group-addon"><i class="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
                              </div>            
                        </div>
                         <div class="col-md-6">
                              <div class="form-group">
                                <div class="textForm">
                                  <label for="number_of_categories">Número de categoría <i data-placement="bottom"  data-toggle="tooltip" title="Escribir número de categoría" class="fa fa-question-circle"></i>&nbsp;</label><span class="message" id="number_of_categories_message"></span></div>
                                <div class="input-group">
                                  <input type="text" required placeholder="Número de categoría" id="number_of_categories" name="number_of_categories" class="form-control" onChange="Vnumber_of_categories();">  
                                 <span class="input-group-addon"><i class="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
                              </div>             
                         </div>
                    </div>                      

        <div class="form-group">
            <div class="textForm"><label for="term" class="txt_form">Categoría</label><span class="messageAlert" id="category_message"></span></div>
            <div class="input-group">
             <select class="form-control"  name="category" id="category" onchange="Vcategory();" >
              <option value="0" selected>Seleccione una opción</option>
              <option value="1" >Acepto</option>
    
            </select>    	       
            <span class="input-group-addon"><i class="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
        </div>
                         
                
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






          </div><!-- /.row -->
        </div><!-- /.container -->
      </section><!-- /feature -->
<script src="<?= $url_paht;?>assets/javascript/register.js"></script>
<link href="<?= $url_paht;?>assets/stylesheets/register.css" rel="stylesheet" type="text/css" /> 