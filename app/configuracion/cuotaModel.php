<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class cuotaModel extends Model
{
	 protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='cuota';
  protected $primaryKey='idcuota';
  public $timestamps = false; 
  protected $fillable = array('inscripcion','periodo_id','cuota','colegio_id','seguro','otro');
  public function periodo()
    {
        return $this->belongsTo('App\configuracion\periodoModel');
    }
}
