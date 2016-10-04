<?php

namespace App\datos;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class representanteModel extends Model
{
   protected $connection ='default';
  public function __construct()
    {
          dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='representante';
  protected $primaryKey='idrepresentante';
  public $timestamps = false; 
  protected $fillable = array('nombre', 'profesion','telefono_principal','telefono_opcional','email','direccion','colegio_id','cedula','estatus');
//relaciones con alumno 1 representante puede tener muchos alumno
  public function alumnos()
    {
        return $this->hasMany('App\datos\alumno');
    }
    public function delegado()
    {
      return $this->belongsTo('App\datos\delegadoModel','idrepresentante','representante_id');
    }

  public static function createRepresentante($request)
  {
  $representante= new representanteModel;
  $representante->cedula=$request['txtCedula'];
  $representante->nombre=$request['txtNombre'];
  $representante->profesion=$request['txtProfesion'];
  $representante->telefono_principal=$request['txtTelefono1'];
  $representante->telefono_opcional=$request['txtTelefono2'];
  $representante->email=$request['txtEmail'];
  $representante->direccion=$request['txtDireccion'];
  $representante->estatus='pendiente';
  $representante->save();
  
    return $representante->idrepresentante;
  }
  public static function updateRepresentante($request)
  {
    $datos=representanteModel::find($request['representante_id']);
    $datos->cedula=$request['txtCedula'];
    $datos->nombre=$request['txtNombre'];
    $datos->profesion=$request['txtProfesion'];
    $datos->telefono_principal=$request['txtTelefono1'];
    $datos->telefono_opcional=$request['txtTelefono2'];
    $datos->email=$request['txtEmail'];
    $datos->direccion=$request['txtDireccion'];
    $datos->save();
  }
}
