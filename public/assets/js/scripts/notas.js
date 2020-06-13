  $(document).ready(function(){  
    console.log("on");
    $("#cmbAlumno").change(event => {
      $.get(app_url+`/representante/getMaterias/${event.target.value}`, function(res, sta){
        $("#cmbMaterias").empty();     
        $("#cmbMaterias").append(`<option value='0'> Seleccione Materia...</option>`);
        res.forEach(element => {
          $("#cmbMaterias").append(`<option value=${element.idmateria}> ${element.materia} </option>`);
        });
      });
    });

    $("#btnBuscarNotas").click(function(){
       var materia_id=$('#cmbMaterias').val();
       var alumno_id=$('#cmbAlumno').val();
      
       $.ajax({
        url: app_url+'/representante/notas/materia/'+materia_id+'/alumno/'+alumno_id,
        type: "GET",
        success: function(events) {
          $("#contenido-notas").html(events);

        }  });

     });

      $("#btnBuscarNotasAlumnos").click(function(){
       var materia_id=$('#cmbMaterias').val();
      
       $.ajax({
        url: app_url+'/alumno/notas/materia/'+materia_id,
        type: "GET",
        success: function(events) {
          $("#contenido-notas").html(events);

        }  });

     });
  });