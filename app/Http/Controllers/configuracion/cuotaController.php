<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\cuotaModel;
use \App\configuracion\periodoModel;
class cuotaController extends Controller
{
   public function index()
 {
  $datos['cuotas'] =cuotaModel::whereHas('periodo', function($q)
{
    $q->where('estatus', '=', 'activo');

})->get();
  $datos['periodo'] =periodoModel::where('estatus', '=', 'activo')->first();
  $periodo=periodoModel::where('estatus', '=', 'activo')->first();
  if(isset($periodo->idperiodo))
  {
    return view('configuracion.cuota.index',$datos);
  }
  else
  {
    return view('configuracion.periodo.requisito.index');
  }

  
}
public function create(Request $request)
{
  $datos= new cuotaModel;
  $datos->inscripcion=$request['txtInscripcion'];
  $datos->seguro=$request['txtSeguro'];
  $datos->otro=$request['txtOtro'];
  $datos->cuota=$request['txtCuota'];
  $datos->periodo_id=$request['periodo_id'];
  $datos->colegio_id=1;
  $datos->save();
  $this->show();

}
public function show()
{
  $datos['cuotas'] =cuotaModel::whereHas('periodo', function($q)
{
    $q->where('estatus', '=', 'activo');

})->get();
  echo view('configuracion.cuota.table',$datos);    

}
public function edit($id)
{
  $datos=cuotaModel::find($id)->toJson();
  echo $datos;
}
public function update(Request $request)
{
  $datos=cuotaModel::find($request['id']);
 $datos->inscripcion=$request['txtInscripcion'];
  $datos->seguro=$request['txtSeguro'];
  $datos->otro=$request['txtOtro'];
  $datos->cuota=$request['txtCuota'];
  $datos->periodo_id=$request['periodo_id'];
  $datos->colegio_id=1;
  $datos->save();
  $this->show();

}
public function delete($id)
{
  $datos = cuotaModel::find($id);
  $datos->delete();
  $this->show();
}
public function getInscripcion($id)
{
  $metodo=cuotaModel::find($id)->toJson();
  echo $metodo;
}
}
