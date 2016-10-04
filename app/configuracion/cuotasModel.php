<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class cuotasModel extends Model
{
     protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
 protected $table='cuotas';
 protected $primaryKey='id';
 public $timestamps = false; 
 protected $fillable = array('descripcion','fecha','periodo_id');
 public function periodo()
    {
        return $this->belongsTo('App\configuracion\periodoModel');
    }
     public function detalles()
    {
        return $this->hasMany('App\configuracion\detalles_cuotasModel','cuota_id','id');
    }
}
