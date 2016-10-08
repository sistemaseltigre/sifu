<?php

namespace App\Http\Controllers\pagos;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\datos\alumnoModel;
class pagosController extends Controller
{
   public function registrar()
   {
    $data['alumnos']=alumnoModel::all();
    return view('pagos.index',$data);
   }
}
