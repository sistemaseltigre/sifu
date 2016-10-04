<?php

namespace App\Http\Controllers\profesor;

use Illuminate\Http\Request;
use Auth;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\materias_profesorModel as materiasProfesor;
use \App\profesor\config_materiasModel as materias;
class config_materiasController extends Controller
{
  public function index()
  {
   $data['materias']=materiasProfesor::where('estatus','=','inactivo')->where('profesor_id','=',session()->get('id'))->get();
   $data['listas']=materias::where('profesor_id','=',session()->get('id'))->get();
   return view('profesor.materias.index',$data);
 }
 public function create(Request $request)  
 {
  $datos=materiasProfesor::where('materia_id','=',$request['id'])
  ->where('profesor_id','=',session()->get('id'))->first();
  //echo dd($request['id'].' '.session()->get('id'));
  $datos->estatus='activo';
  $datos->save();

  $materias= new materias;
  $materias->materia_id=$request['id'];
  $materias->profesor_id=session()->get('id');
  $materias->tipo=$request['cmbPonderacion'];
  $materias->cortes=$request['txtCortes'];
  $materias->maximanota=$request['txtNota'];
  $materias->save();
  
}
public function edit($id)  
 {
  $datos=materias::find($id)->toJson();
  echo $datos;
}
public function update(Request $request)
{
  $datos=materias::find($request['id']);
  $datos->tipo=$request['cmbPonderacion'];
  $datos->cortes=$request['txtCortes'];
  $datos->maximanota=$request['txtNota'];
  $datos->save();
}
public function delete($id,$materia_id)
{
  $datos=materiasProfesor::where('materia_id','=',$materia_id)
  ->where('profesor_id','=',session()->get('id'))->first();
  $datos->estatus='inactivo';
  $datos->save();
  $datos = materias::find($id);
  $datos->delete();
}
}
