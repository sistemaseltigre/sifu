<?php

namespace App\Http\Controllers\pdf;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\inscripcion\alumnos_inscritos as alumno;
use \App\configuracion\colegioModel as colegio;
use App\inscripcion\seccion_alumno as seccion;
use DB;
use Session;
class alumnosController extends Controller
{

	public function inscritos()
	{
		$data['colegio']=colegio::all()->first();         
		$data['alumnos']=alumno::all();
		 $view =  \View::make('pdf.alumnos.inscritos', $data)->render();
        $pdf = \App::make('dompdf.wrapper');
        $pdf->loadHTML($view);
        return $pdf->stream('alumnos_inscritos.pdf');
	}
	public function seccion($id)
	{
		$data['colegio']=colegio::all()->first();         
		$data['alumnos']=seccion::where('seccion_id','=',$id)->get();
		$data['seccion']=seccion::where('seccion_id','=',$id)->first();
		 $view =  \View::make('pdf.alumnos.seccion', $data)->render();
        $pdf = \App::make('dompdf.wrapper');
        $pdf->loadHTML($view);
        return $pdf->stream('lista_de_alumnos.pdf');
	}
	public function morosos()
	{
		$data['colegio']=colegio::all()->first();         
		$data['alumnos']=DB::connection(Session::get('dbName'))->table('mensualidad')
		->join('detalles_cuotas', 'detalles_cuotas.id', '=', 'mensualidad.detalles_cuotas_id')
		->join('alumno', 'alumno.idalumno', '=', 'mensualidad.alumno_id')
		->join('grado', 'grado.idgrado', '=', 'alumno.grado_id')
		->where('mensualidad.estatus','=','pendiente')
		->where('detalles_cuotas.fecha','<=',date('Y-m-31'))
		->select('*', DB::raw('count(*) as total'))
		->groupBy('mensualidad.alumno_id')
		->get();
		 $view =  \View::make('pdf.alumnos.morosos', $data)->render();
        $pdf = \App::make('dompdf.wrapper');
        $pdf->loadHTML($view);
        return $pdf->stream('alumnos morosos.pdf');
	}
}
