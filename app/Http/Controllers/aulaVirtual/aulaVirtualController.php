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
use Auth;
class aulaVirtualController extends Controller
{
	public function index()
	{
		$data['dbname'] = Session::get('dbName');  
		$data['idusuario'] = Auth::user()->id;
		$data['aulas'] = \App\aulaVirtual\aulaVirtualModel::where('idusuario', '=', Auth::user()->id)->paginate(5);
		return view('aulaVirtual.crear',$data);
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
	public function disponible()
	{
		$data['dbname'] = Session::get('dbName');  
		$data['idusuario'] = Auth::user()->id;
		$data['aulas'] = \App\aulaVirtual\aulaVirtualModel::paginate(5);
		$data['aulas'] =DB::connection(Session::get('dbName'))->table('aulavirtual')
		->join('materias_profesor', 'materias_profesor.profesor_id', '=', 'aulavirtual.idusuario')
		->join('materias_alumno', 'materias_alumno.materia_id', '=', 'materias_profesor.materia_id')
		->join('alumno', 'alumno.idalumno', '=', 'materias_alumno.alumno_id')
		->where('alumno.idalumno', '=',Auth::user()->id)
		->get();
		return view('aulaVirtual.disponible',$data);
	}
	public function show_admin()
	{
		$data['dbname'] = Session::get('dbName');  
		$data['idusuario'] = Auth::user()->id;
		$data['aulas'] = \App\aulaVirtual\aulaVirtualModel::where('idusuario', '=', $idusuario)->paginate(5);
		$datos =DB::connection(Session::get('dbName'))->table('aulavirtual')
		->join('materias_profesor', 'materias_profesor.profesor_id', '=', 'aulavirtual.idusuario')
		->join('materias_alumno', 'materias_alumno.materia_id', '=', 'materias_profesor.materia_id')
		->join('alumno', 'alumno.idalumno', '=', 'materias_alumno.alumno_id')
		->where('alumno.idalumno', '=',Auth::user()->id)
		->get();
		echo view('aulaVirtual.aulas');
	}
}