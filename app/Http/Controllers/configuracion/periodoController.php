<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\periodoModel;
use \App\configuracion\gradoModel as grado;
use \App\configuracion\seccionModel as seccion;
use \App\configuracion\materiaModel as materia;
use \App\configuracion\cuotasModel as cuota;
use \App\configuracion\detalles_cuotasModel as detalles_cuota;
class periodoController extends Controller
{
 public function index()
 {
  $datos['periodos'] =periodoModel::all();
  return view('configuracion.periodo.index',$datos);
}
public function create(Request $request)
{
  $datos= new periodoModel;
  $datos->periodo=$request['txtDesde'].' / '.$request['txtHasta'];
  $datos->estatus='inactivo';
  $datos->save();
  $this->show();

}
public function show()
{
  $periodos =periodoModel::all();
  echo view('configuracion.periodo.table',compact('periodos'));    

}
public function edit($id)
{
  $datos=periodoModel::find($id)->toJson();
  echo $datos;
}
public function update(Request $request)
{
  $datos=periodoModel::find($request['id']);
  $datos->periodo=$request['txtDesde'].' / '.$request['txtHasta'];
  $datos->save();
  $this->show();

}
public function delete($id)
{
  $datos = periodoModel::find($id);
  $datos->delete();
  $this->show();
}
public function activar($id)
{
  $num=periodoModel::where('estatus','=','activo')->count();
  if($num>0)
  {

    $periodo=periodoModel::where('estatus','=','activo')->first();
    $periodo->estatus='inactivo';
    $periodo->save();
  }

  $periodo=periodoModel::find($id);
  $periodo->estatus='activo';
  $periodo->save();

  return redirect("/config_periodo");


}
public function desactivar($id)
{   

 $periodo=periodoModel::find($id);
 $periodo->estatus='inactivo';
 $periodo->save();

 return redirect("/config_periodo");


}

public function importar(Request $request)
{
  $grados=$request['chkGrados'];
  $secciones=$request['chkSecciones'];
  $materias=$request['chkMaterias'];
  $metodos=$request['chkMetodos'];


  if(isset($grados))
  {
    $num=grado::where('periodo_id',$request['id'])->count();
    if($num>0)
    {

      return 1;
    }
    $grados_importar=grado::where('periodo_id','=',$request['periodo'])->get();
    foreach ($grados_importar as $importar) {
     if($importar->grado_id==0)
     {
       $datos= new grado;
       $datos->grado=trim($importar->grado);
       $datos->periodo_id=$request['id'];
       $datos->grado_id=0;
       $datos->colegio_id=1;
       $datos->save();
     }
     else
     {
      $grado_=grado::find($importar->grado_id);
      $grado_id=grado::where('grado','=',$grado_->grado)->where('periodo_id','=',$request['id'])->first();
   //  echo dd($grado_id);
      $datos= new grado;
      $datos->grado=trim($importar->grado);
      $datos->periodo_id=$request['id'];
      $datos->grado_id=$grado_id->idgrado;
      $datos->colegio_id=1;
      $datos->save();
    }
  }
}

/*importar metodos
if(isset($metodos))
{
  $num=cuota::where('periodo_id',$request['id'])->count();
  if($num>0)
  {

    return 4;
  }
  $cuotas=cuota::where('periodo_id',$request['id'])->get();

  foreach ($cuotas as $cuota) {
    $datos=new cuota;
    $datos->descripcion=$cuota->descripcion;
    $datos->periodo_id=$request['periodo'];
    $datos->save();
    foreach ($cuota->detalles as $detalle) {
      $detalles = new detalles_cuota;
      $detalles->fecha=$fecha_pago;
      $detalles->monto=$request['txtMonto'];
      $detalles->cuota_id=$request['cuota_id'];
      $detalles->save();
    }
  }

}*/
//importar secciones
if(isset($secciones))
{
 $num=seccion::whereHas('gradoModel', function($q) use($request)
 {
  $q->where('periodo_id', '=', $request['id']);

})->count();

 if($num>0)
 {
   return 2; 
 }


 $seccion_importar=grado::where('periodo_id','=',$request['periodo'])->get();
 foreach ($seccion_importar as $importar) {
  $seccion=seccion::where('grado_id','=',$importar->idgrado)->first();
  $grado_=grado::find($importar->idgrado);
  $grado_id=grado::where('grado','=',$grado_->grado)->where('periodo_id','=',$request['id'])->first();
  $datos=new seccion;
  $datos->seccion=trim($seccion->seccion);
  $datos->capacidad=trim($seccion->capacidad);
  $datos->grado_id=$grado_id->idgrado;
  $datos->colegio_id=1;
  $datos->save();
}
}
//importar materias
if(isset($materias))
{
 $num=materia::whereHas('gradoModel', function($q) use($request)
 {
  $q->where('periodo_id', '=', $request['id']);

})->count();

 if($num>0)
 {
   return 3; 
 }


 $materia_importar=grado::where('periodo_id','=',$request['periodo'])->get();
 foreach ($materia_importar as $importar) {
  $materias=materia::where('grado_id','=',$importar->idgrado)->get();
  echo 'grado '.$importar->idgrado.'<br>';
  $prelacion='';
  if(isset($materias))
  {
    foreach ($materias as $materia) 
    {

      if($materia->materia_id!='default')
      {
        $materia_pre=materia::where('materia_id','=',$materia->materia_id)->first();
        $prelacion=$materia_pre->idmateria;
      }
      else
      {
        $prelacion='default';
      }


      $grado_=grado::find($importar->idgrado);
      $grado_id=grado::where('grado','=',$grado_->grado)->where('periodo_id','=',$request['id'])->first();
      $datos=new materia;
      $datos->materia=trim($materia->materia);
      $datos->tiempo=$materia->tiempo;
      $datos->grado_id=$grado_id->idgrado;
      $datos->materia_id=$prelacion;
      $datos->colegio_id=1;
      $datos->save();
    }
  }
}
}
}
}
