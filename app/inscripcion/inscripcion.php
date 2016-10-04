<?php

namespace App\inscripcion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class inscripcion extends Model
{
	 protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='inscripcion';
  protected $primaryKey='idinscripcion';
  public $timestamps = false; 
  protected $fillable = array('alumno_id','cuota_id','fecha','periodo_id','colegio_id');
}
