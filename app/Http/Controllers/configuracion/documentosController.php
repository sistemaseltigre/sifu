<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\configuracion\documentosModel as documentos;
class documentosController extends Controller
{
	public function index()
	{
		$data['documentos']=documentos::all();
		return view('configuracion.documentos.index',$data);
	}
	public function create(Request $request)
	{
		$datos=new documentos;
		$datos->nombre=$request['txtNombre'];
		$datos->save();
		$this->show();

	}
	public function show()
	{
		$documentos =documentos::all();
		echo view('configuracion.documentos.table',compact('documentos'));    

	}
	public function edit($id)
	{
		$datos=documentos::find($id)->toJson();
		echo $datos;
	}
	public function update(Request $request)
	{
		$datos=documentos::find($request['id']);
		$datos->nombre=$request['txtNombre'];
		$datos->save();
		$this->show();

	}
	public function delete($id)
	{
		$datos = documentos::find($id);
		$datos->delete();
		$this->show();
	}
}
