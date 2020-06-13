   $(document).ready(function(){  
   	console.log("on");

    $("#btnBuscarCertificado").click(function(){
       var alumno_id=$('#cmbAlumno').val();
       var planilla_id=$('#cmbPlanilla').val();
       $.ajax({
        url: app_url+'/reportes/planillas/buscar/'+planilla_id+'/'+alumno_id,
        type: "GET",
        success: function(events) {
          $("#contenido").html(events);

        }  });

     });
   });