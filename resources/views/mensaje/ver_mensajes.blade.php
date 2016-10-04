@extends('plantilla.layaout')
@section('content')
<script src="{{ asset('/vendors/ckeditor/ckeditor.js') }}"></script>
<form class="form-horizontal" id="formulario" name="frmMensaje" method="post" action="{{ asset('mensaje/responder') }}"> 
<div class="panel panel-default">

			{{ csrf_field() }}
	<h3>{{ $asunto->asunto }}</h3>
	@foreach ($mensajes as $mensaje)		
	<div class="panel-heading">
		<a data-toggle="collapse" href="#{{ $mensaje['id'] }}"><h4 class="panel-title">
			{{ $mensaje['nombre'] }}
		</h4></a>
	</div>
	<div id="{{ $mensaje['id'] }}" class="panel-body panel-collapse collapse in">			
		<div class="well">			
			{!! $mensaje['mensaje'] !!}
		</div>
	</div>
	<input type="hidden" name="mensaje_id" value="{{ $mensaje['id'] }}">
	@endforeach	
	<div class="panel-heading">
		<a data-toggle="collapse" href="#responder"><h4 class="panel-title">
			Responder
		</h4></a>
	</div>
	<div id="responder" class="panel-body panel-collapse collapse">			
		<div class="well">			
			<textarea class="ckeditor" name="txtMensaje" id="txtMensaje" rows="10" cols="80"></textarea>
		</div>

		<div class="panel-footer">		
			<button class="btn btn-primary">Enviar</button>			
		</div>
	</div>
</div>
	</form>

@stop