@extends('plantilla.layaout')
@section('content')
<script>
function ver_mensajes(url)
{
   document.location.href =app_url+"/"+url;
}
</script>
<div class="panel panel-primary">
	<div class="panel-heading">Mensajes Entrantes</div>
	<div class="panel-body" id="lista"> 
		<div class="table-responsive">
			<table class="table table-condensed table-hover ">
				<thead style="display: fixed">
					<tr>
						<th class="col-sm-3">De:</th>
						<th class="col-sm-9">Asunto:</th>
					</tr>
				</thead>
				<tbody>  
					@foreach ($mensajes as $mensaje)
					{{--*/ $mensaje_=str_replace("<p>", " ", $mensaje['mensaje']) /*--}}
					
					<tr onclick="ver_mensajes('mensaje/ver_mensajes/{{ $mensaje['id'] }}');">
						<td>{{ $mensaje['nombre'] }}</td>
						<td>{{ $mensaje['asunto'] }} - <span class="text-muted">{{ substr(strip_tags($mensaje_),0,50) }}...</span></td>
					</tr>
					@endforeach
				</tbody>
			</table>
		</div>

	</div>
</div>
@stop