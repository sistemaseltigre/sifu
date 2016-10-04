<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\profesorModel;
use \App\usuario\usuarioModel;
use Auth;
use \App\dbManager;
use Session;
use Hash;
use Mail;
class profesorController extends Controller
{

  public function index()
  {
    
    $datos =profesorModel::all();
    return view('configuracion.profesor.index',compact('datos'));


  }
  public function create(Request $request)
  {
    if($request->ajax())
    {
      $num=profesorModel::where('cedula_profesor','=',trim($request['txtCedula']))->count();

      if($num>0)
      {
        return 1;
      }

      $logitud = 8;
      $psswd = substr( md5(microtime()), 1, $logitud);
      $datos= new profesorModel;
    $datos->cedula_profesor=trim($request['txtCedula']);
    $datos->nombre_profesor=$request['txtNombre'];
    $datos->telefono_profesor=$request['txtTelefono'];
    $datos->email_profesor=$request['txtEmail'];
    $datos->direccion_profesor=$request['txtDireccion'];
    $datos->save();
    $usuario= new usuarioModel;
    $usuario->usuario=$request['txtCedula'];
    $usuario->password=Hash::make($psswd);
    $usuario->rolid='2';
    $usuario->id=$datos->idprofesor;
    $usuario->save();

    //enviar correo con la clave dinamica

Mail::send('configuracion.profesor.correo.clave', array('enlace'=>Session::get('dbName'),'usuario'=>$request['txtCedula'],'clave'=>$psswd,'colegio'=>Session::get('colegio')), function ($m)  use ($datos){
        $m->from('donotreply@sifusp.com', 'SIFU');

        $m->to($datos->email_profesor, $datos->nombre_profesor)->subject('Bienvenido a SIFU');
      });
      $this->show();
    }  
    else
      return redirect('errors.503');

  }
  public function show()
  {
    $datos =profesorModel::all();
    echo view('configuracion.profesor.table',compact('datos'));    

  }
  public function edit($id)
  {
    $datos=profesorModel::find($id)->toJson();
    echo $datos;
  }
  public function update(Request $request)
  {
    $datos=profesorModel::find($request['id']);
    $datos->cedula_profesor=$request['txtCedula'];
    $datos->nombre_profesor=$request['txtNombre'];
    $datos->telefono_profesor=$request['txtTelefono'];
    $datos->email_profesor=$request['txtEmail'];
    $datos->direccion_profesor=$request['txtDireccion'];
    $datos->save();
    $this->show();

  }
  public function delete($id)
  {
    $datos = profesorModel::find($id);
    $datos->delete();
    $this->show();
  }
}

