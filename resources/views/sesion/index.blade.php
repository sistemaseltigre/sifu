<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">

  <title>S.I.F.U</title>
  <link rel="stylesheet" type="text/css" href="{{ asset('css/all.css') }}"> 
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1" crossorigin="anonymous">
  <script>
    var app_url = {!! json_encode(url('/')) !!};
  </script>
  <script src="{{ asset('js/all.js') }}"></script>
  <script type="text/javascript">
    $(document).ready(function (){
      $('.chosen-select').chosen({
        no_results_text: "No hemos encontrado resultados!",
        allow_single_deselect: true
      });
      $('.chosen-select-deselect').chosen({ allow_single_deselect: true });
      $('.chosen-select').on('change', function(e) {
        var dbName=$('#cmbColegio').val();
        url = app_url+"/buscar/logo/"+dbName;

        $.ajax({
          url : url,
          type: "GET",
          dataType: "JSON",
          success: function(data)
          {
           $("#logo").attr("src",app_url+"/logos/"+data.imagen);

         },
         error: function (jqXHR, textStatus, errorThrown)
         {
          alert('Error procesando datos');
        }
      });
      });
    });
  </script>
</head>

<body>

 <div id="loginModal" class="modal show" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div id="img">
          <img  id="logo" src="{{ $imagen }}" class="img-responsive center-block" width="50%">
        </div>
      </div>
      <div class="modal-body">
       <form class="form col-md-12 center-block" method="post" action="{{ asset('sesion/entrar') }}">
         {{ csrf_field() }}
         @if(isset($colegios))
         <div class="form-group">
           <select class="chosen-select form-control input-lg" name="cmbColegio" id="cmbColegio" data-placeholder="Seleccione Colegio">
             <option value="default"></option>
             @foreach ($colegios as $colegio)
             <option value="sifu_{{ $colegio->codigo }}">{{ $colegio->colegio }}</option>
             @endforeach
           </select>
         </div>
         @endif
         <div class="form-group">
          <input type="text" class="form-control input-lg" placeholder="Nombre de Usuario" name="txtUsuario" id="txtUsuario">
        </div>
        <div class="form-group">
          <input type="password" class="form-control input-lg" placeholder="Contraseña" name="txtPassword" id="txtPassword">
        </div>
        @if (Session::has('error'))
        <div class="alert alert-danger">{{ Session::get('error') }}</div>
        @endif

        <div class="form-group">
          <button class="btn btn-primary btn-lg btn-block">Iniciar Sesion</button>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      {{-- <div class="col-md-12">
        <a class="btn btn-success" href="{{ asset('preinscripcion') }}">Preinscribir Alumnos</a>
      </div>     --}}
    </div>
  </div>
</div>
</div>
</body>
