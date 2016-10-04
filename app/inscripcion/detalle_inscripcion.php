<?php

namespace App\inscripcion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class detalle_inscripcion extends Model
{
	protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='detalles_inscripcion';
 protected $primaryKey='iddetalles_inscripcion';
 public $timestamps = false; 
 protected $fillable = array('descripcion','inscripcion_id','colegio_id');
}
