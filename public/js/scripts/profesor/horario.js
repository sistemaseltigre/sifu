   $(document).ready(function(){ 
    var profesor_id=$('#cmbProfesor').val();

    $.ajax({
      url: app+'/profesor/getHorario/'+profesor_id,
      type: "GET",
      success: function(events) {
        $("#horario").html(events);
      }
    });
  });
 });