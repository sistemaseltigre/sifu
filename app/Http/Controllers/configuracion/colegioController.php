<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\configuracion\colegioModel as colegio;
class colegioController extends Controller
{
   public function index()
   {
   	$data['colegio']=colegio::all()->first();
   	return view('configuracion.colegio.index',$data);
   }
}
