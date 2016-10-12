<?php

namespace App\mensualidad;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class cuotas extends Model
{
   protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
       protected $table='mensualidad';
 protected $primaryKey='id';
 public $timestamps = false; 
 protected $fillable = array('detalles_cuotas_id','alumno_id','pagos_id','estatus');
 public function detalles()
{
  return $this->belongsTo('App\configuracion\detalles_cuotasModel','detalles_cuotas_id','id');
}
}
