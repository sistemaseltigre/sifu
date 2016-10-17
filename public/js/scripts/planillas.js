   $(document).ready(function(){  
   	console.log("on");

    $("#btnBuscarCertificado").click(function(){
       var alumno_id=$('#cmbAlumno').val();
       $.ajax({
        url: app_url+'/reportes/planillas/buscar/certificado/'+alumno_id,
        type: "GET",
        success: function(events) {
          $("#contenido-certificado").html(events);

        }  });

     });
   });