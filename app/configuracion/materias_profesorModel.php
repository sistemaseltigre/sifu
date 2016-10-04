<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class materias_profesorModel extends Model
{
	 protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='materias_profesor';
  protected $primaryKey='idmaterias_profesor';
  public $timestamps = false; 
  protected $fillable = array('materia_id','profesor_id','estatus');

  public function materia()
  {
    return $this->belongsTo('App\configuracion\materiaModel');
  }
}
