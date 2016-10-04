<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class bancoModel extends Model
{
	 protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
 protected $table='banco';
 protected $primaryKey='idbanco';
 public $timestamps = false; 
 protected $fillable = array('banco','cuenta','tipo','colegio_id','titular','email','cedula');
}
