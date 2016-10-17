<?php

namespace App\inscripcion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class seccion_alumno extends Model
{
	protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
        protected $table='seccion_alumno';
 protected $primaryKey='idseccion_alumno';
 public $timestamps = false; 
 protected $fillable = array('alumno_id','seccion_id','grado_id','colegio_id');
 public function alumno()
{
  return $this->belongsTo('App\datos\alumnoModel');
}
public function inscrito()
{
  return $this->belongsTo('App\inscripcion\alumnos_inscritos','alumno_id','alumno_id');
}
 public function seccion()
{
  return $this->belongsTo('App\configuracion\seccionModel','seccion_id','idseccion');
}
}
