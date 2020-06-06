<?php

/**
 * @copyright Copyright (c) 2011, Inmediatum Technology Services, S.A. de C.V.
 * @author cjserrato
 * Created on: Dec 9, 2011 at 6:45:28 PM
 * @since
 * @version
 * 
 */

/**
 * Description of db
 *
 * @author cjserrato
 */
class db{

/*** Declare instance ***/
private static $instance = NULL;

/**
*
* the constructor is set to private so
* so nobody can create a new instance using new
*
*/
private function __construct() {
  /*** maybe set the db name here later ***/
}

/**
*
* Return DB instance or create intitial connection
*
* @return object (PDO)
*
* @access public
*
*/
public static function getInstance() {

if (!self::$instance)
    {
    self::$instance = new PDO("mysql:host=localhost;dbname=periodic_table", 'username', 'password');;
    self::$instance-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
return self::$instance;
}

/**
*
* Like the constructor, we make __clone private
* so nobody can clone the instance
*
*/
private function __clone(){
}

} /*** end of class ***/

?>
