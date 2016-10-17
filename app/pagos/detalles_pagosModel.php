<?php

namespace App\pagos;

use Illuminate\Database\Eloquent\Model;

   use \App\dbManager;
use Session;
class detalles_pagosModel extends Model
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
	public function bancos()
	{
		return $this->belongsTo('App\configuracion\bancoModel','banco','idbanco');
	}
	public function pago()
	{
		return $this->belongsTo('App\pagos\pagosModel','pagos_id','id');
	}
}
