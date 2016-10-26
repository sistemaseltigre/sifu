<?php

namespace App\Http\Controllers\pdf;

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
   public function cargar_planilla($planilla_id, $alumno_id)
   {
   	$data['periodo']=periodoModel::where('estatus','activo')->first();
		$data['alumno']=alumno::find($alumno_id);
		$data['seccion']=seccion::where('seccion_id','=',$alumno_id)->first();
    $data['planillas']=planillas::find($planilla_id);
		 $view =  \View::make('pdf.planillas.index', $data)->render();
        $pdf = \App::make('dompdf.wrapper');
        $pdf->loadHTML($view);
        return $pdf->stream($data['planillas']->formato.'.pdf');
   }
}
