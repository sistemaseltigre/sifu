<?php

namespace App\Http\Controllers\eventos;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\eventos\eventosModel as evento;
use Auth;
use Session;
use DB;
use \App\usuarioModel as usuario;
use \App\configuracion\administradorModel as admin;
use \App\configuracion\profesorModel as profesor;
class eventosController extends Controller
{
	public function index()
	{
		return view('eventos.miseventos');
	}
	public function todos_los_eventos()
	{
		return view('eventos.todosloseventos');
	}
	public function mostrar()
	{
		
		return view('eventos.mostrar_eventos');
	}
	public function create(Request $request)
	{
		$calendario=new evento;
		$calendario->titulo=$request['txtEvento'];
		$calendario->inicio=$request['inicio'];
		$calendario->fin=$request['fin'];
		$calendario->allDay=$request['allday'];
		$calendario->rol_id=Auth::user()->rolid;
		$calendario->create_id=Auth::user()->id;
		$calendario->save();
		echo json_encode(array('status'=>'success','evento_id'=>$calendario->id,'allDay'=>$calendario->allDay,'creador'=>Session::get('name') ));
	}
	public function getEventos(Request $request)
	{
		$datos=evento::where('rol_id','=',Auth::user()->rolid)->where('create_id','=',Auth::user()->id)->get();

		$event_array = array();
		$nombre='';
		foreach ($datos as $row) {
			if($row->rol_id==1)
			{
				$usuario=admin::find(Auth::user()->id);
				$nombre=$usuario->nombre;
			}
			else
				if($row->rol_id==2)
				{
					$usuario=profesor::find(Auth::user()->id);
					$nombre=$usuario->nombre_profesor;
				}
				$allday = ($row->allDay == "true") ? true : false;
				$event_array[] = array(
					'id' => $row->id,
					'title' => $row->titulo,
					'start' =>$row->inicio,
					'end' =>$row->fin,
					'allDay'=>$allday,
					'creado'=>$nombre

					);
			}
			echo json_encode($event_array);
		}
		public function getAll(Request $request)
		{
			$datos=evento::all();
			$event_array = array();
			foreach ($datos as $row) {
				if($row->rol_id==1)
				{
					$usuario=admin::find($row->create_id);
					$nombre=$usuario->nombre;
				}
				else
					if($row->rol_id==2)
					{
						$usuario=profesor::find($row->create_id);
						$nombre=$usuario->nombre_profesor;
					}
					$allday = ($row->allDay == "true") ? true : false;
					$event_array[] = array(
						'id' => $row->id,
						'title' => $row->titulo,
						'start' =>$row->inicio,
						'end' =>$row->fin,
						'allDay'=>$allday,
						'creado'=>$nombre

						);
				}
				echo json_encode($event_array);
			}
			public function mostrar_eventos(Request $request)
			{
				$eventos=evento::all();
				$event_array = array();
				
						$datos =DB::connection(Session::get('dbName'))->table('eventos')
						->join('administrador', 'administrador.idadministrador', '=', 'eventos.create_id')			
						->groupBy('eventos.id')->get();
						foreach ($datos as $row) {
							$allday = ($row->allDay == "true") ? true : false;
							$event_array[] = array(
								'id' => $row->id,
								'title' => $row->titulo,
								'start' =>$row->inicio,
								'end' =>$row->fin,
								'allDay'=>$allday,
								'creado'=>$row->nombre,
								'color'=>'red'

								);
						}
					
							$datos =DB::connection(Session::get('dbName'))->table('eventos')
							->leftjoin('profesor', 'profesor.idprofesor', '=', 'eventos.create_id')
							->leftjoin('materias_profesor', 'materias_profesor.profesor_id', '=', 'profesor.idprofesor')
							->leftjoin('materias_alumno', 'materias_alumno.materia_id', '=', 'materias_profesor.materia_id')
							->leftjoin('alumno', 'alumno.idalumno', '=', 'materias_alumno.alumno_id')
							->leftjoin('representante', 'representante.idrepresentante', '=', 'alumno.representante_id')
							->where('representante.idrepresentante', '=',Auth::user()->id)
							->groupBy('eventos.id')->get();
							foreach ($datos as $row) {
								$allday = ($row->allDay == "true") ? true : false;
								$event_array[] = array(
									'id' => $row->id,
									'title' => $row->titulo,
									'start' =>$row->inicio,
									'end' =>$row->fin,
									'allDay'=>$allday,
									'creado'=>$row->nombre_profesor

									);
							}
							
					
					echo json_encode($event_array);
				}

				public function update(Request $request)
				{
					$calendario=evento::find($request['eventid']);
					if($calendario->rol_id==Auth::user()->rolid && $calendario->create_id==Auth::user()->id)
					{

						$calendario->inicio=$request['inicio'];
						$calendario->fin=$request['fin'];
						$calendario->allDay=$request['allday'];
						$calendario->save();
						echo json_encode(array('status'=>'success'));
					}
					else
						echo json_encode(array('status'=>'error'));
				}
				public function delete($id)
				{

					$calendario=evento::find($id);
					if($calendario->rol_id==Auth::user()->rolid && $calendario->create_id==Auth::user()->id)
					{
						$calendario->delete();
						echo json_encode(array('status'=>'success'));
					}
					else
					{
						echo json_encode(array('status'=>'error'));	
					}
				}
			}
