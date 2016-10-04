<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class periodoModel extends Model
{
	 protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
   protected $table='periodo';
  protected $primaryKey='idperiodo';
  public $timestamps = false; 
  protected $fillable = array('periodo', 'estatus','colegio_id');
}
