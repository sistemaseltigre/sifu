@extends('plantilla.layaout')
@section('content')
<script src="{{ asset('js/scripts/reportes_historico.js') }}"> </script>
<div class="clearfix"></div>
<div class="x_panel">
  <div class="x_title">..
    <h2>Seleccione Tipo de Pago <small><i class="fa fa-search"></i></small></h2>
    <div class="clearfix"></div>
  </div>
  <div class="x_content" style="min-height: 450px;">
    <div class="row" id="seccion">  
      <div class="well ">
        <div class="col-sm-3 col-xs-3 col-sm-offset-4">
          <div class="form-group">
            <div class="col-lg-12">          
             <div class="input-group">             
              <select name="cmbTipo" id="cmbTipo" class="form-control">
                <option>Seleccione...</option>
                <option value="Efectivo">Efectivo</option>
                <option value="Deposito">Deposito</option>
                <option value="Cheque">Cheque</option>
                <option value="Transferencia">Transferencia</option>
                <option value="Tarjeta de Debito">Tarjeta de Debito</option>
                <option value="Tarjeta de Credito">Tarjeta de Credito</option>                     
              </select>
              <span class="input-group-btn">
                <button class="btn btn-dark" type="button" id="btnBuscarTipo"><i class="fa fa-search"></i></button>
              </span>
            </div>
          </div>
        </div>    
      </div>
      <div class="clearfix"></div>
    </div>

  </div>
  <div class="row" id="contenido-lista">
  @include('reportes.historico.table_tipo_pago')
  </div>
</div>
</div>

@stop
