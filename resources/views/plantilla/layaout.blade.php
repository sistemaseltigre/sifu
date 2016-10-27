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
            <div class="menu_section" >
              <h3><hr></h3>
              <h3 style="margin-top: 50px;">Menú de Opciones</h3>             
              <ul class="nav side-menu">     
               @if(Session::get('dias_restantes')>0)         
               @if($user->user()==1)
               @include('plantilla.admin.menu') 
               @elseif($user->user()==2)
               @include('plantilla.profesor.menu') 
               @elseif($user->user()==3)
               @include('plantilla.alumno.menu') 
               @elseif($user->user()==4)
               @include('plantilla.representante.menu') 
               @endif                    
               @endif 
             </ul>

           </div>

         </div>
         <!-- /sidebar menu -->

       </div>
       @if($user->user()==1)
       <div class="alert alert-dismissible alert-info">
        <strong>Te quedan {{ Session::get('dias_restantes') }} dias</strong>
        <br> Paga aquí facil y rapido.
      </div>
      
      <form method="post" action="https://gateway.payulatam.com/ppp-web-gateway/pb.zul" accept-charset="UTF-8">
          <input type="image" border="0" alt="" src="http://www.payulatam.com/img-secure-2015/boton_pagar_grande.png" onClick="this.form.urlOrigen.value = window.location.href;" class="img-circle" />
          <input name="buttonId" type="hidden" value="9T4Z25JjWD99rmJWciiFyZazpTqVDe122Gh2WDms0kIusZRxsMPqlA=="/>
          <input name="merchantId" type="hidden" value="585471"/>
          <input name="accountId" type="hidden" value="588457"/>
          <input name="description" type="hidden" value="Plan mensual"/>
          <input name="referenceCode" type="hidden" value="C01"/>
          <input name="amount" type="hidden" value="70000"/>
          <input name="tax" type="hidden" value="0"/>
          <input name="taxReturnBase" type="hidden" value="0"/>
          <input name="shipmentValue" value="0" type="hidden"/>
          <input name="currency" type="hidden" value="COP"/>
          <input name="lng" type="hidden" value="es"/>
          <input name="sourceUrl" id="urlOrigen" value="" type="hidden"/>
          <input name="buttonType" value="SIMPLE" type="hidden"/>
          <input name="signature" value="f5025ae456b29a942f9e1c857751ed7e00eb9e6bc7e58a3cedbb0ba894466bd8" type="hidden"/>
      </form>
      @endif
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
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="">
            <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
              <img src="{{ asset('img/logo.png') }}" alt="">{{ Session::get('name') }}
              <span class=" fa fa-angle-down"></span>
            </a>
            <ul class="dropdown-menu dropdown-usermenu pull-right">
              <li><a href="{{ asset('/cambiar-clave') }}"> Cambiar Contraseña</a></li>
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