<?php

namespace App\Http\Controllers\reportes;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\cuotasModel;
use \App\inscripcion\alumnos_inscritos as alumnos;
use \App\pagos\detalles_pagosModel as detalles;

class historicoController extends Controller
{
	public function metodo_pago()
	{

		$data['cuotas'] =cuotasModel::whereHas('periodo', function($q)
		{
			$q->where('estatus', '=', 'activo');

		})->get();
		$data['cuota_id']='';
		return view('reportes.historico.metodo_pago',$data);
	}
	public function buscar_metodo_pago($id)
	{
		$data['alumnos']=alumnos::where('cuota_id','=',$id)->get();		
		$data['cuota_id']=$id;
		echo view('reportes.historico.table_metodo_pago',$data);
	}
	public function tipo_pago()
	{
		$data['tipo']='';
		return view('reportes.historico.tipo_pago',$data);

	}
	public function buscar_tipo_pago($tipo)
	{
		$data['detalles']=detalles::where('tipo','=',$tipo)->where('estatus','=','procesado')->get();		
		$data['tipo']=$tipo;
		echo view('reportes.historico.table_tipo_pago',$data);
	}
}
