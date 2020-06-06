<?php

Class homeController Extends baseController {

public function index(){
	/*** set a template variable ***/
        $this->registry->template->welcome = 'Welcome to AM';
	/*** load the index template ***/
        $this->registry->template->id_page=1;
        $this->registry->template->show('home');
}

}


?>
