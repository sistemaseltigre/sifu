<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\planillasModel as planillas;
use \App\configuracion\accesoModel as acceso;
class planillasController extends Controller
{
  public function index()
  {
    $data['planillas']=planillas::all();
    return view('configuracion.planillas.index',$data);
  }
  public function nuevo()
  {
    return view('configuracion.planillas.contenedor');
  }
  public function editar($planilla_id)
  {
    $data['planilla']=planillas::find($planilla_id);
    return view('configuracion.planillas.contenedor',$data);
  }

  public function create(Request $request)
  {
    if(isset($request['planilla_id']))
    {
      $planillas= planillas::find($request['planilla_id']);
     $planillas->formato=$request['txtFormato'];
     $planillas->contenido=$request['txtContenido'];
     $planillas->save(); 

     $acceso_p= acceso::where('planilla_id','=',$request['planilla_id']);
     $acceso_p->delete();

     $acceso =$request->input();
    if(isset($acceso['cmbAcceso']))
    {
      for($i = 0; $i < count($acceso['cmbAcceso']); $i++) {
        //echo dd($acceso['cmbAcceso']);
        $acceso_p= new acceso;
        $acceso_p->planilla_id=$planillas->id;
        $acceso_p->rol_id=$acceso['cmbAcceso'][$i];
        $acceso_p->save();
      }
    }
   }
   else
   {

    $planillas= new planillas;
    $planillas->formato=$request['txtFormato'];
    $planillas->contenido=$request['txtContenido'];
    $planillas->save();

    $acceso =$request->input();
    if(isset($acceso['cmbAcceso']))
    {
      for($i = 0; $i < count($acceso['cmbAcceso']); $i++) {
        //echo dd($acceso['cmbAcceso']);
        $acceso_p= new acceso;
        $acceso_p->planilla_id=$planillas->id;
        $acceso_p->rol_id=$acceso['cmbAcceso'][$i];
        $acceso_p->save();
      }
    }
  }
  return redirect('/configurar/planilla');
}
}
