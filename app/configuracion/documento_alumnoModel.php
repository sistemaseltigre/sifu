<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;

class documento_alumnoModel extends Model
{

	protected $connection ='default';
	public function __construct()
	{
		dbManager::configurar_bd(Session::get('dbName'));
		$this->connection=Session::get('dbName');
	}
	protected $table='documento_alumno';
	protected $primaryKey='id';
	public $timestamps = false; 
	protected $fillable = array('documento_id','alumno_id');
}
