<?php

namespace App\Http\Controllers\mensaje;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\profesorModel as profesor;
use \App\configuracion\administradorModel as administrador;
use \App\datos\alumnoModel as alumno;
use \App\datos\delegadoModel as delegado;
use \App\datos\representanteModel as representante;
use \App\mensaje\mensajeModel as mensaje;
use \App\mensaje\detalles_mensajeModel as detalles;
use Auth;
use Session;
use DB;
use Illuminate\Support\Collection as Collection;
class mensajeController extends Controller
{
	public function index()
	{
		//echo dd(Auth::user()->idusuario);
		$mensajes_=detalles::where('destino_id','=',Session::get('id'))
		->where('destino_rol','=',Auth::user()->rolid)->get();
		//echo dd($mensajes_);
		$mensajes=$this->mensajes_entrantes($mensajes_);
		return view('mensaje.index',[
			'mensajes' => $mensajes
			]);
	}
	public function redactar()
	{
		if(Auth::user()->rolid==1)
		{
			$datos['profesores']=profesor::all();
			$datos['alumnos']=alumno::all();
			$datos['representantes']=representante::all();
			$datos['delegados']=delegado::all();
		}
		else
		{
			$datos['profesores']=DB::connection(Session::get('dbName'))->table('profesor')
			->join('materias_profesor', 'materias_profesor.profesor_id', '=', 'profesor.idprofesor')
			->join('materias_alumno', 'materias_alumno.materia_id', '=', 'materias_profesor.materia_id')
			->join('alumno', 'alumno.idalumno', '=', 'materias_alumno.alumno_id')
			->where('alumno.representante_id','=',Auth::user()->id)
			->groupBy('profesor.idprofesor')
			->get();
			$datos['administradores']=administrador::all();
		}
		return view('mensaje.redactar',$datos);
	}
	public function create(Request $request)
	{
		$mensaje= new mensaje;
		$mensaje->autor_id=Session::get('id');
		$mensaje->autor_rol=Auth::user()->rolid;
		$mensaje->asunto=$request['txtAsunto'];
		$mensaje->fecha=date("Y-m-d H:i:s"); 
		$mensaje->save();

		$destino =$request->input();
		if(isset($destino['cmbDestino']))
		{
			for($i = 0; $i < count($destino['cmbDestino']); $i++) {
				$destinatario=explode('-',$destino['cmbDestino'][$i]);
				$detalles= new detalles;
				$detalles->mensaje_id=$mensaje->idmensaje;
				$detalles->destino_rol=$destinatario[0];
				$detalles->destino_id=$destinatario[1];
				$detalles->autor_rol=Auth::user()->rolid;
				$detalles->autor_id=Session::get('id');
				$detalles->mensaje=$request['txtMensaje'];
				$detalles->fecha=date("Y-m-d H:i:s"); 
				$detalles->save();
			}
		}
		return redirect('/mensajes');
	}
	public function mostrar_entrantes($id)
	{
		$mensajes_=detalles::where('mensaje_id','=',$id)->get();
		//echo dd($mensajes_);
		$mensajes=$this->mensajes_entrantes($mensajes_);
		//echo dd($mensajes);
		return view('mensaje.mostrar',[
			'mensajes' => $mensajes
			]);
	}
	public function enviados()
	{
		$mensajes_=mensaje::where('autor_id','=',Auth::user()->idusuario)->
		where('autor_rol','=',Auth::user()->rolid)->get();
		$mensajes=$this->mensajes_enviados($mensajes_);
		//echo dd($mensajes);
		return view('mensaje.enviados',[
			'mensajes' => $mensajes
			]);
	}
	public function ver_mensajes($id)
	{
		$mensajes_=mensaje::where('idmensaje','=',$id)->get();
		$asunto=detalles::where('mensaje_id','=',$id)->first();
		$mensajes=$this->mensajes_entrantes($mensajes_);
		return view('mensaje.ver_mensajes',[
			'mensajes' => $mensajes,
			'asunto' => $asunto
			]);
	}
	public function entradas()
	{
		$mensajes_=detalles::where('destino_id','=',Auth::user()->idusuario)
		->where('destino_rol','=',Auth::user()->rolid)->get();
		$mensajes=$this->mensajes_entrantes($mensajes_);
		return view('mensaje.entradas',[
			'mensajes' => $mensajes
			]);
	}

	public function responder(Request $request)
	{
		$mensaje= mensaje::find($request['mensaje_id']);
		$detalles=detalles::where('mensaje_id','=',$request['mensaje_id'])->first();
		$destino_id='';
		$destino_rol='';
		if($mensaje->autor_rol==Auth::user()->rolid && $mensaje->autor_id==Session::get('id'))
		{
			$destino_id=$detalles->destino_id;
			$destino_rol=$detalles->destino_rol;
		}
		else
		{
			//echo dd($mensaje);
			$destino_id=$mensaje->autor_id;
			$destino_rol=$mensaje->autor_rol;
		}
		
		$detalles= new detalles;
		$detalles->mensaje_id=$request['mensaje_id'];
		$detalles->destino_rol=$destino_rol;
		$detalles->destino_id=$destino_id;
		$detalles->autor_rol=Auth::user()->rolid;
		$detalles->autor_id=Session::get('id');
		$detalles->mensaje=$request['txtMensaje'];
		$detalles->fecha=date("Y-m-d H:i:s"); 
		$detalles->save();

	}
	public function mensajes_enviados($mensajes)
	{


		$mensajes_=array();
		foreach ($mensajes as $mensaje)
		{
			foreach ($mensaje->detalles as $detalles)
			{
				if($detalles->autor_rol==$mensaje->autor_rol && $detalles->autor_id==$mensaje->autor_id)
				{
					if($mensaje->destino_rol==1)
					{
						$administrador=administrador::find($mensaje->autor_id);
						$mensajes_[]=array(
							'id'=>$mensaje->mensajes->idmensaje,
							'nombre'=>$administrador->nombre,
							'asunto'=>$mensaje->mensajes->asunto,
							'fecha'=>$mensaje->mensajes->fecha,
							'mensaje'=>$mensaje->mensaje
							);

					}
					if($detalles->destino_rol==2)
					{
						$profesor=profesor::find($detalles->destino_id);
						$mensajes_[]=array(
							'id'=>$mensaje->idmensaje,
							'nombre'=>$profesor->nombre_profesor,
							'asunto'=>$mensaje->asunto,
							'mensaje'=>$detalles->mensaje
							);

					}
					if($detalles->destino_rol==3)
					{
						$representante=representante::find($detalles->destino_id);
						$mensajes_[]=array(
							'id'=>$mensaje->idmensaje,
							'nombre'=>$representante->nombre,
							'asunto'=>$mensaje->asunto,
							'mensaje'=>$detalles->mensaje
							);

					}
					if($detalles->destino_rol==4)
					{
						$delegado=delegado::find($detalles->destino_id);
						$mensajes_[]=array(
							'id'=>$mensaje->idmensaje,
							'nombre'=>$delegado->nombre,
							'asunto'=>$mensaje->asunto,
							'mensaje'=>$detalles->mensaje
							);

					}
					if($detalles->destino_rol==5)
					{
						$alumno=alumno::find($detalles->destino_id);
						$mensajes_[]=array(
							'id'=>$mensaje->idmensaje,
							'nombre'=>$alumno->nombre,
							'asunto'=>$mensaje->asunto,
							'mensaje'=>$detalles->mensaje
							);

					}
				}
				else
				{
					if($detalles->autor_rol==2)
					{
						$profesor=profesor::find($detalles->autor_id);
						$mensajes_[]=array(
							'id'=>$mensaje->idmensaje,
							'nombre'=>$profesor->nombre_profesor,
							'asunto'=>$mensaje->asunto,
							'mensaje'=>$detalles->mensaje
							);

					}
					if($detalles->autor_rol==3)
					{
						$representante=representante::find($detalles->autor_id);
						$mensajes_[]=array(
							'id'=>$mensaje->idmensaje,
							'nombre'=>$representante->nombre,
							'asunto'=>$mensaje->asunto,
							'mensaje'=>$detalles->mensaje
							);

					}
					if($detalles->autor_rol==4)
					{
						$delegado=delegado::find($detalles->autor_id);
						$mensajes_[]=array(
							'id'=>$mensaje->idmensaje,
							'nombre'=>$delegado->nombre,
							'asunto'=>$mensaje->asunto,
							'mensaje'=>$detalles->mensaje
							);

					}
					if($detalles->autor_rol==5)
					{
						$alumno=alumno::find($detalles->autor_id);
						$mensajes_[]=array(
							'id'=>$mensaje->idmensaje,
							'nombre'=>$alumno->nombre,
							'asunto'=>$mensaje->asunto,
							'mensaje'=>$detalles->mensaje
							);

					}
				}
			}
		}
		$mensajes=Collection::make($mensajes_);
		//echo dd($mensajes);
		return $mensajes;
	}
	public function mensajes_entrantes($mensajes)
	{


		$mensajes_=array();
		foreach ($mensajes as $mensaje)
		{					
			if($mensaje->autor_rol==1)
			{
				$administrador=administrador::find($mensaje->autor_id);
				//echo dd($mensaje->autor_id);
				$mensajes_[]=array(
					'id'=>$mensaje->mensajes->idmensaje,
					'nombre'=>$administrador->nombre,
					'asunto'=>$mensaje->mensajes->asunto,
					'fecha'=>$mensaje->mensajes->fecha,
					'mensaje'=>$mensaje->mensaje
					);

			}
			if($mensaje->autor_rol==2)
			{
				$profesor=profesor::find($mensaje->autor_id);
				//echo dd($profesor);
				$mensajes_[]=array(
					'id'=>$mensaje->mensajes->idmensaje,
					'nombre'=>$profesor->nombre_profesor,
					'asunto'=>$mensaje->mensajes->asunto,
					'fecha'=>$mensaje->mensajes->fecha,
					'mensaje'=>$mensaje->mensaje
					);

			}
			if($mensaje->autor_rol==3)
			{
				$representante=representante::find($mensaje->autor_id);
				$mensajes_[]=array(
					'id'=>$mensaje->mensajes->idmensaje,
					'nombre'=>$representante->nombre,
					'asunto'=>$mensaje->mensajes->asunto,
					'fecha'=>$mensaje->mensajes->fecha,
					'mensaje'=>$mensaje->mensaje
					);

			}
			if($mensaje->autor_rol==4)
			{
				$delegado=delegado::find($mensaje->autor_id);
				$mensajes_[]=array(
					'id'=>$mensaje->mensajes->idmensaje,
					'nombre'=>$delegado->nombre,
					'asunto'=>$mensaje->mensajes->asunto,
					'fecha'=>$mensaje->mensajes->fecha,
					'mensaje'=>$mensaje->mensaje
					);

			}
			if($mensaje->autor_rol==5)
			{
				$alumno=alumno::find($mensaje->autor_id);
				$mensajes_[]=array(
					'id'=>$mensaje->mensajes->idmensaje,
					'nombre'=>$alumno->nombre,
					'asunto'=>$mensaje->mensajes->asunto,
					'fecha'=>$mensaje->mensajes->fecha,
					'mensaje'=>$mensaje->mensaje
					);

			}
		}


		$mensajes=Collection::make($mensajes_);
		return $mensajes;
	}
}
