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
      {{--*/ $i=0; /*--}}
      @foreach ($detalles_cuotas as $detalles)
      {{--*/ $i++; /*--}}
      <tr>
        <td>{{ $detalles->fecha }}</td>
        <td>{{ $detalles->monto }}</td>                
        <td>
        <input type="checkbox" class="flat" name="cuotas[]" id="cuotas{{ $i }}" onclick="seleccionar_cuotas('{{ $i }}','{{ $detalles->monto }}');" value="{{ $detalles->id }}"> </td>
      </tr>
      @endforeach
      @endif    
    </tbody>
  </table>
</div>