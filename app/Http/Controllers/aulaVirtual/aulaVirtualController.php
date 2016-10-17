<?php

namespace App\Http\Controllers\aulaVirtual;

use Illuminate\Http\Request;
use \App\aulaVirtual\aulaVirtualModel as aulaVirtual;
use DB;
use App;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Database\MySqlConnection;
use Illuminate\Database\Connection;
use Artisan;
use Hash;
use Session;
use \App\colegio\registroModel as registro;
use \App\usuario\usuarioModel;
use \App\configuracion\administradorModel as administrador;
use Mail;
use Validator;
class aulaVirtualController extends Controller
{
	public function index()
	{
		return view('aulaVirtual.crear');
	}

	public function crear_aula(Request $request){
		$aulaVirtual 			= new aulaVirtual();
		$aulaVirtual->idusuario 	= $request->idusuario;
		$aulaVirtual->asunto		= $request->asunto;
		$aulaVirtual->descripcion 	= $request->descripcion;
		$aulaVirtual->cantidad		= $request->cantidad;
		$aulaVirtual->fecha 		= $request->fecha;	
		$aulaVirtual->save();
	}

	public function aula(Request $request){
		return view('aulaVirtual.aula',$request);
	}
}