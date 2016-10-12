<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use DB;
use \App\dbManager;
use Session;
class horarioModel extends Model
{
   protected $connection ='default';
  public function __construct()
    {
          dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='horario';
  protected $primaryKey='idhorario';
  public $timestamps = false; 
  protected $fillable = array('materia_id', 'profesor_id', 'seccion_id','horas_curso','dia','hora_inicio','hora_final','colegio_id');



  public static function validarChoque($request)
  {
    $num=horarioModel::where('dia','=',$request['cmbDia'])
    ->where('profesor_id','=',$request['cmbProfesor'])
    ->where( function  ( $query) use ($request)  { 
      $query->where ('hora_inicio','<=',$request['txtHoraInicio'])
      ->where ('hora_final','>=',$request['txtHoraInicio'])
      ->orWhere( function  ( $query2) use ($request)  {
        $query2-> where ('hora_inicio','<=',$request['txtHoraFinal'])
        -> where ('hora_final','>=',$request['txtHoraFinal']); });})
    ->count();
    return $num;

  }
  public static function validarChoque_materias($request)
  {
    $num=horarioModel::where('dia','=',$request['cmbDia'])
    ->where('seccion_id','=',$request['cmbSeccion'])
    ->where( function  ( $query) use ($request)  { 
      $query->where ('hora_inicio','<=',$request['txtHoraInicio'])
      ->where ('hora_final','>=',$request['txtHoraInicio'])
      ->orWhere( function  ( $query2) use ($request)  {
        $query2-> where ('hora_inicio','<=',$request['txtHoraFinal'])
        -> where ('hora_final','>=',$request['txtHoraFinal']); });})
    ->count();
    return $num;

  }
  public static function validarDia($request)
  {
    $num=horarioModel::where('dia','=',$request['cmbDia'])
    ->where('seccion_id','=',$request['cmbSeccion'])
    ->where('materia_id','=',$request['cmbMateria'])->count();
    return $num;
  }
  public static function validarMateria($request)
  {
    $num=horarioModel::where('materia_id','=',$request['cmbMateria'])
    ->where('seccion_id','=',$request['cmbSeccion'])->count();
    return $num;

                     //si el numero es mayor a 0 es porque la seccion tiene materia asignada, a su vez tiene profesor

  }
  public static function validarProfesor($request)
  {
    $num=horarioModel::where('materia_id','=',$request['cmbMateria'])
    ->where('seccion_id','=',$request['cmbSeccion'])
    ->where('profesor_id','=',$request['cmbProfesor'])->count();
    return $num;
  }
  public static function validarHoras($request)
  {
    $horas=horarioModel::where('materia_id','=',$request['cmbMateria'])
    ->where('seccion_id','=',$request['cmbSeccion'])->get();
    return $horas;
  }
  public static function getHoras($idseccion,$idmateria)
  {
    $horas=horarioModel::where('materia_id','=',$idmateria)
    ->where('seccion_id','=',$idseccion)->get();
    return $horas;
  }
  public function materia()
  {
    return $this->belongsTo('\App\configuracion\materiaModel');
  }
  public function seccion()
  {
    return $this->belongsTo('\App\configuracion\seccionModel');
  }
}
