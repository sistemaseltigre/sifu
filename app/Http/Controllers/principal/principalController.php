<?php

namespace App\Http\Controllers\principal;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\datos\alumnoModel as alumno;
use \App\mensualidad\cuotas;
use \App\pagos\pagosModel as pagos;
use \App\pagos\detalles_pagosModel as detalles_pagos;
use DB;
use Hash;
use Session;
use Auth;
use Crypt;
use App\inscripcion\alumnos_inscritos as inscrito;
use App\usuario\usuarioModel as usuario;
use App\validation;
class principalController extends Controller
{
	public function index()
	{
    	//total de alumnos
		$data['total_alumnos']=alumno::where('estatus','=','inscrito')->get()->count();

    	//total de alumnos morosos
		$data['total_morosos']=cuotas::whereHas('detalles', function($q)
		{
			$q->where('fecha','<=',date('Y-m-31'));

		})->where('estatus','=','pendiente')->groupBy('alumno_id')->get()->count();

		// pagos registrados
		$data['pagos_registrados']=pagos::all()->count();

		// pagos pendientes
		$data['pagos_pendientes']=pagos::where('estatus','=','pendiente')->get()->count();


		
		//echo dd(json_encode($viewData));
		$data['metodos']=DB::connection(Session::get('dbName'))->table('alumnos_inscritos')
		->join('cuotas','cuotas.id','=','alumnos_inscritos.cuota_id')
		->groupBy('alumnos_inscritos.cuota_id')		
		->get(['cuotas.descripcion', DB::raw('count(cuotas.descripcion) as total')]);

//$orders = Orders::paginate(5);
		return view('plantilla.index',$data);
	}
	public function getMetodosPagos()
	{
		$metodos =DB::connection(Session::get('dbName'))->table('alumnos_inscritos')
		->join('cuotas','cuotas.id','=','alumnos_inscritos.cuota_id')
		->groupBy('alumnos_inscritos.cuota_id')		
		->get(['cuotas.descripcion', DB::raw('count(cuotas.descripcion) as total')]);


//mensualidad
		$labels = array();
		$totals = array();
		$color = array();
		$total=DB::connection(Session::get('dbName'))->table('alumnos_inscritos')
		->join('cuotas','cuotas.id','=','alumnos_inscritos.cuota_id')
		->groupBy('alumnos_inscritos.cuota_id')		
		->count();
		foreach ($metodos as $metodo) {
			array_push($labels, $metodo->descripcion);
			array_push($totals, $metodo->total);
			array_push($color, sprintf('#%06X', mt_rand(0, 0xFFFFFF)));
		}
		$viewData = array('labels'=>$labels, 
			'datasets'=> array (array(
			'data'=>$totals,
			'backgroundColor'=>$color,
			'label'=>$labels,
			'total'=>$total)
			));
		return json_encode($viewData);

	}
	public function getFormasPagos()
	{
		$total =detalles_pagos::count();
		$formas=DB::connection(Session::get('dbName'))->table('detalles_pagos')
		->groupBy('detalles_pagos.tipo')		
		->get(['detalles_pagos.tipo', DB::raw('count(detalles_pagos.tipo) as total')]);
		$labels = array();
		$totals = array();
		$color = array();
		foreach ($formas as $forma) {

			array_push($labels, $forma->tipo);
			array_push($totals, $forma->total);
			array_push($color, sprintf('#%06X', mt_rand(0, 0xFFFFFF)));
		}

		$viewData = array('labels'=>$labels, 
			'datasets'=> array (array(
			'data'=>$totals,
			'backgroundColor'=>$color,
			'label'=>$labels,
			'total'=>$total)
			));
		return json_encode($viewData);

	}

	public function cambiar_clave()
	{
		return view('cambiarClave.index');
	}
	public function update(Request $request)
	{
		$claveActual=$request['txtClaveActual'];
		$claveNueva=$request['txtClaveNueva'];
		$claveNueva2=$request['txtClaveNueva2'];

	
		$comprobar=validation::validateCurrentPassword($claveActual);
		
		if(!$comprobar)
		{			
		Session::flash('error', 'Contraseña Actual no es valida.');
        return redirect('/cambiar-clave');
		}
		else
			if(trim($claveNueva)!=trim($claveNueva2))
		{			
		Session::flash('error', 'Las Contraseñas no coinciden.');
        return redirect('/cambiar-clave');
		}
		else
		{
			$usuario=usuario::find(Auth::user()->idusuario);
			$usuario->password=Hash::make($claveNueva);
			$usuario->save();
			Session::flash('valido', 'Contraseña cambiada con exito.');
        return redirect('/cambiar-clave');
		}
	}
}
