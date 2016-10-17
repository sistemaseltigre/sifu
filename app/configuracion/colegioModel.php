<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class colegioModel extends Model
{

	protected $connection ='default';
	public function __construct()
	{
		dbManager::configurar_bd(Session::get('dbName'));
		$this->connection=Session::get('dbName');
	}
	protected $table='colegio';
	protected $primaryKey='id';
	public $timestamps = false; 
	protected $fillable = array('colegio','nombre_contacto','codigo','email','telefono','telefono2', 'direccion');
	}
