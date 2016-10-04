<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\bancoModel as banco;
class bancoController extends Controller
{
    public function index()
   {
    $data['bancos']=banco::all();
    return view('configuracion.banco.index',$data);
   }
     public function create(Request $request)
  {
   $datos=new banco;
   $datos->banco=$request['txtBanco'];
    $datos->tipo=$request['cmbTipo'];
    $datos->cuenta=$request['txtCuenta'];
    $datos->email=$request['txtEmail'];
    $datos->titular=$request['txtTitular'];
    $datos->cedula=$request['txtCedula'];
    $datos->save();
    $this->show();

  }
  public function show()
  {
    $bancos =banco::all();
    echo view('configuracion.banco.table',compact('bancos'));    

  }
  public function edit($id)
  {
    $datos=banco::find($id)->toJson();
    echo $datos;
  }
  public function update(Request $request)
  {
    $datos=banco::find($request['id']);
    $datos->banco=$request['txtBanco'];
    $datos->tipo=$request['cmbTipo'];
    $datos->cuenta=$request['txtCuenta'];
    $datos->email=$request['txtEmail'];
    $datos->titular=$request['txtTitular'];
    $datos->cedula=$request['txtCedula'];
    $datos->save();
    $this->show();

  }
  public function delete($id)
  {
    $datos = banco::find($id);
    $datos->delete();
    $this->show();
  }
}
