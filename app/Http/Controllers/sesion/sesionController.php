<?php

namespace App\Http\Controllers\sesion;

use Illuminate\Http\Request;

use App\Http\Requests;
use Auth;
use Hash;
use Redirect;
use Sesion;
use App\Http\Requests\sesion\sesionRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Crypt;
use \App\configuracion\profesorModel as profesor;
use \App\configuracion\administradorModel as administrador;
use \App\datos\alumnoModel as alumno;
use \App\datos\representanteModel as representante;
use App;
use \App\dbManager;
use Session;
use DateTime;
class sesionController extends Controller
{

  public function store(Request $request)
  {
    if($request['cmbColegio']=='default')
    {
      Session::flash('error', 'Debe Seleccionar el colegio para conectarse!');
      return redirect('/login');
    }
    if(isset($request['cmbColegio']))
    {
      Session::put('dbName', $request['cmbColegio']);
      $colegio=\App\colegio\registroModel::where('dbName','=',$request['cmbColegio'])->first();

      Session::put('colegio', $colegio->colegio);
      Session::put('imagen', $colegio->imagen);
      $url='/login/';
    }
    else
    {
      $url='/login/'.Session::get('dbName');
    }
    

    if(Auth::attempt(['usuario'=>$request['txtUsuario'],'password'=>$request['txtPassword']]))
    {
      //validar licencia
      $this->validar_licencia();
     // echo dd(Auth::user());

      $rol=Auth::user()->rolid;        
      $id=Auth::user()->id;

      if($rol==1)
      {
        $admin=administrador::find($id);
        session(['name' => $admin->nombre]);
        session(['id' => $admin->idadministrador]);
      }
      else
        if($rol==2)
        {
          $profesor=profesor::find($id);
          session(['name' => $profesor->nombre_profesor]);
          session(['id' => $profesor->idprofesor]);
        }
        else
        if($rol==3)
        {
          $alumno=alumno::find($id);
          session(['name' => $alumno->nombre]);
          session(['id' => $alumno->idalumno]);
        }
        else
        if($rol==4)
        {
          $representante=representante::find($id);
          session(['name' => $representante->nombre]);
          session(['id' => $representante->idrepresentante]);
        }
        return redirect('/app/');
      }
      else
      {
        Session::flash('error', 'Usuario Y/O Contraseña Invalida, por favor verifique la informacion e intentelo de nuevo!');
        return redirect($url);
      }
    }
    public function logout()
    {
      Auth::logout();
      return redirect('/login/'.Session::get('dbName'));
    }
    public function user()
    {
      if(Auth::check())
      {

        $user=Auth::user()->rolid;
        return $user;
      }
      else
      {
        return redirect('/login');
      }

    }

    public function validar_licencia()
    {
      $colegio=\App\colegio\registroModel::where('dbName','=',Session::get('dbName'))->where('licencia','=','false')->first();
           
        $fecha_actual=new DateTime(date('Y-m-d'));
        $fecha_registro=new DateTime($colegio->fecha);
        $interval = date_diff(new $fecha_actual, $fecha_registro);
        $dias=30-$interval->days;
        Session::put('dias_restantes',$dias);

        if($dias<=0)
        {
          
        }
     
    }

  }
