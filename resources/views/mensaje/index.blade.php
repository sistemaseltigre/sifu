@extends('plantilla.layaout')
@section('content')

<script src="{{ asset('/vendors/ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('/vendors/ckeditor/adapters/jquery.js') }}"></script>
<script src=" {{ asset('js/chosen.jquery.js') }}" type="text/javascript"></script>
<link rel="stylesheet" href="{{ asset('css/chosen.css') }}">

{{-- <div class="panel panel-primary">
	<div class="panel-heading">Enviar Mensaje</div>
	<div class="panel-body" id="lista"> 
		<div class="col-lg-8 col-lg-offset-2">  
			<form class="form-horizontal" id="formulario" name="frmMensaje" method="post" action="{{ asset('mensaje/enviar') }}"> 
			{{ csrf_field() }}
				<div class="form-group">
					<label class="col-lg-2 control-label">Para: </label>  
					<div class="col-lg-9">
						<select name="cmbDestino[]" id="cmbDestino" style="width:100%;" data-placeholder="Seleccione Destinatarios de Mensaje"  multiple class="chosen-select" tabindex="5">
						<option value=""></option>
						<optgroup label="Profesor">
						@foreach ($profesores as $profesor)
							<option value="1-{{ $profesor->idprofesor }}">{{ $profesor->nombre_profesor }}</option>
						@endforeach
						</optgroup>
						<optgroup label="Representante">
						@foreach ($representantes as $representante)
							<option value="3-{{ $representante->idrepresentante }}">{{ $representante->nombre }}</option>
						@endforeach
						</optgroup>
						<optgroup label="Delegado">
						@foreach ($delegados as $delegado)
							<option value="4-{{ $delegado->iddelegado }}">{{ $delegado->nombre }}</option>
						@endforeach
						</optgroup>
						<optgroup label="Alumno">
						@foreach ($alumnos as $alumno)
							<option value="5-{{ $alumno->idalumno }}">{{ $alumno->nombre }}</option>
						@endforeach
						</optgroup>
						</select>
					</div>
				</div>   
				<div class="form-group">
					<label class="col-lg-2 control-label">Asunto: </label>                  
					<div class="col-lg-9">
						<input type="text" class="form-control" id="txtAsunto" name="txtAsunto" placeholder="Asunto del Mensaje Personal">
					</div>
				</div>
				<div class="form-group">
					<label class="col-lg-2 control-label">Mensaje: </label>                  
					<div class="col-lg-9">
						<textarea class="ckeditor" name="txtMensaje" id="txtMensaje" rows="10" cols="80"></textarea>
					</div>
				</div>
				<div class="form-group">
					<div class="col-lg-5 col-lg-offset-5">
						<button class="btn btn-primary" type="submit">Enviar</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</div> --}}
<div class="col-sm-12" role="main">
	<div class="">
		<div class="clearfix"></div>

		<div class="row">
			<div class="col-md-12">
				<div class="x_panel">
					<div class="x_title">
						<h2><i class="fa fa-envelope"></i> Sistema de Mensajeria interno</h2>
						<ul class="nav navbar-right panel_toolbox">
							<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
							</li>
							<li><a class="close-link"><i class="fa fa-close"></i></a>
							</li>
						</ul>
						<div class="clearfix"></div>
					</div>
					<div class="x_content">
						<div class="row">
							<div class="col-sm-3 mail_list_column">
								<button id="btnRedactar" class="btn btn-sm btn-dark btn-block" type="button">Redactar</button>
								@foreach ($mensajes as $mensaje)
								<a href="#" onclick="mostrar('{{ $mensaje['id'] }}');">
									<div class="mail_list">
										<div class="left">
											<i class="fa fa-circle"></i> <i class="fa fa-edit"></i>
										</div>
										<div class="right">
											<h3>{{ $mensaje['nombre'] }} <small>{{ $mensaje['fecha'] }} </small></h3>
											<p>{!! $mensaje['mensaje'] !!} </p>
										</div>
									</div>
								</a>									
								@endforeach
							</div>
							<!-- /MAIL LIST -->

							<!-- CONTENT MAIL -->
							<div class="col-sm-9 mail_view" id="mensajes">
								@include('mensaje.mostrar')								
								<!-- /CONTENT MAIL -->
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>
	@stop