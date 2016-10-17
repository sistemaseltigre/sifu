<!--carga las cuotas que debe el alumno -->

<form class="form-horizontal" id="formulario"> 
  {{ csrf_field() }}
  <input type="hidden" name="alumno_id" id="alumno_id" value="{{ $alumno_id }}">
   <input type="hidden" name="pagos_id" id="pagos_id" value="{{ $pagos_id }}">
  <div class="col-sm-8 col-xs-12">
    <h3>Mensualidad en proceso de pagos</h3>
  </div>
  <div class="col-sm-8 col-xs-12">
    <div class="panel panel-default">
      <div class="panel-body">
        <table class="table table-condesed" id="contenido-mensualidad">
          <tr>
            <th>Fecha</th>
            <th>Monto</th>
            <th>estatus</th>
          </tr>
          <tbody>
           <?php $total=0; ?>
           @foreach ($cuotas as $cuota)
           <?php $total+=$cuota->detalles->monto; ?>
           <tr>
            <td>{{ App\Fecha::getDate($cuota->detalles->fecha) }}</td>
            <td>{{ $cuota->detalles->monto }}</td>
            <td>{{ $cuota->estatus }}</td> 
            <input type="hidden" name="chkCuotas[]" value="{{ $cuota->id }}">             
          </tr>
          @endforeach
        </tbody>
      </table>
    </div>
  </div>
</div>


<div class="col-sm-4 col-xs-12">
  <div class="panel panel-default">
    <div class="panel-body">
      <fieldset>
        <div class="form-group">
          <label class="col-lg-5 control-label ">Saldo</label>
          <div class="col-lg-7">
            <input type="text" class="form-control" id="txtSaldo" name="txtSaldo" readonly value="{{ $saldo->saldo }}">
          </div>
        </div> 
      </fieldset>
    </div>
  </div>
</div>

<div class="col-sm-8 col-xs-12">
 <div class="panel panel-default">
   <div class="panel-heading">
     <h3 class="panel-title">Pagos Registrados</h3>
   </div> 
   <div class="panel-body">

    <table class="table table-condesed" id="contenido-pago">
      <tr>
        <th>Tipo de Pago</th>
        <th>Banco</th>
        <th>Monto</th>
        <th>Referencia</th>
        <th>Marcar para aprobar</th>
      </tr>
      @foreach ($detalles as $detalle)
      <td>{{ $detalle->tipo }}</td>
      <td>{{ $detalle->banco }}</td>
      <td>{{ $detalle->monto }}</td>
      <td>{{ $detalle->referencia }}</td>
      <td><input type="checkbox" class="pagos" name="chkPagos[]" id="pagos{{ $detalle->id }}" value="{{ $detalle->id }}" onclick="aprobar('{{ $detalle->monto }}','{{ $detalle->id }}')"></td>
      @endforeach
    </table>
    <input type="hidden" id="txtNum" name="txtNum">
    <div class="well well-sm">
      <ul>
        <li>Marque en la casilla los pagos que desea aprobar</li>
        <li>Los pagos no marcado seran automaticamente rechazados</li>
        <li>Si uno de los pagos aun esta en proceso de verificacion espere y continue luego.</li>
      </ul>
    </div>
  </div>
</div>
</div>


<div class="col-sm-4 col-xs-12">
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Detalles de saldo</h3>
    </div>
    <div class="panel-body">

      <fieldset>
        <div class="form-group">
          <label class="col-lg-5 control-label">Total a Cancelar</label>
          <div class="col-lg-7">
            <input type="number" class="form-control" name="txtMontoCancelar" id="txtMontoCancelar" readonly="" value="{{ $total }}">
          </div>
        </div>
        <div class="form-group">
          <label class="col-lg-5 control-label">Monto Registrado</label>
          <div class="col-lg-7">
            <input type="number" class="form-control" name="txtMontoAbonado" id="txtMontoAbonado" readonly="" value="{{ $saldo->saldo }}">
          </div>
        </div>  
      </fieldset>

    </div>
  </div>

  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title">Pagar</h3>
    </div>
    <div class="panel-body">

      <fieldset>
        <div class="form-group">
          <label class="col-lg-5 ">Imprimir recibo</label>
          <div class="col-lg-1">
            <input type="checkbox" class="flat" id="recibo" name="recibo">
          </div>
        </div> 
        <div class="form-group">
          <div class="col-lg-7">
            <button class="btn btn-success btn-block" type="button" id="btnAprobar">Aprobar</button>
          </div>
        </div> 
      </fieldset>

    </div>
  </div>
</div>
</form>
