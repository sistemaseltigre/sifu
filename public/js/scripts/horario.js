   //combo dinamicos
   $(document).ready(function(){  
    console.log("on");
    $("#cmbGrado").change(event => {
      $.get(`materias/${event.target.value}`, function(res, sta){
        $("#cmbMateria").empty();
        $("#contenido_seccion").empty();     
        $("#cmbMateria").append(`<option value='0'> Seleccione...</option>`);
        res.forEach(element => {
          $("#cmbMateria").append(`<option value=${element.idmateria}> ${element.materia} </option>`);
        });
      });

      $.get(`seccion/${event.target.value}`, function(res, sta){
        $("#cmbSeccion").empty();
        $("#contenido_seccion").empty();     
        $("#cmbSeccion").append(`<option value='0'> Seleccione...</option>`);
        res.forEach(element => {
          $("#cmbSeccion").append(`<option value=${element.idseccion}> ${element.seccion} </option>`);
        });
      });
    });

    $("#cmbMateria").change(event => {
      var idGrado=$('#cmbGrado').val(); 
      var idMateria=$('#cmbMateria').val();       
      $.get("secciones/"+idGrado+"/"+idMateria, function(res, sta){
        $("#contenido_seccion").empty();        
        res.forEach(element => {
          $("#contenido_seccion").append(`<tr><th>${element.gradoSeccion}</th><th>${element.asignada}</th><th>${element.restante}</th></tr>`);
        });
      });
    });

   //Horas datetimepicker
   $('#horaInicio').datetimepicker({
    format: 'LT',
    format: 'HH:mm'

  });
   $('#horaFinal').datetimepicker({
    format: 'LT',
    format: 'HH:mm'

  });


//procesar ajax
$("#btnProcesar").click(function(){
  var profesor_id=$('#cmbProfesor').val();
  var horaInicio=$('#txtHoraInicio').val();
  var horaFinal=$('#txtHoraFinal').val();

  if(horaInicio < '07:00')
  {    
  errorAlert("Inicio de horario", "el horario esta comprendido desde las 7:00 horas");
  return;
  }
   if(horaFinal <= horaInicio)
  {
    errorAlert("Horas mal seteadas","La hora final no puede ser mayor o igual a la hora de inicio, por favor verifique la información");
    return;
  }

  if(horaFinal <= horaInicio)
  {
    errorAlert("Horas mal seteadas","La hora final no puede ser mayor o igual a la hora de inicio, por favor verifique la información");
    return;
  }
  $.ajax({
    url: 'create_horario',
    type: "POST",
    dataType:"JSON",
    data:$('#frmHorario').serializeArray(),
    success: function(data) {
      if(eval(data.choque) > 0)
      {
        errorAlert("Horario no disponible","La Hora Seleccionada es imposible de asignar, por favor verifique la información");
        return;
      }
      if(eval(data.dias) == false)
      {
        errorAlert("Seccion sin disponiblidad","Las Secciones Creada no pueden ver clases este dia");
        return;
      }      
      if(eval(data.horas) == false)
      {
        errorAlert("Limite de horas Superadas","Las horas asignadas es mayor a las horas de la materia");
        return;
      }
      if(eval(data.seccion) == false)
      {
        errorAlert("Secciones Agotadas","Seccion no disponible.");
        return;
      }
      var profesor_id=$('#cmbProfesor').val();
      $.ajax({
        url: 'generarHorario/'+profesor_id,
        type: "GET",
        success: function(events) {
          var idGrado=$('#cmbGrado').val(); 
          var idMateria=$('#cmbMateria').val();       
          $.get("secciones/"+idGrado+"/"+idMateria, function(res, sta){
            $("#contenido_seccion").empty();        
            res.forEach(element => {
              $("#contenido_seccion").append(`<tr><th>${element.gradoSeccion}</th><th>${element.asignada}</th><th>${element.restante}</th></tr>`);
            });
          });
          $("#horario").html(events);
        }
      });
    }
  });

});




//calendario
$("#cmbProfesor").change(function(){
  var profesor_id=$('#cmbProfesor').val();

  $.ajax({
    url: 'generarHorario/'+profesor_id,
    type: "GET",
    success: function(events) {
      $("#horario").html(events);

    }
  });
});



$("#btnEliminar").click(function(){
  var horario_id=$('#idhorario').val();
$.ajax({
    url: 'delete_horario/'+horario_id,
    type: "GET",
    success: function(data) {      
      var profesor_id=$('#cmbProfesor').val();
      $.ajax({
        url: 'generarHorario/'+profesor_id,
        type: "GET",
        success: function(events) {
          var idGrado=$('#cmbGrado').val(); 
          var idMateria=$('#cmbMateria').val();       
          $.get("secciones/"+idGrado+"/"+idMateria, function(res, sta){
            $("#contenido_seccion").empty();        
            res.forEach(element => {
              $("#contenido_seccion").append(`<tr><th>${element.gradoSeccion}</th><th>${element.asignada}</th><th>${element.restante}</th></tr>`);
            });
          });
          $('#fullCalModal').modal('hide');
          $("#horario").html(events);
        }
      });
    }
  });
});
});