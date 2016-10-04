<!DOCTYPE html>
<html lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <!-- Meta, title, CSS, favicons, etc. -->
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>SIFU</title>
  <link rel="stylesheet" type="text/css" href="{{ elixir('css/all.css') }}"> 
  <script>
    var app_url = {!! json_encode(url('/')) !!};
  </script>

</head>

<body class="nav-md">
@inject('user','App\Http\Controllers\sesion\sesionController')
  <div class="container body">
    <div class="main_container">
      <div class="col-md-3 left_col menu_fixed">
        <div class="left_col scroll-view">
          <div class="navbar nav_title" style="border: 0;">
            <a href="{{ asset('/app') }}" class="site_title"><i class="fa fa-university"></i> <span>Bienvenido SIFU</span></a>
          </div>

          <div class="clearfix"></div>

          <!-- menu profile quick info -->
          <div class="profile" style="margin-bottom: 10px;">
            <div class="profile_pic">
            @if(Session::get('imagen'))
            <img src="{{ asset('logos/'.Session::get('imagen')) }}" alt="..." class="img-circle profile_img">
            @else
            <img src="{{ asset('img/logo.png') }}" alt="..." class="img-circle profile_img">
            @endif
             
           </div>
           <div class="profile_info">
            <span>Bienvenido(a)</span>
            <h2>{{ Session::get('colegio') }}</h2>
          </div>
        </div>
        <!-- /menu profile quick info -->
        
        <!-- sidebar menu -->
        <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
          <div class="menu_section" style="margin-top: 20px;">
            <h3><hr></h3>
            <h3>Menú de Opciones</h3>
            <ul class="nav side-menu">              
              @if($user->user()==1)
              @include('plantilla.admin.menu') 
              @elseif($user->user()==2)
              @include('plantilla.profesor.menu') 
              @endif    
            </ul>
          </div>

        </div>
        <!-- /sidebar menu -->
      </div>
    </div>

    <!-- top navigation -->
    <div class="top_nav">
      <div class="nav_menu">
        <nav>
          <div class="nav toggle">
            <a id="menu_toggle"><i class="fa fa-bars"></i></a>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li class="">
              <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                <img src="{{ asset('img/logo.png') }}" alt="">{{ Session::get('name') }}
                <span class=" fa fa-angle-down"></span>
              </a>
              <ul class="dropdown-menu dropdown-usermenu pull-right">
                <li><a href="javascript:;"> Cambiar Contraseña</a></li>
                <li><a href="{{ asset('/logout') }}"><i class="fa fa-sign-out pull-right"></i>Cerrar Sesion</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- /top navigation -->
    <script src="{{ elixir('js/all.js') }}"></script>
    <!-- page content -->
    <div class="right_col" role="main">
      <div class="">
       <div class="clearfix"></div>
       <div class="row">
        <div class="col-xs-12">
            <div class="x_title">
              @yield('content')            
            </div>
        </div>
      </div>   
    </div>
  </div>
  <!-- /page content -->

  <!-- footer content -->
  <footer>
    <div class="pull-right col-lg-12 center-block">
      Sistema para colegios primaria y secundaria <a href="https://www.sifusp.com" target="blank_">SIFU</a>
    </div>
    <div class="clearfix"></div>
  </footer>
  <!-- /footer content -->
</div>
</div>


</body>
</html>