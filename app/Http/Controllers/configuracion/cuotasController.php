<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\cuotasModel;
use \App\configuracion\periodoModel;
use \App\configuracion\detalles_cuotasModel as detalles;

class cuotasController extends Controller
{
  public function index()
  {
   $datos['cuotas'] =cuotasModel::whereHas('periodo', function($q)
   {
    $q->where('estatus', '=', 'activo');

  })->get();
   $datos['periodo'] =periodoModel::where('estatus', '=', 'activo')->first();
   $periodo=periodoModel::where('estatus', '=', 'activo')->first();
   if(isset($periodo->idperiodo))
   {
    return view('configuracion.pagos.cuotas.index',$datos);
  }
  else
  {
    return view('configuracion.periodo.requisito.index');
  }
}

public function nueva($id=null)
{
  if($id!=null)
  {
    $cuotas=cuotasModel::find($id);
    $datos['id']=$id;
    $datos['descripcion']=$cuotas->descripcion;
  }
 $datos['periodo'] =periodoModel::where('estatus', '=', 'activo')->first();
 $periodo=periodoModel::where('estatus', '=', 'activo')->first();

 return view('configuracion.pagos.cuotas.detalles.index',$datos);
}

public function create(Request $request)
{
  if($request['cuota_id']!='')
  {
    $id_cuotas=cuotasModel::find($request['cuota_id'])->count();
    
  }
  else
  {
    $id_cuotas=0;
  }
  if($id_cuotas>0)
  {
    $cuotas=cuotasModel::find($request['cuota_id']);
    $cuotas->descripcion=$request['txtDescripcion'];
    $cuotas->periodo_id=$request['periodo_id'];
    $cuotas->save();
  }
  else
  {  
    $cuotas = new cuotasModel;
    $cuotas->descripcion=$request['txtDescripcion'];
    $cuotas->periodo_id=$request['periodo_id'];
    $cuotas->save();

    $data=array(
      'cuotas_id'=>$cuotas->id
      );
    echo json_encode($data);  
  }
}
public function create_detalles(Request $request)
{
  $fecha_pago=explode("/", $request['txtFecha']);
  $fecha_pago=$fecha_pago[2].'-'.$fecha_pago[1].'-'.$fecha_pago[0];
  $detalles = new detalles;
  $detalles->fecha=$fecha_pago;
  $detalles->monto=$request['txtMonto'];
  $detalles->cuota_id=$request['cuota_id'];
  $detalles->save();
  $this->show_detalles($request['cuota_id']);
}
public function show_detalles($id)
{
  $detalles_cuotas = detalles::where('cuota_id','=',$id)->get();
  echo view('configuracion.pagos.cuotas.detalles.table',compact('detalles_cuotas'));
}
public function update_detalles(Request $request)
{
  $fecha_pago=explode("/", $request['txtFecha']);
  $fecha_pago=$fecha_pago[2].'-'.$fecha_pago[1].'-'.$fecha_pago[0];
  $detalles = detalles::where('cuota_id','=',$request['cuota_id'])->first();
  $detalles->fecha=$fecha_pago;
  $detalles->monto=$request['txtMonto'];
  $detalles->cuota_id=$request['cuota_id'];
  $detalles->save();
  $this->show_detalles($request['cuota_id']);
}
public function delete_detalles($id)
{
  $detalles = detalles::find($id);
  $detalles->delete();
  $this->show_detalles($detalles->cuota_id);
}
public function edit_detalles($id)
{
  $datos=detalles::find($id)->toJson();
    echo $datos;
}
public function buscar_detalles($id)
{
 $detalles_cuotas = detalles::where('cuota_id','=',$id)->get();
  echo view('configuracion.inscripcion.cuotas.table',compact('detalles_cuotas'));
}
}
