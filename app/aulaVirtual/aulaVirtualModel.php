<?php

namespace App\aulaVirtual;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class aulaVirtualModel extends Model
{
	 protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='aulaVirtual';
  protected $primaryKey='id';
  public $timestamps = false; 
  protected $fillable = array('idusuario','asunto','descripcion','cantidad','fecha');
}