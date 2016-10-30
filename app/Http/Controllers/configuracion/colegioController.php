<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\configuracion\colegioModel as colegio;
use App\colegio\registroModel as registro;
use App\configuracion\administradorModel as administrador;
use App;
use Artisan;
use Storage;
use Session;
class colegioController extends Controller
{
	public function index()
	{
		$data['colegio']=colegio::all()->first();
		return view('configuracion.colegio.index',$data);
	}
	public function update(Request $request)
	{

		if($request->file('txtLogo')!=null)
		{
			Storage::delete(Session::get('imagen'));
			$file = $request->file('txtLogo');
			$nombre = $file->getClientOriginalName();
			$nombre= explode('.', $nombre);
			$nombre_archivo=$request['txtCodigo'].'.'.$nombre[1];
			\Storage::disk('local')->put($nombre_archivo,  \File::get($file));
			Session::forget('imagen');
			Session::put('imagen',$nombre_archivo);
		}
		else
		{
			$nombre_archivo='';
		}

		$colegio=colegio::find($request['id']);
		$colegio->colegio=$request['txtColegio'];
		$colegio->nombre_contacto=$request['txtNombre'];
		$colegio->email=$request['txtEmail'];
		$colegio->telefono=$request['txtTelefono'];
		$colegio->direccion=$request['txtDireccion'];
		$colegio->save();

		$colegio=registro::where('codigo','=',$request['txtCodigo'])->first();
		$colegio->colegio=$request['txtColegio'];
		$colegio->nombre_contacto=$request['txtNombre'];
		$colegio->email=$request['txtEmail'];
		$colegio->telefono=$request['txtTelefono'];
		$colegio->imagen=$nombre_archivo;
		$colegio->save();


		$administrador=administrador::find(1);
		$administrador->nombre=$request['txtNombre'];
		$administrador->email=$request['txtEmail'];
		$administrador->save();
		return redirect('config_colegio');


	}
}
