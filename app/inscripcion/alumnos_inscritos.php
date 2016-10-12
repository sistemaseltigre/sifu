<?php

namespace App\inscripcion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class alumnos_inscritos extends Model
{
	 protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='alumnos_inscritos';
  protected $primaryKey='id';
  public $timestamps = false; 
  protected $fillable = array('alumno_id','cuota_id','fecha','periodo_id','seguro','condicion');

public function periodo()
{
  return $this->belongsTo('App\configuracion\periodoModel');
}

public function alumno()
{
  return $this->belongsTo('App\datos\alumnoModel');
}
}
