
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
            
  <input name="validname" id="validname" type="hidden" value="0" />
<input name="validmiddle_name" id="validmiddle_name" type="hidden" value="0" /> 
<input name="validlast_name" id="validlast_name" type="hidden" value="0" />
<input name="validFull_Name" id="validFull_Name" type="hidden" value="0" />
<input name="validYearBirthday"  id="validYearBirthday" type="hidden" value="0" />    
<input name="validMonthBirthday"  id="validMonthBirthday" type="hidden" value="0" />    
<input name="validDayBirthday"  id="validDayBirthday" type="hidden" value="0" /> 
<input name="valid_email"  id="valid_email" type="hidden" value="0" />             
<input name="validPassword"  id="validPassword" type="hidden" value="0" /> 
<input name="validPassword2"  id="validPassword2" type="hidden" value="0" />
<input name="validMachPassword"  id="validMachPassword" type="hidden" value="0" />
<input name="validCellPhone"  id="validCellPhone" type="hidden" value="0" />


            <!-- .page-section -->
            <div class="page-section">
              <div class="d-xl-none">
                <!--<button class="btn btn-danger btn-floated" type="button" data-toggle="sidebar"><i class="fa fa-th-list"></i></button>-->
              </div><!-- .card -->
              <div id="base-style" class="card">
                <!-- .card-body -->
                <div class="card-body">
	                <div class="text-center"  id="div_message_ok"></div>

                  <!-- .form -->
                  <form id="form_div">
                
                    <!-- .fieldset -->
                    <fieldset>
					  <!-- .form-group -->
                               <div id = "nameError"  aling="center" class="textError text-center"></div>
                      <!--1-->
                      <div class="form-group">
                        <div class="textForm">
                         <label for="name"> Nombre&nbsp;<i data-placement="bottom"  data-toggle="tooltip" title="Escribir  nombre(s)" class="fa fa-question-circle"></i></label>
                          <span class="message" id="name_message"></span>
                       </div>
                        <div class="input-group">
                        <input type="text" required placeholder="Ingrese su Nombre(s)" id="name" name="name" class="form-control" onChange="Vname();">    
                        <span class="input-group-addon"><i class="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
                      </div>         
                      <!--2-->
                      <div class="row">
                        <div class="col-md-6">
                              <div class="form-group">
                                <div class="textForm"><label for="middle_name"> Número consecutivo<i data-placement="bottom"  data-toggle="tooltip" title="Escribir  ap. paterno" class="fa fa-question-circle"></i>&nbsp;</label><span class="message" id="middle_name_message"></span></div>
                                <div class="input-group">
                                 <input type="text" required placeholder="Ingrese su Apellido Paterno" id="middle_name" name="middle_name" class="form-control" onChange="VMiddle_name();" >   
                                <span class="input-group-addon"><i class="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
                              </div>            
                        </div>
                         <div class="col-md-6">
                              <div class="form-group">
                                <div class="textForm">
                                  <label for="last_name">Número de categoria <i data-placement="bottom"  data-toggle="tooltip" title="Escribir  ap. materno" class="fa fa-question-circle"></i>&nbsp;</label><span class="message" id="last_name_message"></span></div>
                                <div class="input-group">
                                  <input type="text" required placeholder="Ingrese su Apellido  Materno" id="last_name" name="last_name" class="form-control" onChange="Vlast_name();">  
                                 <span class="input-group-addon"><i class="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
                              </div>             
                         </div>
                    </div>                      

        <div class="form-group">
            <div class="textForm"><label for="term" class="txt_form">Categoria</label><span class="messageAlert" id="terms_and_conditions_message"></span></div>
            <div class="input-group">
             <select class="form-control"  name="terms_and_conditions" id="terms_and_conditions" onchange="Vterms_and_conditions();" >
              <option value="0" selected>Seleccione una opción</option>
              <option value="1" >Acepto</option>
    
            </select>    	       
            <span class="input-group-addon"><i class="glyphicon glyphicon-ok form-control-feedback"></i></span></div>
        </div>
                         
                
				<div id="center_box_save">
                 
					<div id="error_msg" class="alert alert-danger alert-dismissable">
						<div  class="text-center"><strong >Uups!</strong> Verifique su información.</div>
					</div>
					<div class="div_btn_register">
					<div id="loading_submit" style="display:none;"><img src='<?= $url_site;?>assets/images/ajax-loader.gif'/></div>
						<button id="btn_save" name="btn_save" type="button" class="btn btn-primary btn-lg btn-block">Guardar</button>
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
<script src="<?= $url_paht;?>assets/javascript/register_covid_patient.js"></script>
<link href="<?= $url_paht;?>assets/stylesheets/register_covid.css" rel="stylesheet" type="text/css" /> 