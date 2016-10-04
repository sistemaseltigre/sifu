@extends('plantilla.layaout')
@section('content')
<div class="col-md-8 col-sm-8 col-xs-12">
              <div class="x_panel">
                <div class="x_title">
                  <h2>Requisitos no cumplidos</h2>
                  <ul class="nav navbar-right panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                </div>
                <div class="x_content">
                  <ul class="list-unstyled timeline">
                    <li>
                      <div class="block">
                        <div class="tags">
                          <a href="" class="tag">
                            <span style="color:white">Periodo Academico</span>
                          </a>
                        </div>
                        <div class="block_content">
                          <h2 class="title">
                                          <a>Periodo Academico Requerido!</a>
                                      </h2> <br>                         
                          <p class="excerpt">Si no dispone de el periodo academico, puede ir a la seccion "personaliza tu colegio -> Crear Periodos" en este apartado tendra acceso a registrar y activar un periodo academico.
                          </p>
                          <a class="btn btn-primary btn-sm" href="{{ asset('/config_periodo') }}">Ir a Periodo Academico</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="block">
                        <div class="tags">
                          <a href="" class="tag">
                            <span style="color:white">Grados Academico</span>
                          </a>
                        </div>
                        <div class="block_content">
                          <h2 class="title">
                                          <a>Grado Academico Requerido.</a>
                                      </h2><br>
                          <p class="excerpt">El grado academico es otro de los requisitos para avanzar en este módulo, sino dispone de grados academicos disponible puede dirigirse a "personaliza tu colegio -> Crear Grados" alli tendra acceso a registrar los diferente grados academicos que el colegio tendra disponible 
                          </p>
                          <a class="btn btn-primary btn-sm" href="{{ asset('/config_grado') }}">Ir a Crear Grados</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
@stop