<?php

namespace App\Http\Controllers\reportes;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\inscripcion\alumnos_inscritos as alumnos;
use App\inscripcion\seccion_alumno as seccion;
use App\datos\alumnoModel as alumno;
use \App\configuracion\periodoModel;
use \App\configuracion\planillasModel as planillas;
class planillasController extends Controller
{
	public function index()
	{		
		$data['alumnos']=alumnos::all();
		$data['planillas']=planillas::all();
		return view('reportes.planillas.index',$data);
	}
	public function cargar_planilla($planilla_id, $alumno_id)
	{

		$data['periodo']=periodoModel::where('estatus','activo')->first();
		$data['alumno']=alumno::find($alumno_id);
		$data['seccion']=seccion::where('alumno_id','=',$alumno_id)->first();
		$data['planillas']=planillas::find($planilla_id);
		echo view('reportes.planillas.contenido',$data);
	}
	
}
