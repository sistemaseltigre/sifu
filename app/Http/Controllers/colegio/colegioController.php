<?php

namespace App\Http\Controllers\colegio;

use Illuminate\Http\Request;
use DB;
use App;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Database\MySqlConnection;
use Illuminate\Database\Connection;
use Artisan;
use Hash;
use Session;
use \App\colegio\registroModel as registro;
use \App\usuario\usuarioModel;
use \App\configuracion\administradorModel as administrador;
use \App\configuracion\colegioModel as colegio;
use Mail;
use Validator;
class colegioController extends Controller
{
	public function index()
	{		

		return view('colegio.registrar');
	}
	function create(Request $request)
	{
		$rules =  array('captcha' => ['captcha']); 
		$validator = Validator::make( 
			[ 'captcha' => $request['txtCaptcha'] ], 
			$rules, 
        // Mensaje de error personalizado 
			[ 'captcha' => 'El captcha ingresado es incorrecto.' ]
			); 
		if (!$validator->passes()) { 
			
			$condicion = array("codigo"=>"0", "email"=>"0", "url"=>"","error"=>"1","captcha"=>captcha_img());

			return json_encode($condicion);
		} 


		if($request->file('txtLogo')!=null)
		{
			$file = $request->file('txtLogo');
			$nombre = $file->getClientOriginalName();
			$nombre= explode('.', $nombre);
			$nombre_archivo=$request['txtCodigo'].'.'.$nombre[1];
			\Storage::disk('local')->put($nombre_archivo,  \File::get($file));

		}
		else
		{
			$nombre_archivo='';
		}
		
		$codigo=registro::where('codigo','=',$request['txtCodigo'])->count();
		$email=registro::where('email','=',$request['txtEmail'])->count();
		if($codigo>0)
		{
			$condicion = array("codigo"=>"1", "email"=>"0", "url"=>"","error"=>"0");
			return json_encode($condicion);;
		}
		else
			if($email>0)
			{
				$condicion = array("codigo"=>"0", "email"=>"1", "url"=>"","error"=>"0");

				return json_encode($condicion);
			}
			
			
		// si lo de arriba no se cumple continuamos
			$registro=registro::create([
				'colegio'=>$request['txtColegio'],
				'nombre_contacto'=>$request['txtNombre'],
				'codigo'=>$request['txtCodigo'],
				'email'=>$request['txtEmail'],
				'telefono'=>$request['txtTelefono'],
				'pais_id'=>$request['cmbPais'],
				'password'=>Hash::make($request['txtPassword']),
				'licencia'=>'false',
				'fecha'=>date('Y-m-d'),
				'usuario'=>$request['txtUsuario'],
				'imagen'=>$nombre_archivo,
				'dbName'=>"sifu_".$request['txtCodigo'],
				]);



			$subject = $request['txtCodigo'];
			$dbName = "sifu_".$subject;
			DB::statement("CREATE DATABASE $dbName");
			$this->configurar_bd($dbName);
			Artisan::call('migrate', array('--force' => true,'--database' => $dbName));
			Session::put('dbName', $dbName);

			$user= new usuarioModel;
			$user->password=Hash::make($request['txtPassword']);
			$user->usuario=$request['txtUsuario'];
			$user->rolid=1;
			$user->id=1;
			$user->save();

			$admin= new administrador;
			$admin->cedula='';
			$admin->nombre=$request['txtNombre'];
			$admin->telefono=$request['txtTelefono'];
			$admin->email=$request['txtEmail'];
			$admin->tipo='superAdmin';
			$admin->save();

			$colegio= new colegio;
			$colegio->colegio=$request['txtColegio'];
			$colegio->nombre_contacto=$request['txtNombre'];
			$colegio->telefono=$request['txtTelefono'];
			$colegio->email=$request['txtEmail'];
			$colegio->codigo=$request['txtCodigo'];
			$colegio->save();

			Mail::send('colegio.correo.index', array('enlace'=>$dbName), function ($m)  use ($registro){
				$m->from('donotreply@sifusp.com', 'SIFU');

				$m->to($registro->email, $registro->nombre_contacto)->subject('Bienvenido a SIFU');
			});
		//return redirect('/login/'.$dbName);
			$condicion = array("codigo"=>"0", "email"=>"0", "url"=>"sifu_".$request['txtCodigo'],"error"=>"0");
			return json_encode($condicion);
			
		}
		public function configurar_bd($dbName)
		{
			$config = App::make('config');

    // Will contain the array of connections that appear in our database config file.
			$connections = $config->get('database.connections');

    // This line pulls out the default connection by key (by default it's `mysql`)
			$defaultConnection = $connections[$config->get('database.default')];

    // Now we simply copy the default connection information to our new connection.
			$newConnection = $defaultConnection;
    // Override the database name.
			$newConnection['database'] = $dbName;

    // This will add our new connection to the run-time configuration for the duration of the request.
			App::make('config')->set('database.connections.'.$dbName, $newConnection);
		}

		public function send_contact(Request $request){
			$name = $request->name;
			$email = $request->email;
			$mensaje = $request->mensaje;
			$subject = $request->subject;

			Mail::send('colegio.correo.send_contact', ['name' => $name,'email' => $email,'mensaje' => $mensaje,'subject' => $subject], function ($m) use ($email,$name,$mensaje,$subject) {
            $m->from($email, $name);

            $m->to('soporte@sifusp.com', '')->subject('Contacto web sifu');
        	});
			$send_res = 1;
        	return redirect('/')->with('send_res');
		}



		public function validar_licencia()
		{
			$colegio=colegio::where('dbName','=',Session::get('dbName'))->first();
			$fecha_actual=date('Y-m-d');
			$interval = date_diff($fecha_actual, $colegio->fecha);
			Session::put('dias',$interval);
		}
	}
