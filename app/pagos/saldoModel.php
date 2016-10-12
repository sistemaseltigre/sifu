<?php

namespace App\pagos;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class saldoModel extends Model
{

	protected $connection ='default';
	public function __construct()
	{
		dbManager::configurar_bd(Session::get('dbName'));
		$this->connection=Session::get('dbName');
	}
	protected $table='saldo';
	protected $primaryKey='id';
	public $timestamps = false; 
	protected $fillable = array('representante_id','delegado_id','alumno_id','saldo');
}
