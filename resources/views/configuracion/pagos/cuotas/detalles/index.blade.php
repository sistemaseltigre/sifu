   <script src="js/scripts/detalles_cuotas.js"> </script>
   <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Configure sus metodos de pagos y cuotas <small>Periodo: {{ $periodo->periodo }}</small></h2>

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
                <small>Metodo de Pago</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#step-2">
              <span class="step_no">2</span>
              <span class="step_descr">
                Paso 2<br />
                <small>Configuración de cuotas</small>
              </span>
            </a>
          </li>         
        </ul>
        <div id="step-1" style="min-height: 270px;">        
         <form class="form-horizontal form-label-left" id="frmCuota"> 
          {{ csrf_field() }}
          <input type="hidden" name="periodo_id" value="{{ $periodo->idperiodo }}">
          @if (isset($id))
          <input type="hidden" name="cuota_id" id="id" value="{{ $id }}">
          @else
          <input type="hidden" name="cuota_id" id="id">
          @endif

          <fieldset>  
            <legend>Identifique su metodo de pago</legend>                         
            <div class="form-group">              
              <label class="col-sm-12 text-left">Descripción</label>
              <div class="col-sm-6">
                @if (isset($descripcion))
                <input type="text" class="form-control" id="txtDescripcion" name="txtDescripcion" placeholder="metodo de pago" value="{{ $descripcion }}">
                @else
                <input type="text" class="form-control" id="txtDescripcion" name="txtDescripcion" placeholder="metodo de pago">
                @endif                
              </div>
            </div>    
          </fieldset>
        </form> 

      </div>
      <div id="step-2" style="min-height: 270px;">

        <legend>Agregue las diferentes cuotas <span class="pull-right"><button class="btn btn-primary btn-sm" type="button" onclick="agregar();" id="btnNuevo">Nueva Cuota <i class="fa fa-plus-circle"></i> </button></span></legend>  
        <div id="contenido-detalles-cuotas">
          @include('configuracion.pagos.cuotas.detalles.table')
        </div>
      </div>      
    </div>
  </div>
</div>
</div>

<div class="modal fade" id="modal-detalles-cuotas" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <form class="form-horizontal" id="frmDetallesCuotas"> 
          <legend>Ingrese información para las cuotas</legend>
          {{ csrf_field() }}
          <input type="hidden" name="cuota_id" id="cuota_id">
          <input type="hidden" name="iddetalles">
          <fieldset>          
            <div class="form-group">
              <label class="col-lg-3 control-label">Fécha</label>
              <div class="col-lg-6">
                <div class='input-group date' id='fechaCorte'>
                  <input type='text' class="form-control" name="txtFecha" id="txtFecha" />
                  <span class="input-group-addon">
                    <span class="glyphicon glyphicon-calendar"></span>
                  </span>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="col-lg-3 control-label">Monto</label>
              <div class="col-lg-6">
               <input type="number" class="form-control" id="txtMonto" name="txtMonto" placeholder="Monto de la cuota">
             </div>
           </div>
         </fieldset>
       </form> 
     </div>
     <div class="modal-footer">
      <button type="button" id="btnSave" onclick="grabar()" class="btn btn-primary btn-3d"><i class="fa fa-database"></i> Grabar</button>
      <button type="button" class="btn btn-danger btn-3d" data-dismiss="modal"><i class="fa fa-times-circle-o"></i> Cancelar</button>
    </div>
  </div>
</div>
</div>