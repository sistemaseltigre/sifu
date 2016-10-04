<?php

namespace App\datos;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class alumnoModel extends Model
{
 protected $connection ='default';
 public function __construct()
 {
  dbManager::configurar_bd(Session::get('dbName'));
  $this->connection=Session::get('dbName');
}
protected $table='alumno';
protected $primaryKey='idalumno';
public $timestamps = false; 
protected $fillable = array('cedula','nombre', 'fechaNacimiento','nacionalidad','comunion', 'genero','procedencia','representante_id','delegado_id','email','direccion','grado_id','estatus','apellido');

  //relacion con representante 1 alumno tiene 1 representante
public function representante()
{
  return $this->belongsTo('App\datos\representanteModel');
}
public function delegado()
{
  return $this->belongsTo('App\datos\delegadoModel');
}
public function grado()
{
  return $this->belongsTo('App\configuracion\gradoModel');
}
public static function createAlumno($request)
{
  $fechaN=explode("/", $request['txtFecha']);
  $fechaN=$fechaN[2].'-'.$fechaN[1].'-'.$fechaN[0];

  $alumno=new alumnoModel;
  $alumno->cedula=$request['txtCedula'];
  $alumno->nombre=$request['txtNombre'];
  $alumno->apellido=$request['txtApellido'];
  $alumno->fechaNacimiento=$fechaN;
  $alumno->nacionalidad=$request['txtNacionalidad'];
  $alumno->comunion=$request['cmbComunion'];
  $alumno->genero=$request['cmbGenero'];
  $alumno->procedencia=$request['txtProcedencia'];
  $alumno->representante_id=$request['representante_id'];
  $alumno->delegado_id=$request['delegado_id'];
  $alumno->email=$request['txtEmail'];
  $alumno->direccion=$request['txtDireccion'];
  $alumno->grado_id=$request['cmbGrado'];
  $alumno->estatus='pendiente';

  $alumno->peso=$request['txtPeso'];
  $alumno->talla=$request['txtTalla'];
  $alumno->altura=$request['txtAltura'];
  $alumno->zapato=$request['txtZapato'];
  $alumno->observacion=$request['txtObservacion'];
  $alumno->save();



  return $alumno->idalumno;
}

public static function updateAlumno($request)
{
  $fechaN=explode("/", $request['txtFecha']);
  $fechaN=$fechaN[2].'-'.$fechaN[1].'-'.$fechaN[0];
  $datos=alumnoModel::find($request['id']);
  $datos->cedula=$request['txtCedula'];
  $datos->nombre=$request['txtNombre'];
  $datos->apellido=$request['txtApellido'];
  $datos->fechaNacimiento=$fechaN;
  $datos->nacionalidad=$request['txtNacionalidad'];
  $datos->comunion=$request['cmbComunion'];
  $datos->genero=$request['cmbGenero'];
  $datos->procedencia=$request['txtProcedencia'];
  $datos->email=$request['txtEmail'];
  $datos->grado_id=$request['cmbGrado'];
  $datos->direccion=$request['txtDireccion'];
  $alumno->peso=$request['txtPeso'];
  $alumno->talla=$request['txtTalla'];
  $alumno->altura=$request['txtAltura'];
  $alumno->zapato=$request['txtZapato'];
  $alumno->observacion=$request['txtObservacion'];
  $datos->save();
}

public static function deleteAlumno($id)
{
 $datos = alumnoModel::find($id);
 $datos->delete();
}

}
