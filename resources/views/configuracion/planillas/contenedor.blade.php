@extends('plantilla.layaout')
@section('content')
<script src="{{ asset('/vendors/ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('/vendors/ckeditor/adapters/jquery.js') }}"></script>

<script src=" {{ asset('js/chosen.jquery.js') }}" type="text/javascript"></script>
<link rel="stylesheet" href="{{ asset('css/chosen.css') }}">
<script>
	$(document).ready(function(){ 

		CKEDITOR.replace( 'txtContenido', {
			language: 'es',
			uiColor: '#dff0d8',
			height: 500,
			removeButtons:'Underline,Subscript,Superscript',
			format_tags: 'p;h1;h2;h3;pre',
		});

		$('#cmbAcceso').chosen();
	});

	function agregar(valor)
	{
		var texto=CKEDITOR.instances.txtContenido.getData();
		var oEditor = CKEDITOR.instances.txtContenido;
		oEditor.insertHtml(valor);
	}
</script>
<div class="panel panel-default">
	<div class="panel-heading">Configuración de la planilla
		<span class="pull-right">?</span></div>
		<div class="panel-body" id="lista">
			<form class="form-horizontal" id="formulario" name="formulario" method="post" action="{{ asset('/configurar/planilla/create') }}"> 
				{{ csrf_field() }}
				@if (isset($planilla->id))
				<input type="hidden" name="planilla_id" id="planilla_id" value="{{ $planilla->id }}">
				@endif
				<div class="row">
					<div class="col-sm-9 col-sm-offset-3 col-xs-12">
						<div class="form-group"> 
							<label class="control-label col-sm-3">Nombre del Formato</label>
							<div class="col-sm-6">
								<input type="text" name="txtFormato" name="txtFormato" class="form-control" value="@if(isset($planilla->formato)){{ $planilla->formato }}@endif">
							</div>
						</div>
						<div class="form-group"> 
							<label class="control-label col-sm-3">Acceso para</label>
							<div class="col-sm-6">
								<select name="cmbAcceso[]" id="cmbAcceso" style="width:100%;" data-placeholder="Seleccione Acceso para el Formato"  multiple class="chosen-select" tabindex="5">		<?php 
									$bandera_profesores=false;
									$bandera_alumnos=false;
									$bandera_representantes=false;
									?>						
									<option value=""></option>
									@if(isset($planilla->accesos))
									@foreach ($planilla->accesos as $acceso)
									@if($acceso->rol_id==2)
									<option value="2" selected >Profesores</option>		
									<?php $bandera_profesores=true;?>
									@endif
									@if($acceso->rol_id==3)
									<option value="3" selected="">Alumnos</option>
									<?php $bandera_alumnos=true;?>
									@endif
									@if($acceso->rol_id==4)
									<option value="4" selected="">Representantes</option>
									<?php $bandera_representantes=true;?>
									@endif
									@endforeach
									@endif

									@if($bandera_profesores==false)
									<option value="2">Profesores</option>
									@endif
									@if($bandera_alumnos==false)
									<option value="3">Alumnos</option>
									@endif
									@if($bandera_representantes==false)
									<option value="4">Representantes</option>
									@endif
								</select>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-3 col-xs-12">
					<ul class="nav nav-pills nav-stacked bg-success">
						<li><a href="#" onclick="agregar('var_cedula');">Cédula</a></li>
						<li><a href="#" onclick="agregar('var_nombres');">Nombres</a></li>
						<li><a href="#" onclick="agregar('var_apellidos');">Apellidos</a></li>
						<li><a href="#" onclick="agregar('var_grado');">Grado</a></li>
						<li><a href="#" onclick="agregar('var_seccion');">Sección</a></li>		
						<li><a href="#" onclick="agregar('var_periodo');">Periodo Acádemico</a></li>					
					</ul>
				</div>  
				<div class="col-sm-9 col-xs-12">	
					<div class="form-group">                 
						<div class="col-sm-12">
							<textarea  name="txtContenido" id="txtContenido" rows="50" cols="280">@if(isset($planilla->contenido)){{ $planilla->contenido }}@endif</textarea>
						</div>
					</div>
					<div class="col-sm-12">
						<button class="btn btn-primary" type="submit">Guardar Formato</button>
						<a class="btn btn-success" href="{{ url()->previous() }}"><i class="fa fa-undo" aria-hidden="true"></i> Volver al Listado</a>
					</div>
				</div>
			</form>
		</div>
	</div>
	@stop;