<?php

namespace App\Http\Controllers\pagos;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\inscripcion\alumnos_inscritos as alumnos;
use \App\configuracion\bancoModel;
use \App\datos\alumnoModel as alumno;
use \App\mensualidad\cuotas;
use \App\pagos\pagosModel as pagos;
use \App\pagos\detalles_pagosModel as detalles;
use \App\pagos\saldoModel as saldo;
class pagosController extends Controller
{
 public function registrar()
 {

  $data['alumnos']=alumnos::whereHas('periodo', function($q)
  {
    $q->where('estatus', '=', 'activo');

  })->get();
  $numBancos=bancoModel::all()->count();
  if($numBancos==0)
  {
    return view('errors.111');
  }

  $data['bancos']=bancoModel::all();
  return view('pagos.index',$data);
}

public function buscar($id)
{
  $data['cuotas']=cuotas::whereHas('detalles', function($q)
  {
    $q->where('fecha','<=',date('Y-m-31'));

  })->where('alumno_id','=',$id)->where('estatus','=','pendiente')->get();

  $data['alumno_id']=$id;
  $alumnos=alumno::find($id);
  $data['saldo']=saldo::where('representante_id','=',$alumnos->representante_id)->first();
  echo view('pagos.detalles_pagos',$data);
}

public function procesar_pagos(Request $request)
{
  $estatus='';    
  $pago =$request->input();
  if(isset($pago['txtTipo']))
  {
    for($i = 0; $i < count($pago['txtTipo']); $i++) 
    {
      if($pago['txtTipo']=='Deposito' || $pago['txtTipo']=='Cheque' || $pago['txtTipo']=='Transferencia')
      {
        $estatus="pendiente";
      }
      else
      {
        $estatus="procesado";
      }

    }
  }

  $pagos= new pagos;
  $pagos->fecha=date('Y-m-d');
  $pagos->alumno_id=$request['alumno_id'];
  $pagos->monto=$request['txtMontoAbonado'];
  $pagos->estatus=$estatus;
  $pagos->save();

  if(isset($pago['txtTipo']))
  {
    for($i = 0; $i < count($pago['txtTipo']); $i++) 
    {
      if($pago['txtTipo']=='Deposito' || $pago['txtTipo']=='Cheque' || $pago['txtTipo']=='Transferencia')
      {
        $estatus="pendiente";
      }
      else
      {
        $estatus="procesado";        
      }
      if(!isset($pago['txtReferencia'][$i]))
      {
        $referencia='';
      }
      else
      {
        $referencia=$pago['txtReferencia'][$i];
      }
      if(!isset($pago['txtBanco'][$i]))
      {
        $banco='';
      }
      else
      {
        $banco=$pago['txtBanco'][$i];
      }
      $detalles=new detalles;
      $detalles->tipo=$pago['txtTipo'][$i];
      $detalles->monto=$pago['txtMonto'][$i];
      $detalles->banco=$banco;
      $detalles->referencia=$referencia;
      $detalles->pagos_id=$pagos->id;
      $detalles->estatus=$estatus;
      $detalles->save();
    }
  }
  $saldo=$request['txtMontoAbonado'];
  $cuotas =$request->input();
  if(isset($cuotas['chkCuotas']))
  {
    for($i = 0; $i < count($cuotas['chkCuotas']); $i++) 
    {
      $mensualidad=cuotas::find($cuotas['chkCuotas'][$i]);
      
      if($mensualidad->detalles->monto <= $saldo)
      {
        $mensualidad->estatus='procesado';
        $saldo=$saldo-$mensualidad->detalles->monto;
        $mensualidad->save();

      }
      else
      {
        $saldo=$saldo;
      }
    }
  }

  $alumnos=alumno::find($request['alumno_id']);
  $num_saldo=saldo::where('representante_id','=',$alumnos->representante_id)->count();
  if($num_saldo>0)
  {
   $table_saldo=saldo::where('representante_id','=',$alumnos->representante_id)->first(); 
   $table_saldo->saldo=$saldo;
   $table_saldo->save();
 }
 else
 {
  $table_saldo= new saldo;
  $table_saldo->representante_id=$alumnos->representante_id;
  $table_saldo->delegado_id=$alumnos->delegado_id;
  $table_saldo->alumno_id=$request['alumno_id'];
  $table_saldo->saldo=$saldo;
  $table_saldo->save();
}
$this->buscar($request['alumno_id']);
}
}
