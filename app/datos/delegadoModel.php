<?php

namespace App\datos;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class delegadoModel extends Model
{
   protected $connection ='default';
  public function __construct()
    {
          dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
 protected $table='delegado';
 protected $primaryKey='iddelegado';
 public $timestamps = false; 
 protected $fillable = array('nombre', 'parentesco','telefono_principal','telefono_opcional','email','direccion','colegio_id','cedula');

 public static function createDelegado($request)
 {
  $delegado= new delegadoModel;
  $delegado->cedula=$request['txtCedular'];
  $delegado->nombre=$request['txtNombrer'];
  $delegado->parentesco=$request['txtParentesco'];
  $delegado->telefono_principal=$request['txtTelefono1r'];
  $delegado->telefono_opcional=$request['txtTelefono2r'];
  $delegado->email=$request['txtEmailr'];
  $delegado->direccion=$request['txtDireccionr'];
  $delegado->representante_id=$request['representante_id'];
  $delegado->save();
  return $delegado->iddelegado;
 }
  public static function updateDelegado($request)
  {
    $datos=delegadoModel::find($request['delegado_id']);
    $datos->cedula=$request['txtCedular'];
    $datos->nombre=$request['txtNombrer'];
    $datos->parentesco=$request['txtParentesco'];
    $datos->telefono_principal=$request['txtTelefono1r'];
    $datos->telefono_opcional=$request['txtTelefono2r'];
    $datos->email=$request['txtEmailr'];
    $datos->direccion=$request['txtDireccionr'];
    $datos->save();
  }
}
