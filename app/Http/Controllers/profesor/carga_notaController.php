<?php

namespace App\Http\Controllers\profesor;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\profesor\carga_notaModel;
use Session;

class carga_notaController extends Controller
{
  public function create(Request $request)
  {

    $notass=$request->input("txtNota");
    if($request['nota_id1']!='')
    {

      $j=0;      
      foreach ($notass as $nota) {        
        $i=1;
        $j++;
        $notas=array();
        $notas['definitiva']=$request['definitiva'.$j];
        foreach ($nota as $not) {
          $corte='corte'.$i;
          $notas[$corte]=$not;
          $i++;
        }
        $cargar = carga_notaModel::findOrFail($request['nota_id'.$j]); 
        $cargar->fill($notas);
        $cargar->save();
      }
    }
    else
    {
      $j=0;
      foreach ($notass as $nota) {
        $i=1;
        $j++;
        $notas=array();
        $notas['materia_id']=$request['materia_id'];
        $notas['profesor_id']=Session::get('id');
        $notas['alumno_id']=$request['alumno_id'.$j];
        $notas['definitiva']=$request['definitiva'.$j];
        $notas['seccion_id']=$request['seccion_id'];
        foreach ($nota as $not) {
          $corte='corte'.$i;
          $notas[$corte]=$not;
          $i++;
        }
        $cargar = new carga_notaModel ;
        $cargar->fill($notas);
        $cargar->save();

      }
    }
    return  redirect()->back();
  }
}
