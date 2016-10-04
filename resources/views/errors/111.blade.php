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
                            <span style="color:white">Bancos</span>
                          </a>
                        </div>
                        <div class="block_content">
                          <h2 class="title">
                                          <a>Bancos requeridos.</a>
                                      </h2><br>
                          <p class="excerpt">Debe crear el registro de los bancos para continuar durante este modulo, ya que se solicitara registrar el pago el cual puede ser por, transferencia, deposito, cheque, tarjeta de debito, tarjeta de credito, efectivo. puede ir a la seccion "Personaliza tu Colegio -> Configurar Bancos" 
                          </p>
                          <a class="btn btn-primary btn-sm" href="{{ asset('/config_banco') }}">Ir a Configurar Bancos</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="block">
                        <div class="tags">
                          <a href="" class="tag">
                            <span style="color:white">Materias</span>
                          </a>
                        </div>
                        <div class="block_content">
                          <h2 class="title">
                                          <a>Materias requeridas.</a>
                                      </h2><br>
                          <p class="excerpt">Debe crear las materias necesarias para continuar con este modulo, esto se debe que tiene que seleccionar las materias que cursara el alumno y realizar el registro correctamente. puede ir a la seccion "Personaliza tu Colegio -> Configurar Materias" 
                          </p>
                          <a class="btn btn-primary btn-sm" href="{{ asset('/config_materia') }}">Ir a Configurar Materias</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="block">
                        <div class="tags">
                          <a href="" class="tag">
                            <span style="color:white">Inscripción</span>
                          </a>
                        </div>
                        <div class="block_content">
                          <h2 class="title">
                                          <a>Monto de Inscripcion Requerido.</a>
                                      </h2><br>
                          <p class="excerpt">Registre el costo de la inscripción para el periodo actual, para continuar y formalizar la inscripción.
                          </p>
                          <a class="btn btn-primary btn-sm" href="{{ asset('/config_monto_inscripcion') }}">Configurar pagos de Inscripción</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
@stop