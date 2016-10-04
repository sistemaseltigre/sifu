<?php

namespace App\profesor;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class carga_notaModel extends Model
{
	 protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='carga_nota';
  protected $primaryKey='idcarga_nota';
  public $timestamps = false; 
  protected $fillable = array('materia_id','profesor_id','seccion_id','alumno_id','corte1','corte2','corte3','corte4','corte5','corte6','corte7','corte8','corte9','corte10','definitiva');
}
