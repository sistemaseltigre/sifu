
<div class="col-lg-12">  
	<form class="form-horizontal" id="formulario" name="frmMensaje" method="post" action="{{ asset('mensajes/create') }}"> 
		{{ csrf_field() }}
		<div class="form-group">
			<label class="col-lg-2 control-label">Para: </label>  
			<div class="col-lg-9">
				<select name="cmbDestino[]" id="cmbDestino" style="width:100%;" data-placeholder="Seleccione Destinatarios de Mensaje"  multiple class="chosen-select" tabindex="5">
					<option value=""></option>
					<optgroup label="Profesor">
						@foreach ($profesores as $profesor)
						<option value="2-{{ $profesor->idprofesor }}">{{ $profesor->nombre_profesor }}</option>
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
			<div class="col-lg-5 col-lg-offset-2">
				<button class="btn btn-primary" type="submit">Enviar</button>
			</div>
		</div>
	</form>
</div>
<script>
	var config = {
		'.chosen-select'           : {},
		'.chosen-select-deselect'  : {allow_single_deselect:true},
		'.chosen-select-no-single' : {disable_search_threshold:10},
		'.chosen-select-no-results': {no_results_text:'Oops, Datos no encontrados'},
		'.chosen-select-width'     : {width:"100%"}
	}
	for (var selector in config) {
		$(selector).chosen(config[selector]);
	}
	$( 'textarea#txtMensaje' ).ckeditor();
</script>