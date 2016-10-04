<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
use DB;
class gradoModel extends Model
{
	 protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='grado';
  protected $primaryKey='idgrado';
  public $timestamps = false; 
  protected $fillable = array('idgrado','grado','periodo_id','grado_id','colegio_id');

public static function allGrados()
{
  $datos =  gradoModel::join('periodo', 'grado.periodo_id', '=', 'periodo.idperiodo')
            ->where('periodo.estatus','=','activo')
            ->orderBy('idgrado','asc')->get();
            return $datos;
}
public static function numRegistro()
{
  $datos =  gradoModel::join('periodo', 'grado.periodo_id', '=', 'periodo.idperiodo')
            ->where('periodo.estatus','=','activo')
            ->count();
            return $datos;
}
  public function seccionModel()
  {
    return $this->hasMany('App\configuracion\seccionModel','grado_id','idgrado');
  }
}
