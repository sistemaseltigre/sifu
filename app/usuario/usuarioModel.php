<?php

namespace App\usuario;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Authenticatable;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;
use \App\dbManager;
use Session;
use App;
  
  class usuarioModel extends model implements AuthenticatableContract,
  AuthorizableContract,
  CanResetPasswordContract
  {  	
    use Authenticatable, Authorizable, CanResetPassword;

   protected $connection ='default';
	public function __construct()
    {
        	dbManager::configurar_bd(Session::get('dbName'));
        $this->connection=Session::get('dbName');
    }
   protected $table='usuario';
   protected $primaryKey='idusuario';
   public $timestamps = false; 
   protected $fillable = array('colegio','codigo','usuario','password','remember_token','rolid','id');
   
  
 }
