<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>S.I.F.U</title>
  <link rel="stylesheet" type="text/css" href="{{ elixir('css/all.css') }}"> 
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">
  <script>
    var app_url = {!! json_encode(url('/')) !!};
  </script>
  <script src="{{ elixir('js/all.js') }}"></script>
</head>

<body>

  <div id="wrapper">

    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0; background-color: #7ca2f5">
     <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

      <a class="navbar-brand" href="index.html">S.I.F.U V 2.0</a>
    </div>

   @if($user===1)
    @include('plantilla.profesor.admin') 
    @elseif($user===2)
    @include('plantilla.profesor.profesor') 
    @endif
    <!-- /.navbar-header -->


      <!--  <div class="navbar-default sidebar" role="navigation">
        <div class="sidebar-nav navbar-collapse">
        <h4 class="text-center"><img src="{{ asset('img/logo.png') }}" style="width:100px;height: 80px; margin-left: 20px" class="img-responsive"></h4>
          <ul class="nav" id="side-menu">

            <li>
              <a href="#"><i class="fa fa-cog"></i> Configuración<span class="fa arrow"></span></a>
              <ul class="nav nav-second-level">
              <li>
                  <a href="{{ asset('/profesor/materias') }}">Materias</a>
                </li>  
                <li>
                  <a href="{{ asset('/config_profesor') }}">Actualizar Datos</a>
                </li>                
                <li>
                  <a href="{{ asset('/config_grado') }}">Cambiar Clave</a>
                </li>
              </ul>
              
            </li>
            <li>
              <a href="{{ asset('/profesor/cargar_notas') }}"><i class="fa fa-credit-card-alt"></i> Cargar Notas</a>             
            </li>
            <li>
              <a href="#"><i class="fa fa-calendar"></i> Mi Horario<span class="fa arrow"></span></a>
            </li>
            <li>
            <a href="#"><i class="fa fa-envelope"></i> Mensajes<span class="fa arrow"></span></a>
              <ul class="nav nav-second-level">
                <li>
                  <a href="flot.html">Entrada</a>
                </li>
                <li>
                  <a href="morris.html">Salida</a>
                </li>
              </ul>
              
            </li>
            <li>
            <a href="#"><i class="fa fa-file"></i> Reportes<span class="fa arrow"></span></a>
              <ul class="nav nav-second-level">
                <li>
                  <a href="flot.html">Notas</a>
                </li>
                <li>
                  <a href="morris.html">Profesores</a>
                </li>
                <li>
                  <a href="morris.html">Alumnos</a>
                </li>
                <li>
                  <a href="morris.html">pagos</a>
                </li>
              </ul>
              
            </li>
          </ul>
        </div>
        <!-- /.sidebar-collapse -->
        <!-- </div>-->
        <!-- /.navbar-static-side -->
      </nav>

      <!-- Page Content -->
      <div id="page-wrapper">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12">
              @yield('content')
            </div>
            <!-- /.col-lg-12 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /#page-wrapper -->

    </div>
    <!-- /#wrapper -->

    <!-- jQuery -->



  </body>

  </html>

