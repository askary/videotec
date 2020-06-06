<?php


Class loginController Extends baseController {

public function index(){
	/*** set a template variable ***/
        $this->registry->template->welcome = 'Welcome to Mobile Interactive';
	/*** load the index template ***/
        $this->registry->template->id_page=1;
        $this->registry->template->show('login');
}

}


?>
