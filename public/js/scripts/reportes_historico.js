   $(document).ready(function(){  
   	console.log("on");

     $("#btnBuscarMetodo").click(function(){
       var metodo_id=$('#cmbMetodo').val();
       $.ajax({
        url: app_url+'/reportes/historico/buscar/metodo-pago/'+metodo_id,
        type: "GET",
        success: function(events) {
          $("#contenido-lista").html(events);

        }  });

     });

     $("#btnBuscarTipo").click(function(){
       var tipo=$('#cmbTipo').val();
       $.ajax({
        url: app_url+'/reportes/historico/buscar/tipo-pago/'+tipo,
        type: "GET",
        success: function(events) {
          $("#contenido-lista").html(events);

        }  });

     });
   });