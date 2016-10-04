<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\monto_inscripcionModel as monto_inscripcion;
use \App\configuracion\periodoModel;
class monto_inscripcionController extends Controller
{
   public function index()
 {
  $datos['monto_inscripcion'] =monto_inscripcion::whereHas('periodo', function($q)
{
    $q->where('estatus', '=', 'activo');

})->get();
  $datos['periodo'] =periodoModel::where('estatus', '=', 'activo')->first();
  $periodo=periodoModel::where('estatus', '=', 'activo')->first();
  if(isset($periodo->idperiodo))
  {
    return view('configuracion.pagos.inscripcion.index',$datos);
  }
  else
  {
    return view('configuracion.periodo.requisito.index');
  }

  
}
public function create(Request $request)
{
  $datos= new monto_inscripcion;
  $datos->inscripcion=$request['txtInscripcion'];
  $datos->seguro=$request['txtSeguro'];
  $datos->otro=$request['txtOtro'];
  $datos->periodo_id=$request['periodo_id'];
  $datos->save();
  $this->show();

}
public function show()
{
  $datos['monto_inscripcion'] =monto_inscripcion::whereHas('periodo', function($q)
{
    $q->where('estatus', '=', 'activo');

})->get();
  echo view('configuracion.pagos.inscripcion.table',$datos);    

}
public function edit($id)
{
  $datos=monto_inscripcion::find($id)->toJson();
  echo $datos;
}
public function update(Request $request)
{
  $datos=monto_inscripcion::find($request['id']);
 $datos->inscripcion=$request['txtInscripcion'];
  $datos->seguro=$request['txtSeguro'];
  $datos->otro=$request['txtOtro'];
  $datos->periodo_id=$request['periodo_id'];
  $datos->save();
  $this->show();

}
public function delete($id)
{
  $datos = monto_inscripcion::find($id);
  $datos->delete();
  $this->show();
}
public function getInscripcion($id)
{
  $metodo=monto_inscripcion::find($id)->toJson();
  echo $metodo;
}
}
