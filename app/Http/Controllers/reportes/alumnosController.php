<?php

namespace App\Http\Controllers\reportes;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\inscripcion\alumnos_inscritos as alumno;
use \App\configuracion\gradoModel;
use \App\configuracion\seccionModel;
use App\inscripcion\seccion_alumno as seccion;
use \App\mensualidad\cuotas;
use DB;
use Session;
class alumnosController extends Controller
{
	public function inscritos()
	{
		$data['alumnos']=alumno::all();
		return view('reportes.alumnos.inscritos',$data);
	}
	public function seccion()
	{
		$data['grados']=gradoModel::allGrados();
		$data['seccion']=seccionModel::allSeccion();
		$data['seccion_id']='';
		return view('reportes.alumnos.seccion',$data);
	}
	public function buscar_seccion($id)
	{
		$data['alumnos']=seccion::where('seccion_id','=',$id)->get();
		$data['seccion_id']=$id;

		echo view('reportes.alumnos.table_seccion',$data);
	}
	public function morosos()
	{

		$data['alumnos']=DB::connection(Session::get('dbName'))->table('mensualidad')
		->join('detalles_cuotas', 'detalles_cuotas.id', '=', 'mensualidad.detalles_cuotas_id')
		->join('alumno', 'alumno.idalumno', '=', 'mensualidad.alumno_id')
		->join('grado', 'grado.idgrado', '=', 'alumno.grado_id')
		->where('mensualidad.estatus','=','pendiente')
		->where('detalles_cuotas.fecha','<=',date('Y-m-31'))
		->select('*', DB::raw('count(*) as total'))
		->groupBy('mensualidad.alumno_id')
		->get();

		return view('reportes.alumnos.morosos',$data);
	}
}
