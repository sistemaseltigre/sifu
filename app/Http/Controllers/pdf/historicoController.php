<?php

namespace App\Http\Controllers\pdf;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\datos\alumnoModel as alumno;
use \App\mensualidad\cuotas;
use \App\pagos\pagosModel as pagos;
use \App\inscripcion\alumnos_inscritos as alumnos_inscritos;
use \App\configuracion\colegioModel as colegio;
use \App\pagos\detalles_pagosModel as detalles;
class historicoController extends Controller
{
	public function pagos_general($id)
	{
		$data['pagos']=pagos::where('estatus','=','procesado')->where('alumno_id','=',$id)->get();
		$data['alumno']=alumno::find($id);
		$data['cuotas']=cuotas::where('alumno_id','=',$id)->get();

		$view =  \View::make('pdf.historico.pagos_general', $data)->render();
		$pdf = \App::make('dompdf.wrapper');
		$pdf->loadHTML($view);
		return $pdf->stream('pagos.pdf', array("Attachment" => false));
		exit(0);
	}
	public function mensualidad($id)
	{
		$data['pagos']=pagos::where('estatus','=','procesado')->where('alumno_id','=',$id)->get();
		$data['alumno']=alumno::find($id);
		$data['cuotas']=cuotas::where('alumno_id','=',$id)->get();

		$view =  \View::make('pdf.historico.mensualidad', $data)->render();
		$pdf = \App::make('dompdf.wrapper');
		$pdf->loadHTML($view);
		return $pdf->stream('mensualidad.pdf', array("Attachment" => false));
		exit(0);
	}
	public function detalles_pagos_general($id)
	{

		$data['id']=$id;
		$data['pagos']=pagos::find($id);
		

		$view =  \View::make('pdf.historico.pagos_especifico', $data)->render();
		$pdf = \App::make('dompdf.wrapper');
		$pdf->loadHTML($view);
		return $pdf->stream('pagos_especifico.pdf', array("Attachment" => false));
		exit(0);
	}

	public function metodo_pago($id)
	{
		$data['alumnos']=alumnos_inscritos::where('cuota_id','=',$id)->get();		
		$data['colegio']=colegio::all()->first();        

		$view =  \View::make('pdf.historico.metodo_pago', $data)->render();
		$pdf = \App::make('dompdf.wrapper');
		$pdf->loadHTML($view);
		return $pdf->stream('historico metodo de pago.pdf', array("Attachment" => false));
		exit(0);
	}

	public function tipo_pago($tipo)
	{
		$data['detalles']=detalles::where('tipo','=',$tipo)->where('estatus','=','procesado')->get();		
		$data['colegio']=colegio::all()->first();        
		$view =  \View::make('pdf.historico.tipo_pago', $data)->render();
		$pdf = \App::make('dompdf.wrapper');
		$pdf->loadHTML($view);
		return $pdf->stream('historico tipo de pago.pdf', array("Attachment" => false));
		exit(0);
	}
}
