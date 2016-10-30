<!--carga las cuotas que debe el alumno -->

<form class="form-horizontal" id="formulario"> 
  {{ csrf_field() }}
  <input type="hidden" name="alumno_id" id="alumno_id" value="{{ $alumno_id }}">
  <div class="col-sm-8 col-xs-12">
    <h3>Mensualidad Pendientes</h3>
  </div>
  <div class="col-sm-8 col-xs-12">
    <div class="panel panel-default">
      <div class="panel-body">
        <table class="table table-condesed" id="contenido-mensualidad">
          <tr>
            <th>Fecha</th>
            <th>Monto</th>
            <th>Seleccione</th>
          </tr>
          <tbody>

           <?php $total=0; ?>
           @if(isset($cuotas))
           @foreach ($cuotas as $cuota)
           <?php $total+=$cuota->detalles->monto; ?>
           <tr>
            <td>{{ App\Fecha::getDate($cuota->detalles->fecha) }}</td>
            <td>{{ $cuota->detalles->monto }}</td>
            <td>
              <div class="checkbox_ajax">
                <input type="checkbox" class="flat" id="cuotas{{ $cuota->id }}" name="chkCuotas[]" value="{{ $cuota->id }}" checked="" onclick="calcular_monto('{{ $cuota->id }}','{{ $cuota->detalles->monto }}')">
              </div>
            </td>              
          </tr>
          @endforeach
          @endif
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
            <input type="text" class="form-control" id="txtSaldo" name="txtSaldo" readonly value="@if(isset($saldo->saldo)){{ $saldo->saldo }}@endif">
          </div>
        </div> 
      </fieldset>
    </div>
  </div>
</div>

<div class="col-sm-8 col-xs-12">
 <div class="panel panel-default">
   <div class="panel-heading">
     <h3 class="panel-title"><button class="btn btn-danger" onclick="agregar();" type="button"><i class="fa fa-credit-card" aria-hidden="true"></i> Agregar</button></h3>
   </div> 
   <div class="panel-body">

    <table class="table table-condesed" id="contenido-pago">
      <tr>
        <th>Tipo de Pago</th>
        <th>Banco</th>
        <th>Monto</th>
        <th>Referencia</th>
        <th>Editar</th>
        <th>Eliminar</th>
      </tr>
    </table>
    <input type="hidden" id="txtNum" name="txtNum">

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
            <input type="number" class="form-control" name="txtMontoAbonado" id="txtMontoAbonado" readonly="" value="@if(isset($saldo->saldo)){{ $saldo->saldo }}@endif">
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
            @if(isset($cuotas))
            <button class="btn btn-success btn-block" type="button" id="btnPagar">Pagar</button>
            @else
            <button class="btn btn-success btn-block disabled " type="button">Pagar</button>
            @endif
          </div>
        </div> 
      </fieldset>

    </div>
  </div>
</div>
</form>
