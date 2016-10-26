<?php

namespace App\eventos;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use App;
use Session;
class eventosModel extends Model
{

	protected $connection ='default';
	public function __construct()
	{
		dbManager::configurar_bd(Session::get('dbName'));
		$this->connection=Session::get('dbName');
	}

	protected $table='eventos';
	protected $primaryKey='id';
	public $timestamps = false; 
	protected $fillable = array('titulo', 'inicio', 'fin','allDay','rol_id','create_id');
}
