@extends('plantilla.layaout')
@section('content')
 @if(Session::get('dias_restantes')<=0)
 <div class="row">
	<p><h2>Bienvenido <b>{{ Session::get('name') }}</b> a la plataforma educativa <b>SIFU</b></h2></p>
	<br><br>
	<p>Para Seguir disfrutando del sistema recuerda realizar el pago de tu mensualidad.
	</p>

</div>

@else

<div class="row">
	<p><h2>Bienvenido <b>{{ Session::get('name') }}</b> a la plataforma educativa <b>SIFU</b></h2></p>
	<br><br>
	<p>Recuerda revisar tus mensajes, horario y calendario. 
	</p>

</div>
@if(Auth::user()->rolid==1)
<style>
	.chart-legend li span{
		display: inline-block;
		width: 12px;
		height: 12px;
		margin-right: 5px;
	}
</style>
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
		<div class="x_panel tile">
			<div class="x_title">
				<h2>Metodos de pagos Utilizados</h2>
				<ul class="nav navbar-right panel_toolbox">
					<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
					</li>
				</ul>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">

				<canvas id="metodos" style="width: 100%; height: auto"></canvas>
				<div class="row">
					<div id="legend-metodos" class="chart-legend"></div>
				</div>
			</div> 
		</div>
	</div>
	<div class="col-md-6 col-sm-6 col-xs-12">
		<div class="x_panel tile">
			<div class="x_title">
				<h2>Formas de pagos Utilizados</h2>
				<ul class="nav navbar-right panel_toolbox">
					<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
					</li>
				</ul>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">

				<canvas id="formas" style="width: 100%; height: auto"></canvas>
				<div class="row">
					<div id="legend-formas" class="chart-legend"></div>
				</div>
			</div> 
		</div>
	</div>
</div>
<script>

	var data='';
	$(document).on('ready', function() {

		$.ajax({
			url: app_url+'/administrador/getMetodosPagos',
			data: {_token: "{!!csrf_token()!!}"},
			dataType: 'json',
			method: "GET"
		}).done(function (data) {
			console.log(data['datasets'].length);
			/*var legend="<ul style='list-style-type:none'>";
			for(var i=0; i < data["datasets"].length; i++ )
			{
				legend+="<li><div style=\"background-color:"+ data['datasets'][i]['backgroundColor']+"; height:20px; width:20px; float:left; margin:-2px 15px;\"></div>"+data['datasets'][i]['label'] +" "+(data['datasets'][i]['data']*100/data['datasets'][i]['total'])+" % </li>";
			}
			legend+="</ul>";*/
			var canvasDoughnut = new Chart(document.getElementById("metodos"), {
				type: 'doughnut',
				tooltipFillColor: "rgba(51, 51, 51, 0.55)",
				data: data,
				responsive : true,
				cutoutPercentage: 10,
			});
			//document.getElementById('legend-metodos').innerHTML = legend;
		});
		$.ajax({
			url: app_url+'/administrador/getFormasPagos',
			data: {_token: "{!!csrf_token()!!}"},
			dataType: 'json',
			method: "GET"
		}).done(function (data) {
			console.log(data['labels'].length);
			/*var legend="<ul style='list-style-type:none'>";
			for(var i=0; i<data['labels'].length;i++ )
			{
				legend+="<li><div style=\"background-color:"+ data['datasets']['backgroundColor']+"; height:20px; width:20px; float:left; margin:-2px 15px;\"></div>"+data['datasets']['label'] +" "+(data['datasets']['data']*100/data['datasets']['total'])+" % </li>";
			}
			legend+="</ul>";*/
			var canvasDoughnut = new Chart(document.getElementById("formas"), {
				type: 'doughnut',
				tooltipFillColor: "rgba(51, 51, 51, 0.55)",
				data: data,
				responsive : true,
				cutoutPercentage: 10,
			});
			//document.getElementById('legend-formas').innerHTML = legend;
		});
	});

</script>

@endif
<div class="row">
	<div class="col-md-12 col-sm-12 col-xs-12">
		<div class="x_panel tile">
			<div class="x_title">
				<h2>Eventos</h2>
				<ul class="nav navbar-right panel_toolbox">
					<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
					</li>
				</ul>
				<div class="clearfix"></div>
			</div>
			<div class="x_content">

				@include('plantilla.eventos')
			</div> 
		</div>
	</div>
</div>


 @endif   


@stop