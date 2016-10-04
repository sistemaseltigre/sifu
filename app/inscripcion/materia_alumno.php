<?php

namespace App\inscripcion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class materia_alumno extends Model
{
	protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
    protected $table='materias_alumno';
 protected $primaryKey='idmaterias_alumno';
 public $timestamps = false; 
 protected $fillable = array('alumno_id','materia_id','colegio_id');
}
