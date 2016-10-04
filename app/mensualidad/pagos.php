<?php

namespace App\mensualidad;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class pagos extends Model
{
       protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
       protected $table='pagos';
 protected $primaryKey='id';
 public $timestamps = false; 
 protected $fillable = array('fecha','alumno_id','monto','estatus');
}
