<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fecha extends Model
{
    public static function getDate($fecha) {
    	$fecha_=explode('-',$fecha);
    	$fecha_=$fecha_[2].'/'.$fecha_[1].'/'.$fecha_[0];
    return $fecha_;
 }
  public static function setDate($fecha) {
    $fecha_ = explode('/', $fecha);
    $fecha_=$fecha_[2].'-'.$fecha_[1].'-'.$fecha_[0];
    return $fecha_;
  }
}
