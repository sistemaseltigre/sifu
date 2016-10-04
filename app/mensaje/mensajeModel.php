<?php

namespace App\mensaje;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class mensajeModel extends Model
{
   protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
    protected $table='mensaje';
 protected $primaryKey='idmensaje';
 public $timestamps = false; 
 protected $fillable = array('autor_id','autor_rol','asunto','fecha','periodo_id');
 public function detalles()
  {
    return $this->hasMany('App\mensaje\detalles_mensajeModel','mensaje_id','idmensaje');
  }
}
