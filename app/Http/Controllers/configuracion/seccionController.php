<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\seccionModel;
use \App\configuracion\gradoModel;
use \App\configuracion\periodoModel;
class seccionController extends Controller
{
 public function index()
 {
  $datos['secciones'] =seccionModel::allSeccion();
  $datos['grados']=gradoModel::allGrados();

  $periodo=periodoModel::where('estatus', '=', 'activo')->first();
  if(isset($periodo->idperiodo))
  {
     return view('configuracion.seccion.index',$datos);
  }
  else
  {
    return view('configuracion.periodo.requisito.index');
  }
 
}
public function create(Request $request)
{

$num= seccionModel::where('seccion','=',trim($request['txtSeccion']))
                  ->where('grado_id','=',$request['cmbGrado'])->count();
if($num>0)
  return 1;

  $datos=new seccionModel;
  $datos->seccion=trim($request['txtSeccion']);
  $datos->capacidad=trim($request['txtCapacidad']);
  $datos->grado_id=$request['cmbGrado'];
  $datos->colegio_id=1;
  $datos->save();

  $this->show();

}
public function show()
{
  $secciones =seccionModel::allSeccion();
  echo view('configuracion.seccion.table',compact('secciones'));    

}
public function edit($id)
{
  $datos=seccionModel::find($id)->toJson();
  echo $datos;
}
public function update(Request $request)
{
  $datos=seccionModel::find($request['id']);
  $datos->seccion=$request['txtSeccion'];
  $datos->capacidad=$request['txtCapacidad'];
  $datos->grado_id=$request['cmbGrado'];
  $datos->colegio_id=1;
  $datos->save();
  $this->show();

}
public function delete($id)
{
  $datos = seccionModel::find($id);
  $datos->delete();
  $this->show();
}

public function getSeccion(Request $request, $id)
{
  if($request->ajax())
  { 
    $seccion=seccionModel::where('grado_id','=',$id)->get();
    return response()->json($seccion);
  }
}
}
