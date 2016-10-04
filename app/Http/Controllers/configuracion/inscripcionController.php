<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\datos\alumnoModel;
use \App\configuracion\cuotasModel;
use \App\configuracion\bancoModel;
use \App\configuracion\seccionModel;
use \App\configuracion\materiaModel;
use \App\configuracion\gradoModel;
use \App\configuracion\periodoModel;
use \App\inscripcion\detalle_inscripcion;
use \App\inscripcion\alumnos_inscritos as inscripcion;
use \App\inscripcion\materia_alumno;
use \App\inscripcion\pago_inscripcion;
use \App\inscripcion\seccion_alumno;
use \App\configuracion\monto_inscripcionModel as monto;
use \App\mensualidad\cuotas as mensualidad;
use \App\mensualidad\pagos;
use \App\mensualidad\detalles_pagos;
use \App\mensualidad\saldo;

class inscripcionController extends Controller
{

  public function index($codigo,$id)
  {

    $alumno=alumnoModel::find($id);

    $numPeriodo=periodoModel::where('estatus','activo')->count();
    $numBancos=bancoModel::all()->count();
    $numMonto=monto::whereHas('periodo', function($q)
    {
      $q->where('estatus', '=', 'activo');

    })->count();
    $numMaterias=materiaModel::where('grado_id',$alumno->grado_id)->count();

    if($numPeriodo==0 || $numBancos==0 || $numMaterias==0 || $numMonto==0)
    {
      return view('errors.111');
    }

    $datos['bancos']=bancoModel::all();
    $datos['alumno']=alumnoModel::find($id);
    $datos['periodo']=periodoModel::where('estatus','activo')->first();
    $datos['gradoCursar']=gradoModel::where('idgrado',$alumno->grado_id)->first();
    $datos['materias']=materiaModel::where('grado_id',$alumno->grado_id)->get();
    $requerido=gradoModel::where('idgrado',$alumno->grado_id)->first();
    if($requerido->grado_id==0)
    {
      $datos['requerido']="";
      $datos['condicion']="disabled";
    }
    else
    {
      $grado=gradoModel::find($requerido->grado_id);
      $datos['requerido']=$grado->grado;
      $datos['requerido_id']=$grado->idgrado;
      $datos['condicion']="";
      $datos['materiasRequeridas']=materiaModel::where('grado_id',$grado->idgrado)->get();
    }
    $datos['cuotas']=cuotasModel::whereHas('periodo', function($q)
    {
      $q->where('estatus', '=', 'activo');

    })->get();

    $datos['monto']=monto::whereHas('periodo', function($q)
    {
      $q->where('estatus', '=', 'activo');

    })->first();

    return view('configuracion.inscripcion.index',$datos);
  }

  public function create(Request $request)
  {
    $seguro='';
    $inscripcion='Inscripcion';
    $otro='';
    $monto=0;
    if($request->ajax())
    {
      //inscripcion
      $alumno_id=$request['alumno_id'];
      $inscripcion= new inscripcion;
      $inscripcion->alumno_id=$request['alumno_id'];
      $inscripcion->cuota_id=$request['metodo_id'];
      $inscripcion->fecha=date('Y-m-d');
      $inscripcion->periodo_id=$request['periodo_id'];
      $inscripcion->condicion=$request['cmbCondicion'];
      $inscripcion->seguro=$request['txtSeguro'];
      $inscripcion->save();

      $inscripcion_id=$inscripcion->id;
      //FIN INSCRIPCION     

      
      //registro de pago_inscripcion
      $pago =$request->input();
      if(isset($pago['txtTipo']))
      {
        for($i = 0; $i < count($pago['txtTipo']); $i++) {
          $monto+=$pago['txtMonto'][$i];
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
          $pago_inscripcion= new pago_inscripcion;
          $pago_inscripcion->tipo=$pago['txtTipo'][$i];
          $pago_inscripcion->monto=$pago['txtMonto'][$i];
          $pago_inscripcion->banco=$banco;
          $pago_inscripcion->referencia=$referencia;
          $pago_inscripcion->inscripcion_id=$inscripcion_id;
          $pago_inscripcion->save();
        }
      }
      // fin registro de pago_inscripcion


      //generar mensualidad segun el metodo seleccionado
      $metodo=cuotasModel::find($request['metodo_id']);
      foreach ($metodo->detalles as $mensualidad) {
        $mensualidad_alumno= new mensualidad;
        $mensualidad_alumno->detalles_cuotas_id=$mensualidad->id;
        $mensualidad_alumno->alumno_id=$alumno_id;
        $mensualidad_alumno->pagos_id='';
        $mensualidad_alumno->estatus='pendiente';
        $mensualidad_alumno->save();  
      }
//fin de generar la mensualidad

      //se verifica si se pago alguna cuota creada anteriormente la mensualidad
      $mensualidad =$request->input();
      if(isset($mensualidad['cuotas']))
      {
        //si selecciono alguna cuota para cancelar durante la inscripcion se registra en pagos general
        $pagos= new pagos;
        $pagos->fecha=date('Y-m-d');
        $pagos->alumno_id=$alumno_id;
        $pagos->monto=$monto;
        $pagos->estatus='procesado';
        $pagos->save();
        $pagos_id=$pagos->id;
          //se registran los detalles del pago general
        $pago=$request->input();
        if(isset($pago['txtTipo']))
        {
          for($i = 0; $i < count($pago['txtTipo']); $i++) {
            $monto+=$pago['txtMonto'][$i];
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
            $detalles_pagos= new detalles_pagos;
            $detalles_pagos->tipo=$pago['txtTipo'][$i];
            $detalles_pagos->monto=$pago['txtMonto'][$i];
            $detalles_pagos->banco=$banco;
            $detalles_pagos->referencia=$referencia;
            $detalles_pagos->pagos_id=$pagos_id;
            $detalles_pagos->estatus='procesado';
            $detalles_pagos->save();
          }
        }
          //finaliza registro de detalles del pago
      //finaliza el registro de pagos general

        for($i = 0; $i < count($mensualidad['cuotas']); $i++) {
          $mensualidad_alumno= mensualidad::find($mensualidad['cuotas'][$i]);
          $mensualidad_alumno->estatus='pagado';
          $mensualidad_alumno->pagos_id=$pagos_id;
          $mensualidad_alumno->save();
        }
      }

      //finaliza la verificacion







      //registro de seccion grado actual
      $secciones=seccionModel::where('grado_id','=',$request['grado_id']);
      if($secciones->count()==0)
      {        

      }
      else
      {
      foreach ($secciones->get() as $seccion) {
        $num=seccion_alumno::where('seccion_id',$seccion->idseccion)->count();
        if($num<=$seccion->capacidad)
        {
          $seccion_id=$seccion->idseccion;
          break;
        }
      }
      $seccion_alumno= new seccion_alumno;
      $seccion_alumno->alumno_id=$alumno_id;
      $seccion_alumno->seccion_id=$seccion_id;
      $seccion_alumno->save();
    }

       //Fin registro de seccion grado actual

      //registro de seccion grado pendiente
      $secciones=seccionModel::where('grado_id','=',$request['requerido_grado_id']);
      if($secciones->count()==0)
      {        
        
      }
      else
      {
        foreach ($secciones->get() as $seccion) {
          $num=seccion_alumno::where('seccion_id',$seccion->idseccion)->count();
          if($num<=$seccion->capacidad)
          {
            $seccion_id=$seccion->idseccion;
            break;
          }
        }
        $seccion_alumno= new seccion_alumno;
        $seccion_alumno->alumno_id=$alumno_id;
        $seccion_alumno->seccion_id=$seccion_id;
        $seccion_alumno->save();
      }

       //Fin registro de seccion grado pendiente

      //registro de materias del grado actual
      $materia =$request->input();
      for($i = 0; $i < count($materia['materiasActivas']); $i++) {

        $materia_alumno=new materia_alumno;
        $materia_alumno->alumno_id=$alumno_id;
        $materia_alumno->materia_id=$materia['materiasActivas'][$i];
        $materia_alumno->save();
      }
       //fin registro de materias del grado actual

       //registro de materias del grado pendiente
      $materia =$request->input();
      if (isset($materia['materiasRequeridas'])) {
       for($i = 0; $i < count($materia['materiasRequeridas']); $i++) {
        $materia_alumno=new materia_alumno;
        $materia_alumno->alumno_id=$alumno_id;
        $materia_alumno->materia_id=$materia['materiasActivas'][$i];
        $materia_alumno->save();
      }
    }

       //fin registro de materias del grado pendiente

      //actualizar estudiante inscrito
    //echo dd($alumno_id);
    $datos=alumnoModel::find($alumno_id);
    $datos->estatus="inscrito";
    $datos->save();

    echo "1";
  }
}

}
