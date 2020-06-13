<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\configuracion\materiaModel;
use DB;
use Session;
use Illuminate\Support\Collection as Collection;
use \App\dbManager;
class materiaModel extends Model
{
   protected $connection ='default';
  public function __construct()
    {
          dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='materia';
  protected $primaryKey='idmateria';
  public $timestamps = false; 
  protected $fillable = array('materia','grado_id','tiempo','colegio_id','materia_id');

  public static function allMateria()
  {
    

    $materias=materiaModel::join('grado', 'grado.idgrado', '=', 'materia.grado_id')
                          ->join('periodo', 'grado.periodo_id', '=', 'periodo.idperiodo')
                          ->where('periodo.estatus','=','activo')->get();
    $datosMaterias=array();
    foreach ($materias as $materia) {
      $materiaPrelacion='';
      $prelacion=materiaModel::where('idmateria',$materia->materia_id)->get();
      foreach ($prelacion as $pre) {
        $materiaPrelacion=$pre->materia;
      }
      if(!isset($materiaPrelacion))
      {
        $materiaPrelacion='';
      }
      $datosMaterias[]=array(
        'idmateria'=>$materia->idmateria,
        'grado'=>$materia->grado,
        'materia'=>$materia->materia,
        'horas'=>$materia->tiempo,
        'prelacion'=>$materiaPrelacion
        );      
    }
    $materias=Collection::make($datosMaterias);
    return $materias;
  }
  public static function getPrelacion($id)
  {
    $datos =materiaModel::join('grado','grado.grado_id','=','materia.grado_id')
    ->where('grado.idgrado',$id)->get();
    return response()->json($datos);
  }
  public static function materias($id)
  {
    return materiaModel::where('grado_id','=',$id)->get();
  }
  public static function tiempo($id)
  {
    return materiaModel::where('idmateria', $id)->first();
  }
    public function gradoModel()
  {
    return $this->belongsTo('App\configuracion\gradoModel','grado_id','idgrado');
  }
}
