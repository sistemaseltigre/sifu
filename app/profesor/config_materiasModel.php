<?php

namespace App\profesor;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class config_materiasModel extends Model
{
	 protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
 protected $table='config_materias';
 protected $primaryKey='idconfig_materias';
 public $timestamps = false; 
 protected $fillable = array('materia_id','profesor_id','tipo','cortes','puntos','maximanota');


 public function materia()
  {
    return $this->belongsTo('\App\configuracion\materiaModel');
  }
  public function horario()
  {
    return $this->belongsTo('\App\configuracion\horarioModel','profesor_id','profesor_id');
  }
}
