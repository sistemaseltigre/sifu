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
use Auth;
class pagosController extends Controller
{
 public function registrar()
 {
//administrador
  if (Auth::user()->rolid==1) {
   $data['alumnos']=alumnos::whereHas('periodo', function($q)
   {
    $q->where('estatus', '=', 'activo');

  })->get();
 }
//representante
 else
 {
   $data['alumnos']=alumnos::whereHas('periodo', function($q)
   {
    $q->where('estatus', '=', 'activo');

  })->whereHas('alumno', function($q)
  {
    $q->where('representante_id', '=', Auth::user()->id);

  })->get();

}

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
  $saldo_procesado=0;
  $saldo_pendiente=0;
  $pago =$request->input();  
  if(isset($pago['txtTipo']))
  {
    for($i = 0; $i < count($pago['txtTipo']); $i++) 
    {

      if($pago['txtTipo'][$i]=='Deposito' || $pago['txtTipo'][$i]=='Cheque' || $pago['txtTipo'][$i]=='Transferencia')
      {
        $estatus="pendiente";
        $saldo_pendiente+=$saldo_pendiente+$pago['txtMonto'][$i];
      }
      else
      {
        $estatus="procesado";

        $saldo_procesado+=$saldo_procesado+$pago['txtMonto'][$i];
      }

    }
  }
  else
  {
    $saldo_procesado=$request['txtMontoAbonado'];
    $monto_cancelar=$request['txtMontoCancelar'];

    if($saldo_procesado<$monto_cancelar)
    {
      echo'<div class="alert alert-dismissible alert-info">
      <strong>Su saldo no es suficiente para cancelar las cuotas seleccionada!!!</strong> 
    </div>';
    return;
  }
  else
  {
    $estatus='pendiente';
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
     // echo dd($pago['txtReferencia'][$i]);
    if($pago['txtTipo'][$i]=='Deposito' || $pago['txtTipo'][$i]=='Cheque' || $pago['txtTipo'][$i]=='Transferencia')
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

$cuotas =$request->input();



if(isset($cuotas['chkCuotas']))
{
  for($j = 0; $j < count($cuotas['chkCuotas']); $j++) 
  {
    $mensualidad=cuotas::find($cuotas['chkCuotas'][$j]);

    if($mensualidad->detalles->monto <= $saldo_procesado)
    {
      $mensualidad->estatus='procesado';
      $saldo_procesado=$saldo_procesado-$mensualidad->detalles->monto;         

    }
    else
    {
      $saldo_procesado=$saldo_procesado;
      $mensualidad->estatus='en proceso';
    }
    $mensualidad->pagos_id=$pagos->id;      
    $mensualidad->save();
  }
}


$alumnos=alumno::find($request['alumno_id']);
$num_saldo=saldo::where('representante_id','=',$alumnos->representante_id)->count();
if($num_saldo>0)
{
 $table_saldo=saldo::where('representante_id','=',$alumnos->representante_id)->first(); 
 $table_saldo->saldo=$saldo_procesado;
 $table_saldo->save();
}
else
{
  $table_saldo= new saldo;
  $table_saldo->representante_id=$alumnos->representante_id;
  $table_saldo->delegado_id=$alumnos->delegado_id;
  $table_saldo->alumno_id=$request['alumno_id'];
  $table_saldo->saldo=$saldo_procesado;
  $table_saldo->save();
}
$this->buscar($request['alumno_id']);
}

public function verificar_pagos(Request $request)
{
  $data['pagos']=pagos::where('estatus','=','pendiente')->get();

  return view('pagos.verificar.index',$data);
}
public function buscar_pagos($id)
{
  $data['cuotas']=cuotas::where('pagos_id','=',$id)->where('estatus','=','en proceso')->get();
  $data['detalles']=detalles::where('pagos_id','=',$id)->where('estatus','=','pendiente')->get();
  $data['pagos_id']=$id;
  $cuotas=cuotas::where('pagos_id','=',$id)->first();
  $data['alumno_id']=$cuotas->alumno_id;
  $alumnos=alumno::find($cuotas->alumno_id);
  $data['saldo']=saldo::where('representante_id','=',$alumnos->representante_id)->first();
  echo view('pagos.verificar.detalles',$data);
}

public function procesar_pagos_verificados(Request $request)
{

  $pagos=pagos::find($request['pagos_id']);
  $pagos->estatus='procesado';
  $pagos->save();



  $cuotas =$request->input();

  if(isset($cuotas['chkPagos']))
  {
    $bandera=false;
    $detalles=detalles::where('pagos_id','=',$request['pagos_id'])->where('estatus','=','pendiente')->get();
    foreach ($detalles as $detalle) {
      for($j = 0; $j < count($cuotas['chkPagos']); $j++) 
      {
        if($detalle->id==$cuotas['chkPagos'][$j])
        {
          $bandera=true;
          break;
        }
      }

      if($bandera==true)
      {
        $pagos=detalles::find($detalle->id);   
        $pagos->estatus='procesado';        
        $pagos->save();
      }
      else
      {
        $pagos=detalles::find($detalle->id);   
        $pagos->estatus='rechazado';        
        $pagos->save();
      }
    }

  }

  $saldo=$request['txtMontoAbonado'];


  if(isset($cuotas['chkCuotas']))
  {
    for($j = 0; $j < count($cuotas['chkCuotas']); $j++) 
    {
      $mensualidad=cuotas::find($cuotas['chkCuotas'][$j]);

      if($mensualidad->detalles->monto <= $saldo)
      {
        $mensualidad->estatus='procesado';
        $saldo=$saldo-$mensualidad->detalles->monto;        

      }
      else
      {
        $saldo=$saldo;
        $mensualidad->estatus='pendiente';
      }
      $mensualidad->save();
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
$this->buscar_pagos($request['pagos_id']);
}


public function procesados()
{
 $pagos=pagos::where('estatus','=','procesado')->get();
 return view('pagos.reportes.procesados',compact('pagos'));
}
public function pendientes()
{
 $pagos=pagos::where('estatus','=','pendiente')->get();
 return view('pagos.reportes.pendientes',compact('pagos'));
}
public function historico()
{
 $pagos=pagos::where('estatus','=','procesado')->groupBy('alumno_id')->get();
 return view('pagos.historico.index',compact('pagos'));
}
public function buscar_historico($id)
{
 $data['pagos']=pagos::where('estatus','=','procesado')->where('alumno_id','=',$id)->get();
 $data['alumno']=alumno::find($id);
 $data['cuotas']=cuotas::where('alumno_id','=',$id)->get();

 return view('pagos.historico.detalles',$data);
}
public function detalles_historico($id)
{
  $data['id']=$id;
  $data['pagos']=pagos::find($id);
  return view('pagos.historico.detalles.pagos',$data);
}

}
