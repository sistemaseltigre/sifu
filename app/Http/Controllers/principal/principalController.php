<?php

namespace App\Http\Controllers\principal;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\datos\alumnoModel as alumno;
use \App\mensualidad\cuotas;
use \App\pagos\pagosModel as pagos;
use DB;
use Session;
use App\inscripcion\alumnos_inscritos as inscrito;
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

		$labels = array();
		$totals = array();
		$color = array();
		foreach ($metodos as $metodo) {

			array_push($labels, $metodo->descripcion);
			array_push($totals, $metodo->total);
			array_push($color, sprintf('#%06X', mt_rand(0, 0xFFFFFF)));
		}

		$viewData = array('labels'=>$labels, 
			'datasets'=> array (array(
			'data'=>$totals,
			'backgroundColor'=>$color)
			));
		return json_encode($viewData);

	}
}
