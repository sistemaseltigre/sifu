<?php

namespace App\colegio;

use Illuminate\Database\Eloquent\Model;

class registroModel extends Model
{
    protected $table='registro';
 protected $primaryKey='id';
 public $timestamps = false; 
 protected $fillable = array('colegio','nombre_contacto','codigo','fecha','email','telefono','pais_id','licencia','password','usuario','imagen','dbName');
}
