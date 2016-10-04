<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\configuracion\seccionModel;
use DB;
use \App\dbManager;
use Session;
class seccionModel extends Model
{
   protected $connection ='default';
  public function __construct()
    {
          dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='seccion';
  protected $primaryKey='idseccion';
  public $timestamps = false; 
  protected $fillable = array('seccion', 'grado_id','colegio_id','capacidad');

public static function allSeccion()
{
  $datos =DB::connection(Session::get('dbName'))->table('seccion')
            ->join('grado', 'grado.idgrado', '=', 'seccion.grado_id')
            ->join('periodo', 'grado.periodo_id', '=', 'periodo.idperiodo')
            ->where('periodo.estatus','=','activo')
            ->get();
            return $datos;
}
  public static function getSeccion($id)
  {
    return seccionModel::where('grado_id','=',$id)->get();
  }
  public function gradoModel()
  {
    return $this->belongsTo('App\configuracion\gradoModel');
  }
}
