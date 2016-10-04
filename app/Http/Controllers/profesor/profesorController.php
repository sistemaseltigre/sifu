<?php

namespace App\Http\Controllers\profesor;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\horarioModel;
use \App\profesor\config_materiasModel as materia;
use DB;
use Session;
use \App\configuracion\materiaModel;
use \App\configuracion\seccionModel;

class profesorController extends Controller
{
  public function index()
  {
    return view('profesor.index');
  }
  public function cargar_notas()
  {

   $data['materias']= DB::connection(Session::get('dbName'))->table('horario')
   ->join('profesor', 'horario.profesor_id', '=', 'profesor.idprofesor')
   ->join('materia', 'horario.materia_id', '=', 'materia.idmateria')
   ->join('seccion', 'horario.seccion_id', '=', 'seccion.idseccion')
   ->join('grado', 'seccion.grado_id', '=', 'grado.idgrado')
   ->join('periodo', 'grado.periodo_id', '=', 'periodo.idperiodo')
   ->where('horario.profesor_id', '=',session()->get('id'))
   ->where('periodo.estatus', '=','activo')
   ->groupby('seccion_id')->distinct()->get();
   // $data['materias']=horarioModel::where('profesor_id','=',session()->get('id'))->groupby('seccion_id')->distinct()->get();
    
    
   return view('profesor.cargarNotas.index',$data);
  }
  public function lista_alumnos($materia_id, $seccion_id)
  {
    $config=materia::where('profesor_id','=',session()->get('id'))
    ->where('materia_id','=',$materia_id);
    if($config->count()>0)
    {      
      $config=$config->first();
      $data['cortes']=$config->cortes;
      $data['maximanota']=$config->maximanota;
      if($config->tipo=='porcentaje')
      {
        $data['tipo']='%';
        $data['definitiva']=$config->cortes*$config->maximanota;
      }
      else
        if($config->tipo=='puntos')
        {
          $data['tipo']='pts';
          $data['definitiva']='100%';
        }
        else
          if($config->tipo=='letras')
          {
           $data['tipo']='';
           $data['definitiva']='';
         }
         
       }
       else
       {
         return view('profesor.errors.config_materia');
       }
       $data['alumnos']= DB::connection(Session::get('dbName'))->table('alumno')
       ->join('materias_alumno','materias_alumno.alumno_id','=','alumno.idalumno')
       ->join('seccion_alumno','seccion_alumno.alumno_id','=','materias_alumno.alumno_id')
       ->leftJoin('carga_nota','carga_nota.alumno_id','=','alumno.idalumno')
       ->where('seccion_alumno.seccion_id','=',$seccion_id)
       ->where('materias_alumno.materia_id','=',$materia_id)->get();
       //echo dd($alumnos);
       $data['materia']=materiaModel::where('idmateria',$materia_id)->first();
       $data['seccion']=seccionModel::where('idseccion',$seccion_id)->first();
       return view('profesor.cargarNotas.lista_alumnos',$data);
     }
   }
