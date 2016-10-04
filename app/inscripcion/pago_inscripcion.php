<?php

namespace App\inscripcion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class pago_inscripcion extends Model
{
	protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
       protected $table='pago_inscripcion';
 protected $primaryKey='idpago_inscripcion';
 public $timestamps = false; 
 protected $fillable = array('tipo','monto','banco','referencia','inscripcion_id','colegio_id');
}
