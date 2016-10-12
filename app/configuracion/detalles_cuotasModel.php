<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class detalles_cuotasModel extends Model
{
        protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
 protected $table='detalles_cuotas';
 protected $primaryKey='id';
 public $timestamps = false; 
 protected $fillable = array('descripcion','monto','cuota_id','fecha');
}
