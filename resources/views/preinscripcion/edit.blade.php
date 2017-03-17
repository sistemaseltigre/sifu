@extends('plantilla.layaout')
@section('content')

<script src="{{asset('js/scripts/preinscripcion.js?v=2')}}"> </script>

<div class="x_panel">
  <form class="form-horizontal" id="frmID"> 
    <input type="hidden" name="representante_id" id="representante_id" value="{{ isset($representante) ? $representante->idrepresentante : "" }}">
    <input type="hidden" name="delegado_id" id="delegado_id" value="{{ isset($delegado) ? $delegado->iddelegado : "" }}">
    {{ csrf_field() }}
  </form>
  <div class=" table-responsive">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Planilla de Preinscripción <small>SIFU</small></h2>

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
                <small>Registrar Padre/Madre</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#step-2">
              <span class="step_no">2</span>
              <span class="step_descr">
                Paso 2<br />
                <small>Registrar Representante Legal</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#step-3">
              <span class="step_no">3</span>
              <span class="step_descr">
                Paso 3<br />
                <small>Registrar Alumnos</small>
              </span>
            </a>
          </li>
          <li>
            <a href="#step-4">
              <span class="step_no">4</span>
              <span class="step_descr">
                Paso 4<br />
                <small>Requisitos</small>
              </span>
            </a>
          </li>
        </ul>
        <div id="step-1">
          <form class="form-horizontal form-label-left" id="frmRepresentante">
            @include('preinscripcion.formularios.representante')        
          </form>

        </div>
        <div id="step-2" style="min-height: 470px;">
         <form class="form-horizontal form-label-left" id="frmDelegado">
          @include('preinscripcion.formularios.delegado')        
        </form>
      </div>
      <div id="step-3" style="min-height: 300px;">
        <form class="form-horizontal form-label-left" id="frmAlumno">
          @include('preinscripcion.formularios.alumno')        
        </form>
      </div>
      <div id="step-4">        
        <p>Sres Padres/Madres y Representante Legal.
        </p>
        <p>
          La presente es para notificarle los documentos que deben consignar ante los directivos para formalizar la inscripción.
        </p>
        <p>
          <ul>            
          @if(isset($documentos))
            @foreach ($documentos as $documento)
              <li>{{ $documento->nombre }}</li>
            @endforeach
            @endif
          </ul>
        </p>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>

<div class="modal fade" role="dialog" id="modal-registro">
                    <div class="modal-dialog modal-sm">
                      <div class="modal-content">

                        <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span>
                          </button>
                          <h4 class="modal-title" id="myModalLabel2">Registro finalizado con exito.</h4>
                        </div>
                        <div class="modal-body">
                          <h4>Elija entre las opciones</h4>
                          <p>Formalizar Inscripción <a href="{{ asset('/lista_preinscripcion') }}" class="btn btn-success btn-sm">Ir</a></p>
                          <p>Permanecer Aqui <a href="{{ asset('/preinscripcion') }}" class="btn btn-primary btn-sm">Ok</a></p>
                        </div>
                        <div class="modal-footer">
                          
                        </div>

                      </div>
                    </div>
                  </div>
@stop