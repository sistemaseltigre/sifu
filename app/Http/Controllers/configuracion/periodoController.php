<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\periodoModel;
class periodoController extends Controller
{
   public function index()
  {
    $datos['periodos'] =periodoModel::all();
    return view('configuracion.periodo.index',$datos);
  }
  public function create(Request $request)
  {
    $datos= new periodoModel;
   $datos->periodo=$request['txtDesde'].' / '.$request['txtHasta'];
   $datos->estatus='inactivo';
    $datos->save();
    $this->show();

  }
  public function show()
  {
    $periodos =periodoModel::all();
    echo view('configuracion.periodo.table',compact('periodos'));    

  }
  public function edit($id)
  {
    $datos=periodoModel::find($id)->toJson();
    echo $datos;
  }
  public function update(Request $request)
  {
    $datos=periodoModel::find($request['id']);
    $datos->periodo=$request['txtDesde'].' / '.$request['txtHasta'];
    $datos->save();
    $this->show();

  }
  public function delete($id)
  {
    $datos = periodoModel::find($id);
    $datos->delete();
    $this->show();
  }
  public function activar($id)
  {
    $num=periodoModel::where('estatus','=','activo')->count();
    if($num>0)
    {
      
    $periodo=periodoModel::where('estatus','=','activo')->first();
    $periodo->estatus='inactivo';
    $periodo->save();
    }

     $periodo=periodoModel::find($id);
    $periodo->estatus='activo';
    $periodo->save();

    return redirect("/config_periodo");


  }
  public function desactivar($id)
  {   

     $periodo=periodoModel::find($id);
    $periodo->estatus='inactivo';
    $periodo->save();

    return redirect("/config_periodo");


  }
}
