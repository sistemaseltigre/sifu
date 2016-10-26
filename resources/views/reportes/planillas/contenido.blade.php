<div class="col-sm-8 col-xs-12 col-sm-offset-2">
	<div class="btn-group">
	<a class="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Imprimir"  href="{{ asset('pdf/planillas/buscar/'.$planillas->id.'/'.$alumno->idalumno) }}"><i class="fa fa-print fa-2x"></i></a>
	</div>
</div>
<div class="col-sm-8 col-xs-12 col-sm-offset-2">

	<div class="panel panel-default">
		<div class="panel-body">
		<?php $resultado = $planillas->contenido;
		$resultado = str_replace("var_cedula", $alumno->cedula, $resultado);
		$resultado = str_replace("var_nombres", $alumno->nombre, $resultado);
		$resultado = str_replace("var_apellidos", $alumno->apellido, $resultado);
		$resultado = str_replace("var_grado", $alumno->grado->grado, $resultado);
		$resultado = str_replace("var_seccion", $seccion->seccion->seccion, $resultado);
		$resultado = str_replace("var_periodo", $periodo->periodo, $resultado);

		?>
			{!! $resultado !!}
		</div>
	</div>
</div>
