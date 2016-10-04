<div class="table-responsive">
	<table id="datatables-example" class="table table-striped jambo_table table-condensed">
		<thead>
			<tr>
				<th class="col-sm-3">Metodo de Pago</th>
				<th class="col-sm-3">Opciones</th>
			</tr>
		</thead>
		<tbody id="contenido">  
			@if (isset($cuotas))
			@foreach ($cuotas as $cuota)
			<td>{{ $cuota->descripcion }}</td>
			<td><button title="Editar Metodo de Pago" class="btn btn-success" onclick="editar('{{ $cuota->id }}')"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></td>
		</tr>
		@endforeach
		@endif    
	</tbody>
</table>
</div>