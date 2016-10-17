  $(document).ready(function(){  
    console.log("on");
    $("#cmbAlumno").change(event => {
      $.get(app_url+`/getMaterias/${event.target.value}`, function(res, sta){
        $("#cmbMaterias").empty();     
        $("#cmbMaterias").append(`<option value='0'> Seleccione Materia...</option>`);
        res.forEach(element => {
          $("#cmbMaterias").append(`<option value=${element.idmateria}> ${element.materia} </option>`);
        });
      });
    });
  });