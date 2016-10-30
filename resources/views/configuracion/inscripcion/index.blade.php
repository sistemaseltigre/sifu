@extends('plantilla.layaout')
@section('content')
<script src="{{asset('js/scripts/inscripcion.js')}}"> </script>
<div class="col-md-12 col-sm-12 col-xs-12">
  <div class="x_panel">
    <div class="x_title">
      <h2>Formalizar inscripción <small>Periodo: {{ $periodo->periodo }}</small></h2>
      <ul class="nav navbar-right panel_toolbox">
        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
        </li> 
      </ul>
      <div class="clearfix"></div>
    </div>
    <div class="x_content">
     <div id="wizard" class="form_wizard wizard_horizontal">
      <ul class="wizard_steps">
        <li>
          <a href="#step-1">
            <span class="step_no">1</span>
            <span class="step_descr">
              Paso 1<br />
              <small>Elegir Metodo de Pago</small>
            </span>
          </a>
        </li>
        <li>
          <a href="#step-2">
            <span class="step_no">2</span>
            <span class="step_descr">
              Paso 2<br />
              <small>Seleccionar Cuotas</small>
            </span>
          </a>
        </li>  
        <li>
          <a href="#step-3">
            <span class="step_no">3</span>
            <span class="step_descr">
              Paso 3<br />
              <small>Registrar Pagos</small>
            </span>
          </a>
        </li>  
        <li>
          <a href="#step-4">
            <span class="step_no">4</span>
            <span class="step_descr">
              Paso 4<br />
              <small>Verificar Materias</small>
            </span>
          </a>
        </li>      
        <li>
          <a href="#step-5">
            <span class="step_no">5</span>
            <span class="step_descr">
              Paso 5<br />
              <small>Verificar Documentos</small>
            </span>
          </a>
        </li>          
      </ul>
      <div id="step-1" style="min-height: 270px;">        
       <form class="form-horizontal form-label-left" id="frmCuota"> 
        {{ csrf_field() }}        
        <input type="hidden" name="cuota_id" id="id">        

        <fieldset>  
          <legend><div class="col-sm-3">Nombre: <b>{{ $alumno->nombre }} {{ $alumno->apellido }}</b></div> Identificador: <b>{{ $alumno->cedula }}</b><div class="clearfix"></div></legend>       
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="x_panel">
                <div class="x_title">
                  <h2>Información de pagos <small></small></h2>  
                  <div class="clearfix"></div>
                </div>
                <div class="x_content table-responsive">
                  <input type="hidden" id="monto_inscripcion" value="{{ $monto->inscripcion }}">
                  <input type="hidden" id="monto_seguro" value="{{ $monto->seguro }}">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Descrición</th>
                        <th>Monto a Pagar</th>
                        <th>Marque la Casilla</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Inscripción</th>
                        <td>{{ $monto->inscripcion }}</td>
                        <td><input type="checkbox" class="flat" id="inscripcion" checked disabled></td>
                      </tr>
                      <tr>
                        <th>Seguro</th>
                        <td>{{ $monto->seguro }}</td>
                        <td><input type="checkbox" class="flat" id="seguro"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="x_panel">
            <div class="x_title">
              <h2>Elija el modelo de pago <small></small></h2>  
              <div class="clearfix"></div>
            </div>
            <div class="x_content table-responsive">
              <table class="table" id="datatables">
                <thead>
                  <tr>
                    <th>Descripcion</th>
                    <th>Seleccionar</th>
                    <th>Marque la casilla</th>
                  </tr>
                </thead>
                <tbody>
                  @foreach ($cuotas as $cuota)                    
                  <tr>
                    <th>{{ $cuota->descripcion }}</th>
                    <td><input type="radio" class="flat" value="{{ $cuota->id }}" name="metodo"></td>
                    <td><button type="button" class="btn" data-toggle="collapse" data-target="#detalles-{{ $cuota->id }}"> detalles</button></td>
                  </tr>
                  <tr id="detalles-{{ $cuota->id }}" class="collapse out fade">
                    <td colspan="3">
                      <table class="table">
                       <thead>
                        <tr>
                          <th class="col-sm-2">Fecha de Pago</th>
                          <th class="col-sm-2">Monto</th>
                        </tr>
                      </thead>
                      <tbody>                        
                        @foreach ($cuota->detalles as $detalles)
                        <tr>
                          <td>{{ $detalles->fecha }}</td>
                          <td>{{ $detalles->monto }}</td>
                        </tr>
                        @endforeach
                      </tbody>
                    </table>
                  </td>
                </tr>           
                @endforeach
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div> 

  <div id="step-2" style="min-height: 270px;">
    <legend>Seleccione las cuotas que desea cancelar.</legend> 
    <form class="form-horizontal form-label-left" id="frmCuotas"> 
      <input type="hidden" name="metodo_id" id="metodo_id" value="">
      <input type="hidden" name="txtSeguro" id="txtSeguro" value="no">
      <input type="hidden" name="alumno_id" id="alumno_id" value="{{ $alumno->idalumno }}">
      <input type="hidden" name="periodo_id" value="{{ $periodo->idperiodo }}">
      {{ csrf_field() }}      
      <div class="clearfix"></div>
      <div class="row" id="seleccionar_cuotas">
        @include('configuracion.inscripcion.cuotas.table')
      </div>
    </form>
  </div>
  <div id="step-3" style="min-height: 270px;">
    <legend>Registre sus pagos</legend>  
    <div class="clearfix"></div>
    <div class="col-sm-8">
      <div class="panel panel-green">
        <div class="panel-heading">
          <h3 class="panel-title"><button class="btn btn-danger" onclick="agregar();"><i class="fa fa-credit-card" aria-hidden="true"></i> Agregar</button></h3>
        </div>              
        <div class="panel-body">
          <form id="frmPago">
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
          </form>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h3 class="panel-title">Detalles de saldo</h3>
        </div>
        <div class="panel-body">
          <form class="form-horizontal" id="frmCuota"> 
            <fieldset>
              <div class="form-group">
                <label class="col-lg-5 control-label">Total a Cancelar</label>
                <div class="col-lg-7">
                  <input type="number" class="form-control" name="txtMontoCancelar" id="txtMontoCancelar" readonly="" value="0">
                </div>
              </div>
              <div class="form-group">
                <label class="col-lg-5 control-label">Monto Registrado</label>
                <div class="col-lg-7">
                  <input type="number" class="form-control" name="txtMontoAbonado" id="txtMontoAbonado" readonly="" value="0">
                </div>
              </div>  
            </fieldset>
          </form>
        </div>
      </div>
    </div>
    <div id="contenido-detalles-cuotas">

    </div>
  </div>

  <div id="step-4" style="min-height: 270px;">
    <div class="col-sm-6">
      <legend>Verifique las materias</legend> 
    </div>
    <div class="col-sm-6">
      <form id="frmCondicion">
        <label class="pull-right">
          <label class="control-label col-sm-4">Condicion: </label>
          <div class="col-sm-8">
           <select class="form-control" name="cmbCondicion" id="cmbCondicion">
             <option value="default">Seleccione</option>
             <option value="regular">Regular</option>
             <option value="repitiente">Repitiente</option>
             <option value="Materia Pendiente">Materia Pendiente</option>
           </select>
         </div>
       </label> 
     </form>
   </div>
   <div class="clearfix"></div>
   <div class="row">        
    <div class="col-sm-6">
      <h2 class="text-center">Grado a Cursar {{ $gradoCursar->grado }}</h2>
      <form id="frmMaterias">
        <input type="hidden" value="{{ $gradoCursar->idgrado }}" name="grado_id">
        <table class="table table-hover">
          <tr>
            <th>Materia</th>
            <th>Marque la opcion</th>
          </tr>
          @foreach($materias as $materia)
          <tr>
            <td>{{ $materia->materia }}</td>
            <td><input type="checkbox" name="materiasActivas[]" checked="si" value="{{ $materia->idmateria }}" id="materia{{ $materia->idmateria }}" onclick="comprobar('{{ $materia->idmateria }}','{{ $materia->materia_id }}');" value="{{ $materia->idmateria}}"></td>
          </tr>
          @endforeach
        </table>
      </form>
    </div>
    <div class="col-sm-6">
      <h2 class="text-center">Grado Requerido {{ $requerido}}</h2>
      <form id="frmMateriasPendientes">
        @if (isset($requerido_id))
        <input type="hidden" value="{{ $requerido_id }}" name="requerido_grado_id">
        @endif

        @if (isset($materiasRequeridas))

        <table class="table table-hover">
          <tr>
            <th>Materia</th>
            <th>Opcion</th>
            @foreach($materiasRequeridas as $materia)
            <tr>
              <td>{{ $materia->materia }}</td>
              <td><input  type="checkbox" name="materiasRequeridas[]" value="{{ $materia->idmateria }}"></td>
            </tr>
            @endforeach
          </tr>

        </table>
        @endif
      </form>
    </div>
  </div>
</div>  
<div id="step-5" style="min-height: 370px;">
  <legend>Marque los Documentos Consignados</legend>   
    <div class="panel panel-default">
      <div class="panel-heading">
      </div>
      <div class="panel-body">   
      <form class="form-horizontal form-label-left" id="frmDocumentos">        
        <fieldset>
         <table class="table table-condesed">
         <tr>
           <th>Documentos</th>
           <th>Opcion</th>
         </tr>
         @if(isset($documentos))
         @foreach ($documentos as $documento)
           <tr>
           <td>{{ $documento->nombre }}</td>
           <td><input type="checkbox" name="chkDocumentos[]" value="{{ $documento->id }}"></td>
           </tr>
         @endforeach
         @endif
         </table> 
        </fieldset>
        </form>
      </div>
    </div>
    <div class="clearfix"></div>
</div>    
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
                <select class="form-control" name="cmbTipo" id="cmbTipo">
                  <option value="default">Seleccione...</option>
                  <option value="Efectivo">Efectivo</option>
                  <option value="Deposito">Deposito</option>
                  <option value="Cheque">Cheque</option>
                  <option value="Transferencia">Transferencia</option>
                  <option value="Tarjeta de Debito">Tarjeta de Debito</option>
                  <option value="Tarjeta de Credito">Tarjeta de Credito</option>

                </select>
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