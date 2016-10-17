<?php

namespace App\pagos;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class pagosModel extends Model
{
	protected $connection ='default';
	public function __construct()
	{
		dbManager::configurar_bd(Session::get('dbName'));
		$this->connection=Session::get('dbName');
	}
	protected $table='pagos';
	protected $primaryKey='id';
	public $timestamps = false; 
	protected $fillable = array('fecha','alumno_id','monto','estatus');

	public function alumno()
	{
		return $this->belongsTo('App\datos\alumnoModel');
	}

	public function detalles()
	{
		return $this->hasMany('App\pagos\detalles_pagosModel','pagos_id','id');
	}
}
