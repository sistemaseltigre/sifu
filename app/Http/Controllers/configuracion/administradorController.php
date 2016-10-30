<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\administradorModel as administrador;
use \App\usuario\usuarioModel;
use Auth;
use Session;
use Hash;
use Mail;
class administradorController extends Controller
{
	public function index()
	{

		$datos =administrador::all();
		return view('configuracion.administrador.index',compact('datos'));


	}
	public function create(Request $request)
	{
		if($request->ajax())
		{
			$num=administrador::where('cedula','=',$request['txtCedula'])->count();

			if($num>0)
			{
				return 1;
			}



			$logitud = 8;
			$psswd = substr( md5(microtime()), 1, $logitud);
			$datos= new administrador;
			$datos->cedula=$request['txtCedula'];
			$datos->nombre=$request['txtNombre'];
			$datos->telefono=$request['txtTelefono'];
			$datos->email=$request['txtEmail'];
			$datos->save();
			$usuario= new usuarioModel;
			$usuario->usuario=$request['txtCedula'];
			$usuario->password=Hash::make($psswd);
			$usuario->rolid=1;
			$usuario->id=$datos->idadministrador;
			$usuario->save();

			Mail::send('configuracion.administrador.correo.clave', array('enlace'=>Session::get('dbName'),'usuario'=>$request['txtCedula'],'clave'=>$psswd,'colegio'=>Session::get('colegio')), function ($m)  use ($datos){
				$m->from('donotreply@sifusp.com', 'SIFU');

				$m->to($datos->email, $datos->nombre)->subject('Bienvenido a SIFU');
			});
			$this->show();
		}  
		else
			return redirect('errors.503');

	}
	public function show()
	{
		$datos =administrador::all();
		echo view('configuracion.administrador.table',compact('datos'));    

	}
	public function edit($id)
	{
		$datos=administrador::find($id)->toJson();
		echo $datos;
	}
	public function update(Request $request)
	{
		$datos=administrador::find($request['id']);
		$datos->cedula=$request['txtCedula'];
		$datos->nombre=$request['txtNombre'];
		$datos->telefono=$request['txtTelefono'];
		$datos->email=$request['txtEmail'];
		$datos->save();
		$this->show();

	}
	public function delete($id)
	{
		$datos = administrador::find($id);
		if($datos->tipo=='superAdmin')
		{
			echo "1";	
		}
		else
		{
			$validar=administrador::where('tipo','=','superAdmin')->where('idadministrador','=',Auth::user()->id)->count();
			if($validar>0)
			{
				$datos->delete();
			$this->show();
			}
			else
			{
				echo "2";
			}
			
		}
	}
}
