   $(document).ready(function(){  
   	console.log("on");
     $("#cmbGrado").change(event => {
      $.get(app_url+`/seccion/${event.target.value}`, function(res, sta){
        $("#cmbSeccion").empty();     
        $("#cmbSeccion").append(`<option value='0'> Seleccione...</option>`);
        res.forEach(element => {
          $("#cmbSeccion").append(`<option value=${element.idseccion}> ${element.seccion} </option>`);
        });
      });
    });


     $("#btnBuscarSeccion").click(function(){
       var seccion_id=$('#cmbSeccion').val();
       $.ajax({
        url: app_url+'/reportes/alumnos/buscar/seccion/'+seccion_id,
        type: "GET",
        success: function(events) {
          $("#contenido-lista").html(events);

        }  });

     });
   });