<?php

namespace App\configuracion;

use Illuminate\Database\Eloquent\Model;
use \App\dbManager;
use Session;
class monto_inscripcionModel extends Model
{
	 protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
  protected $table='monto_inscripcion';
  protected $primaryKey='id';
  public $timestamps = false; 
  protected $fillable = array('inscripcion','periodo_id','seguro','otro');
  public function periodo()
    {
        return $this->belongsTo('App\configuracion\periodoModel');
    }
}
