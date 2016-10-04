<script src="{{ asset('/js/scripts/mensajes.js') }}"> </script>
<form class="form-horizontal" name="frmReply" id="frmReply">
{{ csrf_field() }}
	<div class="inbox-body">
		<div class="mail_heading row">
			<div class="col-md-8">
				<div class="btn-group">
					<button class="btn btn-sm btn-primary" type="button" onclick="mostrar_reply();"><i class="fa fa-reply"></i> Responder</button>
				{{-- <button class="btn btn-sm btn-default" type="button"  data-placement="top" data-toggle="tooltip" data-original-title="Forward"><i class="fa fa-share"></i></button>
				<button class="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Print"><i class="fa fa-print"></i></button>
				<button class="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Trash"><i class="fa fa-trash-o"></i></button> --}}
			</div>
		</div>
		
	</div>
		@if (isset($mensajes))
		
		@foreach ($mensajes as $mensaje)
		<input type="hidden" id="mensaje_id" name="mensaje_id" value="{{ $mensaje['id'] }}">
		<div class="col-md-12 text-right">
			<p class="date"> {{ $mensaje['fecha'] }}</p>
		</div>		
		<div class="col-md-12">
			<h4> {{ $mensaje['asunto'] }}</h4>
		</div>
	<div class="sender-info">
		<div class="row">
			<div class="col-md-12">
				<strong>{{ $mensaje['nombre'] }}</strong>
				<span></span> to
				<strong>me</strong>
				<a class="sender-dropdown"><i class="fa fa-chevron-down"></i></a>
			</div>
		</div>
	</div>
	<div class="view-mail" style="min-height: 100px;">
		<p>
			{!!$mensaje['mensaje'] !!}
		</p>
	</div>
	@endforeach
	@endif
	<div class="btn-group">
		<button class="btn btn-sm btn-primary" type="button" onclick="mostrar_reply();"><i class="fa fa-reply"></i> Responder</button>
		<button class="btn btn-sm btn-default" type="button"  data-placement="top" data-toggle="tooltip" data-original-title="Forward"><i class="fa fa-share"></i></button>
		<button class="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Print"><i class="fa fa-print"></i></button>
		<button class="btn btn-sm btn-default" type="button" data-placement="top" data-toggle="tooltip" data-original-title="Trash"><i class="fa fa-trash-o"></i></button>
	</div>
	<div id="reply-content" style="display: none">
	<div class="form-group">                
		<div class="col-lg-12" id="mensaje">
			<textarea name="txtMensaje" id="txtMensaje" rows="10" cols="80"></textarea>
		</div>																		
		<button class="btn btn-primary" id="btnReply" type="button" style="margin-left: 12px;">Enviar</button>
	</div>	
</div>
</div>

</form>