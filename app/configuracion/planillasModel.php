<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class planillasModel extends Model
{
  protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
   protected $table='planillas';
  protected $primaryKey='id';
  public $timestamps = false; 
  protected $fillable = array('formato','contenido');
  public function accesos()
  {
   return $this->hasMany('App\configuracion\accesoModel','planilla_id','id');
  }
}
