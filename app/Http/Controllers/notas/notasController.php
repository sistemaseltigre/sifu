<?php

namespace App\Http\Controllers\notas;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\inscripcion\alumnos_inscritos as alumnos;
use Auth;
use DB;
use Session;
use \App\profesor\config_materiasModel as materia;
use \App\configuracion\materiaModel;
class notasController extends Controller
{
    public function index()
    {
    	$data['alumnos']=alumnos::whereHas('periodo', function($q)
   {
    $q->where('estatus', '=', 'activo');

  })->whereHas('alumno', function($q)
  {
    $q->where('representante_id', '=', Auth::user()->id);

  })->get();
    	return view('notas.index',$data);
    }

    public function getMaterias($id, Request $request)
    {
      if($request->ajax())
  { 
    $materias =DB::connection(Session::get('dbName'))->table('materia')
   ->join('materias_alumno', 'materias_alumno.materia_id', '=', 'materia.idmateria')
   ->join('alumno', 'alumno.idalumno', '=', 'materias_alumno.alumno_id')
   ->where('alumno.idalumno', '=',$id)->get();
    return response()->json($materias);
  }
    }
     public function getNotas($materia_id,$alumno_id, Request $request)
    {
      if($request->ajax())
  { 
    $config=materia::where('materia_id','=',$materia_id);
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
       ->leftJoin('carga_nota','carga_nota.alumno_id','=','alumno.idalumno')
       ->where('carga_nota.alumno_id','=',$alumno_id)
       ->where('carga_nota.materia_id','=',$materia_id)->get();
       //echo dd($alumnos);
       $data['materia']=materiaModel::where('idmateria',$materia_id)->first();
       return view('notas.notas',$data);
  }
    }
}
