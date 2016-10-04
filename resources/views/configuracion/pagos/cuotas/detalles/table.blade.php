<div class="table-responsive">
  <table id="datatables-example" class="table table-striped jambo_table table-condensed">
    <thead>
      <tr>
        <th class="col-sm-3">Fecha de pago</th>
        <th class="col-sm-3">Monto a pagar</th>
        <th class="col-sm-3">Opciones</th>
      </tr>
    </thead>
    <tbody id="contenido">  
      @if (isset($detalles_cuotas))
      @foreach ($detalles_cuotas as $detalles)
      <tr>
        <td>{{ $detalles->fecha }}</td>
        <td>{{ $detalles->monto }}</td>                
        <td>
        <button class="btn btn-success btn-sm" onclick="modificar('{{ $detalles->id }}')"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Editar</button>
        <button class="btn btn-danger btn-sm" onclick="eliminar('{{ $detalles->id }}')"> <i class="fa fa-trash" aria-hidden="true"></i> Eliminar</button>
        </td>
      </tr>
      @endforeach
      @endif    
    </tbody>
  </table>
</div>