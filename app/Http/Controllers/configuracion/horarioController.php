<?php

namespace App\Http\Controllers\configuracion;

use Illuminate\Http\Request;
use DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use \App\configuracion\horarioModel;
use \App\configuracion\gradoModel;
use \App\configuracion\seccionModel;
use \App\configuracion\profesorModel;
use \App\configuracion\materiaModel;
use Session;
use \App\configuracion\materias_profesorModel  as materia_profesor;
class horarioController extends Controller
{
  public function index()
  {
    $data['grado']=gradoModel::allGrados();
    $data['seccion']=seccionModel::allSeccion();
    $data['profesor']=profesorModel::all();
    return view('configuracion.horario.index',$data);
  }

  public function create(Request $request)
  {
    $horasDisponibles='';    
    $dias_validacion=false;
    $seccion_id=false;
    $secciones=seccionModel::getSeccion($request['cmbGrado']);  
    foreach ($secciones as $seccion)
    { 
      $choque_materias=horarioModel::validarChoque_materias($request, $seccion->idseccion);
     // echo $choque_materias.'<br>';
      if($choque_materias!=0) 
      {
        continue;
      }

      $dia=horarioModel::validarDia($seccion->idseccion,$request);
     // echo '<br> seccion= '.$seccion->idseccion;
     // echo '<br> dia= '.$dia;

      if($dia==0)
      {
        $dias_validacion=true;
        $seccion_id=$seccion->idseccion; 
      //  echo ' <br> dia= '.$dia.' si dia es igual a cero entonces esta disponible el dia';
        $materia=horarioModel::validarMateria($seccion_id,$request);
       // echo ' <br> materia= '.$materia.' si materia es mayor que cero, la seccion tiene materia asignada';

        $tiempoM=materiaModel::tiempo($request['cmbMateria']);
        $tiempoMateria=$tiempoM->tiempo;

        if($materia>0)
        {        
          $profesor=horarioModel::validarProfesor($seccion_id,$request); 
        //  echo ' <br> Profesor= '.$profesor.' si profesor es igual a cero, el profesor seleccionado no puede impartir clases en esa seccion<br><br>';     

        //si profesor es mayor a cero se busca cuantas horas tiene asignado
          if($profesor!=0)
          {
            $horas=horarioModel::validarHoras($seccion_id,$request);
            $horas_impartidas="00:00:00";
            foreach ($horas as $hora) {
              $horas_impartidas=date("H:i:s", strtotime($horas_impartidas) + strtotime($hora->hora_final) - strtotime($hora->hora_inicio));

            //  echo 'hora inicio: '.$hora->hora_inicio.'<br>hora final: '.$hora->hora_final;
            }
         // se busca el tiempo de curso de la materia especificada

            $tiempoTotal=date("H:i:s",strtotime($request['txtHoraFinal'])-strtotime($request['txtHoraInicio'])+strtotime($horas_impartidas));
           // echo 'Horas por Materia: '.$tiempoMateria.' Asignadas: '.$tiempoTotal;
            if(date("H:i:s",strtotime($tiempoMateria))>=date("H:i:s",strtotime($tiempoTotal)))
            {
              $horasDisponibles=true;
            }
            else
            {
              $horasDisponibles=false;
            }

           // echo '<br> Horas Materia: '.$tiempoMateria;
           // echo '<br> Horas Asignadas + actual: '.$tiempoTotal.'<br>';

           // echo 'Horas Asignadas: '. $horas_impartidas; 
            if($horasDisponibles==true)
            {              
              break;
            }
          } 
          else
          {
            $seccion_id=false;

          }

        }
        else
        {
          $tiempoTotal=date("H:i:s",strtotime($request['txtHoraFinal'])-strtotime($request['txtHoraInicio']));
        //  echo '<br> Horas Asignadas: '.$tiempoTotal.'<br>';
        //  echo '<br> Horas Materia: '.$tiempoMateria;
         // echo 'Horas por Materia: '.$tiempoMateria.' Asignadas: '.$tiempoTotal;
          if(date("H:i:s",strtotime($tiempoMateria))>=date("H:i:s",strtotime($tiempoTotal)))
          {
            $horasDisponibles=true;
          }
          else
          {
            $horasDisponibles=false;
          }
          break;
        }

      }
      else
      {        
        $dias_validacion=false;
        $seccion_id=false;
      }

      
    }
    $choque=horarioModel::validarChoque($request);

    $data=array(
      'choque'=>$choque,
      'choque_materias'=>$choque,
      'dias'=>$dias_validacion,
      'seccion'=>$seccion_id,
      'horas'=>$horasDisponibles
      ) ;
    echo json_encode($data);  

    if(trim($choque_materias)==0 &&trim($choque)==0 && ($seccion_id!=false) && ($horasDisponibles!=false))
    {
      $horario= new horarioModel;
      $horario->materia_id=$request['cmbMateria'];
      $horario->profesor_id=$request['cmbProfesor'];
      $horario->dia=$request['cmbDia'];
      $horario->seccion_id=$seccion_id;
      $horario->hora_inicio=$request['txtHoraInicio'];
      $horario->hora_final=$request['txtHoraFinal'];
      $horario->horas_curso=date("H:i:s", strtotime("00:00:00") + strtotime($request['txtHoraFinal']) - strtotime($request['txtHoraInicio']));
      $horario->colegio_id=1;
      $horario->save();

      $numRegistro= materia_profesor::where('materia_id','=',$request['cmbMateria'])
      ->where('profesor_id','=',$request['cmbProfesor'])->count();
      if($numRegistro==0)
      {      
        $materia_profesor= new materia_profesor;
        $materia_profesor->materia_id=$request['cmbMateria'];
        $materia_profesor->profesor_id=$request['cmbProfesor'];
        $materia_profesor->estatus='inactivo';
        $materia_profesor->save();
      }



    }



  }
  public function generarHorario($id)
  {
    $data['profesor_id']=$id;
    echo view('configuracion.horario.horario',$data);    

  }
    public function generarHorario_seccion($id)
  {
    $data['seccion_id']=$id;
    echo view('configuracion.horario.horario_seccion',$data);    

  }
  public function getHorario($id)
  {
   $datos =DB::connection(Session::get('dbName'))->table('horario')
   ->join('profesor', 'horario.profesor_id', '=', 'profesor.idprofesor')
   ->join('materia', 'horario.materia_id', '=', 'materia.idmateria')
   ->join('seccion', 'horario.seccion_id', '=', 'seccion.idseccion')
   ->join('grado', 'seccion.grado_id', '=', 'grado.idgrado')
   ->join('periodo', 'grado.periodo_id', '=', 'periodo.idperiodo')
   ->where('horario.profesor_id', '=',$id)
   ->where('periodo.estatus', '=','activo')
   ->get();
   $event_array = array();
   foreach ($datos as $row) {
    $event_array[] = array(
      'id' => $row->idhorario,
      'title' => $row->nombre_profesor,
      'description'=>$row->materia,
      'start' =>$row->dia.'T'.$row->hora_inicio,
      'end' =>$row->dia.'T'.$row->hora_final,
      'fecha' => '2014-01-01',
      'seccion' => $row->seccion,
      'grado' => $row->grado,
      'horario' =>'De: '.$row->hora_inicio.' Hasta: '.$row->hora_final,
    'color' => '#'.rand(000000,999999), //this is what I'm was looking for!
    );
  }
  echo json_encode($event_array);

}
public function delete($id)
{
  $horario=horarioModel::find($id);
  $horario->delete();
  $numRegistro= materia_profesor::where('materia_id','=',$horario->materia_id)
  ->where('profesor_id','=',$horario->profesor_id)->count();
  if($numRegistro==1)
  {
   $materia_profesor= materia_profesor::where('materia_id','=',$horario->materia_id)
   ->where('profesor_id','=',$horario->profesor_id)->first();
   $materia_profesor->delete();
 }
}

public function consultar()
{
  $data['grados']=gradoModel::allGrados();
  $data['seccion']=seccionModel::allSeccion();
  $data['profesor']=profesorModel::all();
  return view('configuracion.horario.consultar.index',$data);
}

public function getHorario_seccion($id)
{
 $datos =DB::connection(Session::get('dbName'))->table('horario')
 ->join('profesor', 'horario.profesor_id', '=', 'profesor.idprofesor')
 ->join('materia', 'horario.materia_id', '=', 'materia.idmateria')
 ->join('seccion', 'horario.seccion_id', '=', 'seccion.idseccion')
 ->join('grado', 'seccion.grado_id', '=', 'grado.idgrado')
 ->join('periodo', 'grado.periodo_id', '=', 'periodo.idperiodo')
 ->where('horario.seccion_id', '=',$id)
 ->where('periodo.estatus', '=','activo')
 ->get();
 $event_array = array();
 foreach ($datos as $row) {
  $event_array[] = array(
    'id' => $row->idhorario,
    'title' => $row->nombre_profesor,
    'description'=>$row->materia,
    'start' =>$row->dia.'T'.$row->hora_inicio,
    'end' =>$row->dia.'T'.$row->hora_final,
    'fecha' => '2014-01-01',
    'seccion' => $row->seccion,
    'grado' => $row->grado,
    'horario' =>'De: '.$row->hora_inicio.' Hasta: '.$row->hora_final,
    'color' => '#'.rand(000000,999999), //this is what I'm was looking for!
    );
}
echo json_encode($event_array);

}
}
