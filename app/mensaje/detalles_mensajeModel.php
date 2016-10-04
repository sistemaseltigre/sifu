<?php

namespace App\mensaje;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class detalles_mensajeModel extends Model
{
   protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
    protected $table='detalles_mensajes';
 protected $primaryKey='iddetalles_mensajes';
 public $timestamps = false; 
 protected $fillable = array('mensaje_id','autor_id','autor_rol','destino_rol','destino_id','mensaje','fecha');

 public function mensajes()
  {
    return $this->belongsTo('App\mensaje\mensajeModel','mensaje_id','idmensaje');
  }
}
