<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\datos\alumnoModel;

class preinscripcionController extends Controller
{
    public function index()
 {
  $datos['pendientes']=alumnoModel::where('estatus','pendiente')->get();
  $datos['inscritos']=alumnoModel::where('estatus','inscrito')->get();
  return view('configuracion.preinscripcion.index',$datos);
}
}
