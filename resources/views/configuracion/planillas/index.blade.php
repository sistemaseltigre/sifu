@extends('plantilla.layaout')
@section('content')
<script src="{{ asset('/vendors/ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('/vendors/ckeditor/adapters/jquery.js') }}"></script>

<script src=" {{ asset('js/chosen.jquery.js') }}" type="text/javascript"></script>
<link rel="stylesheet" href="{{ asset('css/chosen.css') }}">
<div class="clearfix"></div>
<div class="x_panel">
	<div class="x_title">..
		<h2>Listado de Planillas</h2>
		<div class="clearfix"></div>
	</div>
	<div class="x_content" style="min-height: 450px;">
		<div class="row" >
		<a class="btn btn-success btn-sm" href="{{ asset('/configurar/planilla/nuevo-formato') }}"> <i class="fa fa-plus" aria-hidden="true"></i> Nuevo Formato </a> 
		<hr>
		<div class="lista-formato">
		@include('configuracion.planillas.table')
		</div>
			<div class="clearfix"></div>
		</div>

	</div>
</div>

@stop


