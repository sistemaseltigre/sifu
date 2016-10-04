<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use App;
use Session;
class profesorModel extends model 
{
	  protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }

 protected $table='profesor';
 protected $primaryKey='idprofesor';
 public $timestamps = false; 
 protected $fillable = array('cedula_profesor', 'nombre_profesor', 'telefono_profesor','email_profesor','edad_profesor','direccion_profesor','colegio_id');

    //
//

}
