@extends('plantilla.layaout')
@section('content')
@if(Auth::user()->rolid==1)
<!-- top tiles -->
<div class="row tile_count">
	<div class="animated flipInY col-md-3 col-sm-6 col-xs-12 tile_stats_count">
		<div class="left"></div>
		<div class="right">
			<label class="count_top"><i class="fa fa-user"></i> Total de Alumnos</label>
			<div class="count green">{{ $total_alumnos }}</div>
		</div>
	</div>
	<div class="animated flipInY col-md-3 col-sm-6 col-xs-12 tile_stats_count">
		<div class="left"></div>
		<div class="right">
			<label class="count_top"><i class="fa fa-user"></i> Alumnos Morosos</label>
			<div class="count green">{{ $total_morosos }}</div>
		</div>
	</div>
	<div class="animated flipInY col-md-3 col-sm-6 col-xs-12 tile_stats_count">
		<div class="left"></div>
		<div class="right">
			<label class="count_top"><i class="fa fa-user"></i> Pagos Registrados</label>
			<div class="count green">{{ $pagos_registrados }}</div>
		</div>
	</div>
	<div class="animated flipInY col-md-3 col-sm-6 col-xs-12 tile_stats_count">
		<div class="left"></div>
		<div class="right">
			<label class="count_top"><i class="fa fa-user"></i> Pagos Pendientes</label>
			<div class="count green">{{ $pagos_pendientes }}</div>
		</div>
	</div>
</div>
<div class="row">
	<div class="col-md-6 col-sm-6 col-xs-12">
		<div class="x_panel tile fixed_height_320 overflow_hidden">
			<div class="x_title">
				<h2>Metodos de pagos Utilizados</h2>
				<ul class="nav navbar-right panel_toolbox">
					<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
					</li>
				</ul>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">

				<table class="" style="width:100%">
					<tr>
						<th style="width:37%;">
							<p>Top 5</p>
						</th>
						<th>
							<div class="col-lg-7 col-md-7 col-sm-7 col-xs-7">
								<p class="">Device</p>
							</div>
							<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
								<p class="">Progress</p>
							</div>
						</th>
					</tr>
					<tr>
						<td>
							<canvas id="canvas1" height="140" width="140" style="margin: 15px 10px 10px 0"></canvas>
						</td>
						<td>
							<table class="tile_info">
							@foreach ($metodos as $metodo)
								<tr>
									<td>
										<p><i class="fa fa-square blue"></i> {{ $metodo->descripcion }} </p>
									</td>
									<td> {{ $metodo->total }}</td>
								</tr>			
							@endforeach
													
							</table>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</div>
<script>
	Chart.defaults.global.legend = {
		enabled: false
	};
	var data='';
	$(document).on('ready', function() {

		$.ajax({
			url: app_url+'/administrador/getMetodosPagos',
			data: {_token: "{!!csrf_token()!!}"},
			dataType: 'json',
			method: "GET"
		}).done(function (data) {
			var canvasDoughnut = new Chart(document.getElementById("canvas1"), {
				type: 'doughnut',
				tooltipFillColor: "rgba(51, 51, 51, 0.55)",
				data: data
			});
		});

	});


	
	console.log(data);
	var canvasDoughnut = new Chart(document.getElementById("canvas1"), {
		type: 'doughnut',
		tooltipFillColor: "rgba(51, 51, 51, 0.55)",
		data: data
	});
</script>
@endif
<div class="row">
	<h1>Bienvenido a SIFU</h1>
	<br>
	<h4><p>Actualmente continuamos trabajando para implementar las diferentes funciones y m&oacute;dulos para tener un sistema completo y robusto</p></h4>
	<h4>
		<p>
			Agradecemos y valoramos cualquier observaci&oacute;n y recomendaci&oacute;n que puedan hacernos llegar

		</p>
	</h4>

	<h4>
		<p>
			Usuarios disponibles:
			<br>
			<p>
				Administrador/Director: Encargado de realizar la configuraci&oacute;n del colegio y personalizar cada m&oacute;dulo.
			</p>
			<p>
				Profesor: Encargado de Configurar materia y realizar la carga de la nota.
			</p>

		</p>
	</h4>

	
</div>
@stop