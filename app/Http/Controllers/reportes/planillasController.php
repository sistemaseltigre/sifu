<?php

namespace App\Http\Controllers\reportes;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\inscripcion\alumnos_inscritos as alumnos;
use App\inscripcion\seccion_alumno as seccion;
use App\datos\alumnoModel as alumno;
use \App\configuracion\periodoModel;
class planillasController extends Controller
{
	public function certificado()
	{		
		$data['alumnos']=alumnos::all();
		return view('reportes.planillas.certificado.index',$data);
	}
	public function buscar_certificado($id)
	{

		$data['periodo']=periodoModel::where('estatus','activo')->first();
		$data['alumno']=alumno::find($id);
		$data['seccion']=seccion::where('seccion_id','=',$id)->first();
		echo view('reportes.planillas.certificado.contenido',$data);
	}
}
