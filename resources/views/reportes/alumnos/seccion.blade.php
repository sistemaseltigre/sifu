@extends('plantilla.layaout')
@section('content')
<script src="{{ asset('js/scripts/reportes_seccion.js') }}"> </script>
<div class="clearfix"></div>
<div class="x_panel">
  <div class="x_title">..
    <h2>Seleccione Grado y Sección</h2>
    <div class="clearfix"></div>
  </div>
  <div class="x_content" style="min-height: 450px;">
  <div class="row" id="seccion">  
    <div class="well ">
      <div class="col-sm-3 col-xs-3 col-sm-offset-2">
        <div class="form-group">
          <div class="col-lg-12">          
            <select name="cmbGrado" id="cmbGrado" class="form-control">
              <option>Seleccione Grado</option>
              @foreach ($grados as $grado)
              <option value="{{ $grado->idgrado }}">{{ $grado->grado }}</option>
              @endforeach
            </select>
          </div>
        </div>    
      </div>
      <div class="col-sm-3 col-xs-3">
        <div class="form-group">
          <div class="col-lg-12"> 
            <div class="input-group">             
              <select name="cmbSeccion" id="cmbSeccion" class="form-control">
                <option>Seleccione Seccion</option>                
              </select>
              <span class="input-group-btn">
                <button class="btn btn-dark" type="button" id="btnBuscarSeccion"><i class="fa fa-search"></i></button>
              </span>
            </div>
          </div>
        </div>    
      </div>
       <div class="clearfix"></div>
    </div>

  </div>
  <div class="row" id="contenido-lista">
  @include('reportes.alumnos.table_seccion')
  </div>
</div>
</div>

@stop
