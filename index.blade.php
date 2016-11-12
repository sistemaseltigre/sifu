@extends('plantilla.layaout')
@section('content')
<div class="container-fluid">

	<!-- Exportable Table -->
	<div class="row clearfix">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="card">
				<div class="header">
					<h2>
					<button class="btn btn-primary" type="button"><i class="fa fa-user" aria-hidden="true"></i>  Crear</button>
						Lista de Empleados
					</h2>
				</div>
				<div class="body table-responsive">
					@include('configuracion.empleado.table')
				</div>
			</div>
		</div>
	</div>
	<!-- #END# Exportable Table -->
</div>

@stop
