<?php

namespace App\mensualidad;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class detalles_pagos extends Model
{   
	protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
       protected $table='detalles_pagos';
 protected $primaryKey='id';
 public $timestamps = false; 
 protected $fillable = array('tipo','monto','banco','referencia','pagos_id','estatus');
}
