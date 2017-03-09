 @extends('plantilla.layaout')
 @section('content')
 <script src="{{asset('js/scripts/pagos_mensualidad.js')}}"> </script>
 <div class="col-md-12 col-sm-12 col-xs-12">
  <div class="x_panel">
    <div class="x_title">
      <h2>Registro de Pagos  <small>Mensualidad periodo </small></h2>

      <ul class="nav navbar-right panel_toolbox">
        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
        </li> 
      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
      <div class="well ">
        <div class="col-xs-12 col-sm-4  col-sm-offset-4">
          <select class="form-control chosen-select" name="cmbAlumno" id="cmbAlumno" data-placeholder="Seleccione Alumno">
            <option></option>
            @foreach ($alumnos as $alumno)
            <option value="{{ $alumno->alumno->idalumno }}">{{ $alumno->alumno->cedula }}</option>
            @endforeach
          </select>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="row" id="registrar_pagos" style="min-height:300px;">
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="modal-metodo" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <form class="form-horizontal" id="frmMetodo"> 
          <fieldset>
            <legend>Registre su Pago</legend>
            <div class="form-group">
              <label class="col-lg-4 control-label">Tipo</label>
              <div class="col-lg-8">
              @if(Auth::user()->rolid==1)
                <select class="form-control" name="cmbTipo" id="cmbTipo">
                  <option value="default">Seleccione...</option>
                  <option value="Efectivo">Efectivo</option>
                  <option value="Deposito">Deposito</option>
                  <option value="Cheque">Cheque</option>
                  <option value="Transferencia">Transferencia</option>
                  <option value="Tarjeta de Debito">Tarjeta de Debito</option>
                  <option value="Tarjeta de Credito">Tarjeta de Credito</option>
                </select>
                @else
                <select class="form-control" name="cmbTipo" id="cmbTipo">
                  <option value="default">Seleccione...</option>
                  <option value="Deposito">Deposito</option>
                  <option value="Transferencia">Transferencia</option>
                </select>
                @endif
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-4 control-label">Banco</label>
              <div class="col-lg-8">
                <select class="form-control" name="cmbBanco" id="cmbBanco">
                  <option value="default">Seleccione...</option>
                  @foreach($bancos as $banco)
                  <option value="{{ $banco->idbanco }}"> {{ $banco->banco}}-{{ $banco->tipo }} </option>
                  @endforeach
                </select>
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-4 control-label">Monto</label>
              <div class="col-lg-8">
                <input class="form-control" name="txtMonto" id="txtMonto">
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-4 control-label">Referencia (Si Aplica)</label>
              <div class="col-lg-8">
                <input class="form-control" name="txtReferencia" id="txtReferencia">
              </div>
            </div>  
            <div class="form-group">
              <div class="col-lg-4 col-lg-offset-5">
                <button class="btn btn-primary" type="button" id="addPago" >Registrar</button>
              </div>
            </div>  
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
@stop