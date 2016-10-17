<?php

namespace App\Http\Controllers\pdf;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\colegioModel as colegio;
use \App\pagos\pagosModel as pagos;
class pagosController extends Controller
{
    public function pagos_procesados()
{
       $data['pagos']=pagos::where('estatus','=','procesado')->get();
       $data['colegio']=colegio::all()->first();             
        $view =  \View::make('pdf.pagos.procesados', $data)->render();
        $pdf = \App::make('dompdf.wrapper');
        $pdf->loadHTML($view);
        return $pdf->stream('pagos procesados -'.date('d-m-Y'));
}
 public function pagos_pendientes()
{
       $data['pagos']=pagos::where('estatus','=','pendiente')->get();
       $data['colegio']=colegio::all()->first();             
        $view =  \View::make('pdf.pagos.procesados', $data)->render();
        $pdf = \App::make('dompdf.wrapper');
        $pdf->loadHTML($view);
        return $pdf->stream('pagos pendientes -'.date('d-m-Y'));
}
}
