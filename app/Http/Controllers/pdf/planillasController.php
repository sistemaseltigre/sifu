<?php

namespace App\Http\Controllers\pdf;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\inscripcion\alumnos_inscritos as alumnos;
use App\inscripcion\seccion_alumno as seccion;
use App\datos\alumnoModel as alumno;
use \App\configuracion\periodoModel;
class planillasController extends Controller
{
   public function certificado($id)
   {
   	$data['periodo']=periodoModel::where('estatus','activo')->first();
		$data['alumno']=alumno::find($id);
		$data['seccion']=seccion::where('seccion_id','=',$id)->first();
		 $view =  \View::make('pdf.planillas.certificado', $data)->render();
        $pdf = \App::make('dompdf.wrapper');
        $pdf->loadHTML($view);
        return $pdf->stream('certificado de estudios.pdf');
   }
}
