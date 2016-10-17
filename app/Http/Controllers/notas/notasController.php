<?php

namespace App\Http\Controllers\notas;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\inscripcion\alumnos_inscritos as alumnos;
use Auth;
class notasController extends Controller
{
    public function index()
    {
    	$data['alumnos']=alumnos::whereHas('periodo', function($q)
   {
    $q->where('estatus', '=', 'activo');

  })->whereHas('alumno', function($q)
  {
    $q->where('representante_id', '=', Auth::user()->id);

  })->get();
    	return view('notas.index',$data);
    }
}
