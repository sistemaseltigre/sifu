<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\materiaModel;
use \App\configuracion\gradoModel;

class materiaController extends Controller
{
  public function index()
  {
    $datos['materias'] =materiaModel::allMateria();
    $datos['grados']=gradoModel::allGrados();
    return view('configuracion.materia.index',$datos);
  }
  public function create(Request $request)
  {
    $num= materiaModel::where('materia','=',trim($request['txtMateria']))
                      ->where('grado_id','=',$request['cmbGrado'])->count();
    if($num>0)
      return 1;

    $datos= new materiaModel;
   $datos->materia=trim($request['txtMateria']);
    $datos->tiempo=$request['txtHoras'];
    $datos->grado_id=$request['cmbGrado'];
    $datos->materia_id=$request['cmbPrelacion'];
    $datos->colegio_id=1;
    $datos->save();
    $this->show();

  }
  public function show()
  {
    $materias =materiaModel::allMateria();
    echo view('configuracion.materia.table',compact('materias'));    

  }
  public function edit($id)
  {
    $datos=materiaModel::find($id)->toJson();
    echo $datos;
  }
  public function update(Request $request)
  {
    $datos=materiaModel::find($request['id']);
    $datos->materia=$request['txtMateria'];
    $datos->tiempo=$request['txtHoras'];
    $datos->grado_id=$request['cmbGrado'];
    $datos->materia_id=$request['cmbPrelacion'];
    $datos->colegio_id=1;
    $datos->save();
    $this->show();

  }
  public function delete($id)
  {
    $datos = materiaModel::find($id);
    $datos->delete();
    $this->show();
  }
  public function getPrelacion($id)
  {
    $datos=materiaModel::getPrelacion($id);
    return $datos;
  }
}
