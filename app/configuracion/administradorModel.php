<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use App;
use Session;
class administradorModel extends Model
{
    protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }

 protected $table='administrador';
 protected $primaryKey='idadministrador';
 public $timestamps = false; 
 protected $fillable = array('cedula', 'nombre', 'telefono','email','tipo');

}
