<?php

namespace App\Http\Controllers\representante;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\datos\alumnoModel as alumno;
use Auth;
use DB;
use Session;
class horarioController extends Controller
{
	public function index()
	{
		$data['alumno']=alumno::where('representante_id','=',Auth::user()->id)->first();
		echo view('representante.horario.index',$data);    

	}
	public function getHorario($id)
	{
		$datos =DB::connection(Session::get('dbName'))->table('horario')
		->join('materia', 'horario.materia_id', '=', 'materia.idmateria')
		->join('seccion', 'horario.seccion_id', '=', 'seccion.idseccion')
		->join('seccion_alumno', 'seccion.idseccion', '=', 'seccion_alumno.seccion_id')
		->join('grado', 'seccion.grado_id', '=', 'grado.idgrado')
		->join('periodo', 'grado.periodo_id', '=', 'periodo.idperiodo')
		->where('seccion_alumno.alumno_id', '=',$id)
		->where('periodo.estatus', '=','activo')
		->get();
 /*$datos =DB::connection(Session::get('dbName'))->table('horario')
            ->join('profesor', 'horario.profesor_id', '=', 'profesor.idprofesor')
            ->join('materia', 'horario.materia_id', '=', 'materia.idmateria')            
            ->join('seccion', 'horario.seccion_id', '=', 'seccion.idseccion')
            ->where('horario.profesor_id', '=',$id)
            ->get();*/
            $event_array = array();
            foreach ($datos as $row) {
            	$event_array[] = array(
            		'id' => $row->idhorario,
            		'title' => 'Seccion: '.$row->seccion,
            		'description'=>$row->materia,
            		'start' =>$row->dia.'T'.$row->hora_inicio,
            		'end' =>$row->dia.'T'.$row->hora_final,
            		'fecha' => '2014-01-01',
    'color' => '#'.rand(000000,999999), //this is what I'm was looking for!
    );
            }
            echo json_encode($event_array);

        }
    }
