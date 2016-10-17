<div class="col-sm-8 col-xs-12 col-sm-offset-2">
	<div class="btn-group">
	<a class="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Imprimir"  href="{{ asset('pdf/planillas/certificado/'.$alumno->idalumno) }}"><i class="fa fa-print fa-2x"></i></a>
	</div>
</div>
<div class="col-sm-8 col-xs-12 col-sm-offset-2">

	<div class="panel panel-default">
		<div class="panel-body">
			<p><center><h3><b>Constacia de Estudios</b></h3></center></p>
			<p>
				<br><br>
				<br><br>
				<br><br>
				Quien suscribe: <b>{{ strtoupper(Session::get('name')) }}</b>, Director del Colegio "<b>{{ strtoupper(Session::get('colegio')) }}</b>", hace constar por medio de la presente que el/la estudiante:
				<b>{{ strtoupper($alumno->nombre) }}{{ strtoupper($alumno->apellido) }}</b>, portador de la Cédula de Identidad Nº {{ $alumno->cedula }}, cursa el
				<b>{{ strtoupper($alumno->grado->grado) }}</b> grado de la sección <b>{{ strtoupper($seccion->seccion->seccion) }}</b> , Durante el periodo <b>{{ strtoupper($periodo->periodo) }}.
			</p>
			<br><br><br><br><br>
			<br><br>
			<p>
				<center><h4>Atentamente</h4></center>
				<br>
				<center>{{ strtoupper(Session::get('name')) }}</center>
				<br>
				<center>{{ strtoupper(Auth::user()->cedula) }}</center>
			</p>
		</div>
	</div>
</div>
