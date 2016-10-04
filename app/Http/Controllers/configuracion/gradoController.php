<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\materiaModel;
use \App\configuracion\gradoModel;
use \App\configuracion\seccionModel;
use \App\configuracion\horarioModel;
use \App\configuracion\periodoModel;
use Illuminate\Support\Collection as Collection;
class gradoController extends Controller
{
  //empiezo del crud
  public function index()
  {
    $periodo=periodoModel::where('estatus','activo')->first();
    if(isset($periodo->idperiodo))
    {
      $grados=gradoModel::where('periodo_id','=',$periodo->idperiodo)->get();
      $datosGrados=array();
      foreach ($grados as $grado) {
        $requerido=gradoModel::where('idgrado',$grado->grado_id)->get();
        foreach ($requerido as $re) {
          $gradoRequerido=$re->grado;
        }
        if(!isset($gradoRequerido))
        {
          $gradoRequerido='Ninguno';
        }
        $datosGrados[]=array(
          'idgrado'=>$grado->idgrado,
          'grado'=>$grado->grado,
          'requerido'=>$gradoRequerido
          );      
      }
      $grados=Collection::make($datosGrados);
      return view('configuracion.grado.index',[
        'periodo' => $periodo->periodo,
        'periodo_id' => $periodo->idperiodo,
        'grados' => $grados
        ]);
    }
    else
    {
      return view('configuracion.periodo.requisito.index');
    }
    
  }
  public function create(Request $request)
  {
    $num= gradoModel::where('grado','=',trim($request['txtGrado']))->count();
    if($num>0)
      return 1;


    $datos= new gradoModel;
    $datos->grado=trim($request['txtGrado']);
    $datos->periodo_id=$request['periodo_id'];
    $datos->grado_id=$request['cmbGrado'];
    $datos->colegio_id=1;
    $datos->save();

    $this->show();

  }
  public function show()
  {
   $periodo=periodoModel::where('estatus','activo')->first();
   $grados=gradoModel::where('periodo_id','=',$periodo->idperiodo)->get();
   $datosGrados=array();
   foreach ($grados as $grado) {
    $requerido=gradoModel::where('idgrado',$grado->grado_id)->get();
    foreach ($requerido as $re) {
      $gradoRequerido=$re->grado;
    }
    if(!isset($gradoRequerido))
    {
      $gradoRequerido='Ninguno';
    }
    $datosGrados[]=array(
      'idgrado'=>$grado->idgrado,
      'grado'=>$grado->grado,
      'requerido'=>$gradoRequerido
      );      
  }
  $grados=Collection::make($datosGrados);
  echo view('configuracion.grado.table',[
    'periodo' => $periodo->periodo,
    'periodo_id' => $periodo->idperiodo,
    'grados' => $grados
    ]);
  

}
public function edit($id)
{
  $datos=gradoModel::find($id)->toJson();
  echo $datos;
}
public function update(Request $request)
{

  $datos=gradoModel::find($request['id']);
  $datos->grado=trim($request['txtGrado']);
  $datos->periodo_id=$request['periodo_id'];
  $datos->colegio_id=1;
  $datos->grado_id=$request['cmbGrado'];
  $datos->save();
  $this->show();

}
public function delete($id)
{
  $datos = gradoModel::find($id);
  $datos->delete();
  $this->show();
}

//fin del crud


//operaciones necesarias para el horario

public function getMaterias(Request $request, $id)
{
  if($request->ajax())
  { 
    $materias=materiaModel::materias($id);
    return response()->json($materias);
  }
}
public function getSecciones(Request $request,$idGrado, $idMateria)
{
  if($request->ajax())
  { 
   $secciones=seccionModel::getSeccion($idGrado);
   $data = array();
   foreach ($secciones as $seccion) {
    $materia=materiaModel::tiempo($idMateria);
    $horario=horarioModel::getHoras($seccion->idseccion,$idMateria);

    $horas_impartidas="00:00:00";
    foreach ($horario as $horas) {
      $horas_impartidas=date("H:i:s", strtotime($horas_impartidas) + strtotime($horas->hora_final) - strtotime($horas->hora_inicio));

            //  echo 'hora inicio: '.$hora->hora_inicio.'<br>hora final: '.$hora->hora_final;
    }
    $restante="00:00:00";
    $restante=date("H:i:s", strtotime($restante) + strtotime($materia->tiempo) - strtotime($horas_impartidas));
    $data[]=array(
      'gradoSeccion'=>$seccion->seccion,
      'restante'=>$restante,
      'asignada'=>$horas_impartidas
      );
  }
  return response()->json($data);
}
}
}
