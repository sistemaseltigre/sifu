<?php

namespace App\Http\Controllers\preinscripcion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\gradoModel;
use \App\datos\alumnoModel;
use \App\datos\delegadoModel;
use \App\datos\representanteModel;
use DB;
use \App\configuracion\documentosModel as documentos;

class preinscripcionController extends Controller
{
 public function index()
 {
  $grados =gradoModel::numRegistro();
  if($grados==0)
  {    
    return view('errors.110');
  }
   $data['grados']=gradoModel::allGrados();

   $data['pendientes']=representanteModel::where('estatus','=','pendiente')->get();
   $data['documentos']=documentos::all();
   return view('preinscripcion.index',$data);
 }

 public function representante(Request $request)
 {
  if($request['representante_id']!='')
  {
    $id_representante=representanteModel::find($request['representante_id'])->count();
    
  }
  else
  {
    $id_representante=0;
  }
  if($id_representante>0)
  {
    representanteModel::updateRepresentante($request);
  }
  else
  {  
    $representante = representanteModel::createRepresentante($request);

    $data=array(
      'representante_id'=>$representante
      );
    echo json_encode($data);  

  }

}
 public function delegado(Request $request)
 {
  if($request['delegado_id']!='')
  {
    $delegado_id=delegadoModel::find($request['delegado_id'])->count();
    
  }
  else
  {
    $delegado_id=0;
  }
  if($delegado_id>0)
  {
    delegadoModel::updateDelegado($request);
  }
  else
  {  
   $delegado = delegadoModel::createDelegado($request);    

    $data=array(
      'delegado_id'=>$delegado
      );
    echo json_encode($data);  

  }

}
public function cargar_representante($id)
{
  $datos=representanteModel::find($id)->toJson();
  echo $datos;
}
public function cargar_delegado($id)
{
  $datos=delegadoModel::where('representante_id','=',$id)->first()->toJson();
  echo $datos;
}
public function cargar_alumno($id)
{
  $datos =alumnoModel::join('grado','grado.idgrado','=','alumno.grado_id')
                      ->where('representante_id','=',$id)->get();

  echo view('preinscripcion.formularios.alumno.table',compact('datos'));
}

public function procesar(Request $request)
{
  $representante = representanteModel::find($request['representante_id']);
  $representante->estatus='procesado';
  $representante->save();
}

public function create_alumno(Request $request)
{
  $alumno = alumnoModel::createAlumno($request);
  $this->show_alumno($request);
}
public function show_alumno($request)
{
  $datos =alumnoModel::join('grado','grado.idgrado','=','alumno.grado_id')
                      ->where('representante_id','=',$request['representante_id'])->get();

  echo view('preinscripcion.formularios.alumno.table',compact('datos'));
}
public function edit_alumno($id)
{
  $datos=alumnoModel::find($id)->toJson();
  echo $datos;

}
public function update_alumno(Request $request)
{
  $alumno = alumnoModel::updateAlumno($request);
  $this->show_alumno($request);
}
public function delete_alumno(Request $request, $id)
{
   $datos = alumnoModel::deleteAlumno($id);
    $this->show_alumno($request);
}

public function editar_preinscripcion($id)
{
$data['representante']=representanteModel::findOrFail($id);
$data['datos']=alumnoModel::join('grado','grado.idgrado','=','alumno.grado_id')
                      ->where('representante_id','=',$id)->get();
$data['delegado']=delegadoModel::where('representante_id', $id)->first();
$data['grados']=gradoModel::allGrados();
   $data['documentos']=documentos::all();
return view('preinscripcion.edit', $data);
}
}
