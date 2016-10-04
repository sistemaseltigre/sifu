   $(document).ready(function(){  
   	console.log("on");
   	$("#btnBuscarProfesor").click(function(){
   		var profesor_id=$('#cmbProfesor').val();
      $.ajax({
        url: app_url+'/generarHorario/'+profesor_id,
        type: "GET",
        success: function(events) {
          $("#horario").html(events);

        }
      });


    });

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
      url: app_url+'/generarHorario_seccion/'+seccion_id,
      type: "GET",
      success: function(events) {
        $("#horario").html(events);

      }  });

   });




    $('[name="tipo"]').on('ifChecked', function(event){
  console.log(this.value)
if(this.value=='profesor')
{

  $('#seccion').hide();
  $('#profesor').show();
}
if(this.value=='seccion')
{
  
  $('#profesor').hide();
  $('#seccion').show();
}
});
  });

