<div class="col-sm-8 col-xs-12 col-sm-offset-2">
	<div class="btn-group">
		<a class="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Imprimir"  href="{{ asset('pdf/planillas/buscar/'.$planillas->id.'/'.$alumno->idalumno) }}"><i class="fa fa-print fa-2x"></i></a>
	</div>
</div>
<div class="col-sm-8 col-xs-12 col-sm-offset-2">

	<div class="panel panel-default">
		<div class="panel-body">

			<?php $resultado = $planillas->contenido;
			if(Session::get('imagen'))
			{
				$logo=asset('/logos/'.Session::get('imagen'));
			}
			else
			{
				$logo=asset('/img/logo.png');
			}
			$resultado = str_replace("var_logo", "<img src=\"$logo\" style=\"width:100px; height:100px\"> ", $resultado);
		//periodo
			$resultado = str_replace("var_periodo", $periodo->periodo, $resultado);
		//Alumno
			$resultado = str_replace("A_cedula", $alumno->cedula, $resultado);
			$resultado = str_replace("A_nombres", $alumno->nombre, $resultado);
			$resultado = str_replace("A_apellidos", $alumno->apellido, $resultado);
			$resultado = str_replace("A_grado", $alumno->grado->grado, $resultado);
			$resultado = str_replace("A_seccion", $seccion->seccion->seccion, $resultado);
			$resultado = str_replace("A_direccion", $alumno->direccion, $resultado);
			$resultado = str_replace("A_religion", $alumno->religion, $resultado);
			$resultado = str_replace("A_comunion", $alumno->comunion, $resultado);
			$resultado = str_replace("A_peso", $alumno->peso, $resultado);
			$resultado = str_replace("A_talla", $alumno->talla, $resultado);
			$resultado = str_replace("A_altura", $alumno->altura, $resultado);
			$resultado = str_replace("A_zapato", $alumno->zapato, $resultado);
			$resultado = str_replace("A_observacion", $alumno->observacion, $resultado);

		//representante
			$resultado = str_replace("R_cedula", $r->cedula, $resultado);
			$resultado = str_replace("R_nombres", $r->nombre, $resultado);
			$resultado = str_replace("R_profesion", $r->profesion, $resultado);
			$resultado = str_replace("R_telefonoPrincipal", $r->telefono_principal, $resultado);
			$resultado = str_replace("R_telefonoOpcional", $r->telefono_opcional, $resultado);
			$resultado = str_replace("R_email", $r->email, $resultado);
			$resultado = str_replace("R_direccion", $r->direccion, $resultado);

//representante
			$resultado = str_replace("D_cedula", $d->cedula, $resultado);
			$resultado = str_replace("D_nombres", $d->nombre, $resultado);
			$resultado = str_replace("D_parentesco", $d->parentesco, $resultado);
			$resultado = str_replace("D_telefonoPrincipal", $d->telefono_principal, $resultado);
			$resultado = str_replace("D_telefonoOpcional", $d->telefono_opcional, $resultado);
			$resultado = str_replace("D_email", $d->email, $resultado);
			$resultado = str_replace("D_direccion", $d->direccion, $resultado);

			?>
			{!! $resultado !!}
		</div>
	</div>
</div>
