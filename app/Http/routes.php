<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
use App\Http\Controllers;


Route::get('/buscar/logo/{dbName}', function ($dbName=null) {
  if($dbName!="default")
  {
    $colegio=\App\colegio\registroModel::where('dbName','=',$dbName)->first()->toJson();
    echo $colegio;
  }
  else
  {
    $imagen= array('imagen'=>'logo.png');

    echo json_encode($imagen);
  }
  
});
Route::get('permisos',function(){
  return view('errors.503');
});

Route::get('/', function () {

  return view('sifu.index');

});
Route::group(['middleware' => ['auth']], function(){
  Route::get('/app/','principal\principalController@index');
  Route::get('/administrador/getMetodosPagos','principal\principalController@getMetodosPagos');
    Route::get('/administrador/getFormasPagos','principal\principalController@getFormasPagos');
    Route::get('/cambiar-clave','principal\principalController@cambiar_clave');
    Route::post('/cambiar-clave/update','principal\principalController@update');
});
Route::get('/login/{dbName?}', function ($dbName=null) {

 if(isset($dbName))
 {  
  $colegio=\App\colegio\registroModel::where('dbName','=',$dbName);
  if($colegio->count()>0)
  {    
    $colegio=$colegio->first();
    if($colegio->imagen!='')
    {
      $data['imagen']=asset('logos/'.$colegio->imagen);
    }
    else
    {
     $data['imagen']=asset('img/logo.png');
   }
   Session::put('dbName', $dbName);
   Session::put('colegio', $colegio->colegio);
   Session::put('imagen', $colegio->imagen);
   return view('sesion.index',$data);
 }
 else
 {
  return redirect('/login');
}
}
else
{
  $data['colegios']=\App\colegio\registroModel::all();
  $data['imagen']=asset('img/logo.png');
  return view('sesion.index',$data);
}
});
Route::post('/sesion/entrar', 'sesion\sesionController@store');
Route::get('/logout', 'sesion\sesionController@logout');

//rutas para nuevos colegios
Route::get('colegio/registro', 'colegio\colegioController@index');
Route::post('colegio/registro/create', 'colegio\colegioController@create');
Route::post('colegio/registro/send_contact', 'colegio\colegioController@send_contact');
//fin Rutas para nuevos colegios


Route::group(['middleware' => ['auth','rol:admin']], function(){

   //configurar colegio
 Route::get('config_colegio', 'configuracion\colegioController@index');
 Route::post('config_colegio/update', 'configuracion\colegioController@update');


   //documentos a consignar
 Route::get('documentos-consignar', 'configuracion\documentosController@index');
  Route::post('documentos/create', 'configuracion\documentosController@create');
 Route::get('documentos/edit/{id?}','configuracion\documentosController@edit');
 Route::post('documentos/update','configuracion\documentosController@update');
 Route::get('documentos/delete/{id?}','configuracion\documentosController@delete');

   //configurar planillas
 Route::get('/configurar/planilla', 'configuracion\planillasController@index');
 Route::get('/configurar/planilla/nuevo-formato', 'configuracion\planillasController@nuevo');
 Route::get('/configurar/planilla/editar-formato/{planilla_id}', 'configuracion\planillasController@editar');
 Route::post('/configurar/planilla/create', 'configuracion\planillasController@create');

  //crud profesor
 Route::get('config_profesor', 'configuracion\profesorController@index');
 Route::any('create_profesor', 'configuracion\profesorController@create');
 Route::get('edit_profesor/{id?}','configuracion\profesorController@edit');
 Route::post('update_profesor','configuracion\profesorController@update');
 Route::get('delete_profesor/{id?}','configuracion\profesorController@delete');    

   //crud profesor
 Route::get('config_administrador', 'configuracion\administradorController@index');
 Route::any('create_administrador', 'configuracion\administradorController@create');
 Route::get('edit_administrador/{id?}','configuracion\administradorController@edit');
 Route::post('update_administrador','configuracion\administradorController@update');
 Route::get('delete_administrador/{id?}','configuracion\administradorController@delete');    



//rutas para horarios
 Route::get('config_horarios', 'configuracion\horarioController@index');
 Route::get('config_horarios/consultar', 'configuracion\horarioController@consultar');
 Route::post('create_horario', 'configuracion\horarioController@create');
 Route::get('delete_horario/{id}', 'configuracion\horarioController@delete');
 Route::get('getHorario/{id}', 'configuracion\horarioController@getHorario');
 Route::get('generarHorario/{id}', 'configuracion\horarioController@generarHorario');

 //consulta horario desde el administrdor
 Route::get('generarHorario_seccion/{id}', 'configuracion\horarioController@generarHorario_seccion');
 Route::get('/getHorario_seccion/{id}', 'configuracion\horarioController@getHorario_seccion');

//aula virtual
 Route::resource('/crear_aula', 'aulaVirtual\aulaVirtualController@index');
 Route::resource('/asignar_aula', 'aulaVirtual\aulaVirtualController@crear_aula');
 Route::resource('/aula', 'aulaVirtual\aulaVirtualController@aula');

//crud Seccion
 Route::get('config_seccion', 'configuracion\seccionController@index');
 Route::post('create_seccion', 'configuracion\seccionController@create');
 Route::get('edit_seccion/{id?}','configuracion\seccionController@edit');
 Route::post('update_seccion','configuracion\seccionController@update');
 Route::get('delete_seccion/{id?}','configuracion\seccionController@delete');

//crud grado
 Route::get('config_grado', 'configuracion\gradoController@index');
 Route::post('create_grado', 'configuracion\gradoController@create');
 Route::get('edit_grado/{id?}','configuracion\gradoController@edit');
 Route::post('update_grado','configuracion\gradoController@update');
 Route::get('delete_grado/{id?}','configuracion\gradoController@delete');

//crud Materia
 Route::get('config_materia', 'configuracion\materiaController@index');
 Route::post('create_materia', 'configuracion\materiaController@create');
 Route::get('edit_materia/{id?}','configuracion\materiaController@edit');
 Route::post('update_materia','configuracion\materiaController@update');
 Route::get('delete_materia/{id?}','configuracion\materiaController@delete');
 Route::get('getPrelacion/{id}','configuracion\materiaController@getPrelacion');


//crud cuota
 Route::get('config_cuotas', 'configuracion\cuotasController@index');
 Route::post('config_cuotas/create', 'configuracion\cuotasController@create');
 Route::get('edit_cuota/{id?}','configuracion\cuotasController@edit');
 Route::post('update_cuota','configuracion\cuotasController@update');
 Route::get('delete_cuota/{id?}','configuracion\cuotasController@delete');
 Route::get('nueva_cuota/{id?}','configuracion\cuotasController@nueva');
 Route::post('config_cuotas/detalles/create', 'configuracion\cuotasController@create_detalles');
 Route::post('config_cuotas/detalles/update', 'configuracion\cuotasController@update_detalles');
 Route::get('config_cuotas/detalles/delete/{id}', 'configuracion\cuotasController@delete_detalles');
 Route::get('config_cuotas/detalles/edit/{id}', 'configuracion\cuotasController@edit_detalles');
 Route::get('config_cuotas/detalles/mostrar/{id}', 'configuracion\cuotasController@show_detalles');


 Route::get('getInscripcion/{id}','configuracion\cuotasController@getInscripcion');

 //configurar monto inscripcion
 Route::get('config_monto_inscripcion', 'configuracion\monto_inscripcionController@index');
 Route::post('create_monto_inscripcion', 'configuracion\monto_inscripcionController@create');
 Route::get('edit_monto_inscripcion/{id?}','configuracion\monto_inscripcionController@edit');
 Route::post('update_monto_inscripcion','configuracion\monto_inscripcionController@update');
 Route::get('delete_monto_inscripcion/{id?}','configuracion\monto_inscripcionController@delete');


//crud Bancos
 Route::get('config_banco', 'configuracion\bancoController@index');
 Route::post('config_banco/create', 'configuracion\bancoController@create');
 Route::get('config_banco/edit/{id?}','configuracion\bancoController@edit');
 Route::post('config_banco/update','configuracion\bancoController@update');
 Route::get('config_banco/delete/{id?}','configuracion\bancoController@delete');

//crud Periodos
 Route::get('config_periodo', 'configuracion\periodoController@index');
 Route::post('config_periodo/create', 'configuracion\periodoController@create');
 Route::get('config_periodo/edit/{id?}','configuracion\periodoController@edit');
 Route::post('config_periodo/update','configuracion\periodoController@update');
 Route::get('config_periodo/delete/{id?}','configuracion\periodoController@delete');
 Route::get('config_periodo/activar/{id}', 'configuracion\periodoController@activar');
 Route::get('config_periodo/desactivar/{id}', 'configuracion\periodoController@desactivar');


 Route::get('pagos/registrar', 'pagos\pagosController@registrar');
  Route::get('pagos/buscar/{id}', 'pagos\pagosController@buscar');//registrar pagos
  Route::get('pagos/buscar_pagos/{id}', 'pagos\pagosController@buscar_pagos');//verificar pagos
  Route::post('pagos/procesar_pagos', 'pagos\pagosController@procesar_pagos');
  Route::get('pagos/verificar_pagos', 'pagos\pagosController@verificar_pagos');
  Route::post('pagos/procesar_pagos_verificados', 'pagos\pagosController@procesar_pagos_verificados');
  Route::get('pagos/procesados', 'pagos\pagosController@procesados');
  Route::get('pagos/pendientes', 'pagos\pagosController@pendientes');

  Route::get('pagos/historico', 'pagos\pagosController@historico');
  Route::get('pagos/buscar_historico/{id}', 'pagos\pagosController@buscar_historico');

  Route::get('pagos/detalles_historico/{id}', 'pagos\pagosController@detalles_historico');


  //pdf  
   //pagos
  Route::get('pdf/pagos_procesados', 'pdf\pagosController@pagos_procesados');
  Route::get('pdf/pagos_pendientes', 'pdf\pagosController@pagos_pendientes');

   //historico por alumno
  Route::get('pdf/pagos_general/{id}', 'pdf\historicoController@pagos_general');
  Route::get('pdf/mensualidad/{id}', 'pdf\historicoController@mensualidad');
  Route::get('pdf/detalles_pagos_general/{id}', 'pdf\historicoController@detalles_pagos_general');

   //pdf alumnos inscritos
  Route::get('pdf/alumnos/inscritos', 'pdf\alumnosController@inscritos');
  Route::get('pdf/alumnos/seccion/{id}', 'pdf\alumnosController@seccion');
  Route::get('pdf/alumnos/morosos', 'pdf\alumnosController@morosos');

    //pdf historico
  Route::get('pdf/historico/metodo_pago/{id}', 'pdf\historicoController@metodo_pago');
  Route::get('pdf/historico/tipo_pago/{tipo}', 'pdf\historicoController@tipo_pago');

   //pdf planillas
  Route::get('pdf/planillas/buscar/{planilla_id}/{alumno_id}', 'pdf\planillasController@cargar_planilla');
      //reportes
   //alumnos
  Route::get('reportes/alumnos/inscritos', 'reportes\alumnosController@inscritos');
  Route::get('reportes/alumnos/seccion', 'reportes\alumnosController@seccion');
  Route::get('/reportes/alumnos/buscar/seccion/{id}', 'reportes\alumnosController@buscar_seccion');
  Route::get('reportes/alumnos/morosos', 'reportes\alumnosController@morosos');

  Route::get('reportes/historico/metodo-pago','reportes\historicoController@metodo_pago');
  Route::get('reportes/historico/buscar/metodo-pago/{id}','reportes\historicoController@buscar_metodo_pago');
  Route::get('reportes/historico/tipo-pago','reportes\historicoController@tipo_pago');
  Route::get('reportes/historico/buscar/tipo-pago/{tipo}','reportes\historicoController@buscar_tipo_pago');

  Route::get('reportes/planillas', 'reportes\planillasController@index');

  Route::get('reportes/planillas/buscar/{planilla_id}/{alumno_id}', 'reportes\planillasController@cargar_planilla');







  //eventos administrador
  

});
Route::group(['middleware' => ['auth','rol:admin_profesor']], function(){
  Route::get('eventos/mis-eventos', 'eventos\eventosController@index');
  Route::get('eventos/todos-los-eventos', 'eventos\eventosController@todos_los_eventos');
  Route::get('eventos/getEventos', 'eventos\eventosController@getEventos');
  Route::get('eventos/getAll', 'eventos\eventosController@getAll');
  Route::post('eventos/create', 'eventos\eventosController@create');
  Route::post('eventos/update', 'eventos\eventosController@update');
  Route::get('eventos/delete/{id}', 'eventos\eventosController@delete');
});



//Mensajes
Route::get('mensajes', 'mensaje\mensajeController@index');
Route::get('mensajes/redactar', 'mensaje\mensajeController@redactar');
Route::get('mensajes/mostrar_entrantes/{id}', 'mensaje\mensajeController@mostrar_entrantes');
Route::post('mensajes/create', 'mensaje\mensajeController@create');
Route::get('mensajes/enviados', 'mensaje\mensajeController@enviados');
Route::get('mensajes/ver_mensajes/{id}', 'mensaje\mensajeController@ver_mensajes');
Route::get('mensajes/entradas', 'mensaje\mensajeController@entradas');
Route::post('mensajes/responder', 'mensaje\mensajeController@responder');


//Route::get('administrator', 'plantilla\adminController@index');

//rutas para profesores
/*Route::get('config_profesor', 'configuracion\profesorController@index');
Route::post('create_profesor', 'configuracion\profesorController@create');
Route::get('edit_profesor/{id?}','configuracion\profesorController@edit');
Route::post('update_profesor','configuracion\profesorController@update');
Route::get('delete_profesor/{id?}','configuracion\profesorController@delete');*/



//obtener materias depende el grado escolar
Route::get('materias/{id}','configuracion\gradoController@getMaterias');

//obtener secciones depende el grado escolar
Route::get('seccion/{id}','configuracion\seccionController@getSeccion');

//obtener secciones depende el grado escolar
Route::get('secciones/{idGrado}/{idMateria}','configuracion\gradoController@getSecciones');



//crud preinscripcion
 //datos representante
Route::get('preinscripcion', 'preinscripcion\preinscripcionController@index');
Route::post('preinscripcion/create/representante', 'preinscripcion\preinscripcionController@representante');
Route::post('preinscripcion/create/delegado', 'preinscripcion\preinscripcionController@delegado');
Route::get('preinscripcion/cargar_representante/{id}', 'preinscripcion\preinscripcionController@cargar_representante');
Route::get('preinscripcion/cargar_delegado/{id}', 'preinscripcion\preinscripcionController@cargar_delegado');
Route::get('preinscripcion/cargar_alumno/{id}', 'preinscripcion\preinscripcionController@cargar_alumno');
Route::post('preinscripcion/procesar', 'preinscripcion\preinscripcionController@procesar');
 // crud datos alumnos
Route::post('alumno/create', 'preinscripcion\preinscripcionController@create_alumno');
Route::get('alumno/edit/{id}', 'preinscripcion\preinscripcionController@edit_alumno');
Route::post('alumno/update', 'preinscripcion\preinscripcionController@update_alumno');
Route::post('alumno/delete/{id}', 'preinscripcion\preinscripcionController@delete_alumno');

 //administrar inscripcion-preinscripcion
Route::get('lista_preinscripcion', 'configuracion\preinscripcionController@index');




  //crud inscripcion
Route::group(['middleware' => ['rol:todos']], function(){
  Route::get('inscripcion/{codigo}/{id}', 'configuracion\inscripcionController@index');

//consultar eventos
  Route::get('eventos/mostrar-eventos', 'eventos\eventosController@mostrar');
   Route::get('eventos/mostrar_eventos', 'eventos\eventosController@mostrar_eventos');

   //horario

  Route::get('alumno/horario', 'alumno\horarioController@index');
  Route::get('/alumno/getHorario/{id}', 'alumno\horarioController@getHorario');

   //notas

  Route::get('/alumno/getNotas', 'alumno\notasController@index');
  Route::get('/alumno/notas/materia/{materia_id}/', 'alumno\notasController@getNotas');

});

// menu representante 
Route::group(['middleware' => ['rol:representante']], function(){
  //pagos
  Route::get('pagos/registrar', 'pagos\pagosController@registrar');
  Route::get('pagos/buscar/{id}', 'pagos\pagosController@buscar');
  Route::post('pagos/procesar_pagos', 'pagos\pagosController@procesar_pagos');
  Route::get('pagos/historico', 'pagos\pagosController@historico');
  Route::get('pagos/buscar_historico/{id}', 'pagos\pagosController@buscar_historico');
  Route::get('pagos/detalles_historico/{id}', 'pagos\pagosController@detalles_historico');

  //reportes pdf
  Route::get('pdf/pagos_general/{id}', 'pdf\historicoController@pagos_general');
  Route::get('pdf/mensualidad/{id}', 'pdf\historicoController@mensualidad');
  Route::get('pdf/detalles_pagos_general/{id}', 'pdf\historicoController@detalles_pagos_general');

 //horario

  Route::get('representante/horario', 'representante\horarioController@index');
  Route::get('/representante/getHorario/{id}', 'representante\horarioController@getHorario');

   //notas

  Route::get('/notas/getNotas', 'notas\notasController@index');
  Route::get('representante/getMaterias/{id}', 'notas\notasController@getMaterias');
  Route::get('/representante/notas/materia/{materia_id}/alumno/{alumno_id}', 'notas\notasController@getNotas');
});



Route::post('inscripcion/create', 'configuracion\inscripcionController@create');
//pertenece a inscripcion para cargar las cuotas a cancelar de un metodo de pago
Route::get('config_cuotas/detalles/buscar/{id}', 'configuracion\cuotasController@buscar_detalles');




Route::group(['middleware' => ['auth','rol:profesor']], function(){

  //profesor layaout
//carga de notas
  Route::get('/profesor', 'profesor\profesorController@index');
  Route::get('/profesor/cargar_notas', 'profesor\profesorController@cargar_notas');
  Route::post('/profesor/cargar_notas', 'profesor\carga_notaController@create');
  Route::get('/profesor/lista_alumnos/{materia_id}/{seccion_id}', 'profesor\profesorController@lista_alumnos');

//config Materias
  Route::get('/profesor/materias', 'profesor\config_materiasController@index');
  Route::post('/profesor/materias/create', 'profesor\config_materiasController@create');
  Route::get('/profesor/materias/edit/{id}', 'profesor\config_materiasController@edit');
  Route::post('/profesor/materias/update', 'profesor\config_materiasController@update');
  Route::get('/profesor/materias/delete/{id}/{materia_id}', 'profesor\config_materiasController@delete');

//horario

  Route::get('/profesor/horario', 'profesor\horarioController@index');
  Route::get('/profesor/getHorario/{id}', 'profesor\horarioController@getHorario');
});