  $(function() {
        $('#modal-materia').on('hidden.bs.modal', function(){
           $('#frmMateria').validate().resetForm();
           $(".error").removeClass("error");
           $(".success").removeClass("success");
        });
    });
 $(document).ready(function(){   
  //buscar Materias para prelacion
  $("#cmbGrado").change(event => {
    $.get(`getPrelacion/${event.target.value}`, function(res, sta){
      $("#cmbPrelacion").empty();     
      $("#cmbPrelacion").append(`<option value='default'> Seleccione...</option>`);
      res.forEach(element => {
        $("#cmbPrelacion").append(`<option value=${element.idmateria}> ${element.materia} </option>`);
      });
    });
  });
  $('#horaCurso').datetimepicker({
    format: 'LT',
    format: 'HH:mm'
  });
  $("#frmMateria").validate({
    rules: {
      txtMateria: {
        required: true
      },
      txtHoras: {
        required: true
      },
      cmbGrado:{
        valueNotEquals: "default" 
      }
    },
    messages: {
      txtMateria: "El campo Materia es requerido",
      txtHoras: "El campo Horas del curso es requerido"
    },
    highlight: function(element) {
      $(element).addClass('error');
    },
    
    // Called when the element is valid:
    unhighlight: function(element) {
      $(element).removeClass('error').addClass('success');
    }

  });
  $.validator.addMethod("valueNotEquals", function(value, element, arg){
    return arg != value;
  }, "Seleccione una Opcion de la lista");
  jQuery.validator.addMethod("character", function (value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
      }, 'Introduzca solo letras');
  jQuery.validator.addMethod("numbers", function (value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional(element) || /^[0-9]+$/.test(value);
      }, 'Introduzca solo números');

/*Mask telefono
$('#txtTelefono').mask('(000) 000-0000');
$('#txtEdad').mask('000');
$('#txtCedula').mask('00000000');*/

});
 var save_method; 
 function agregar()
 {
  save_method = 'add';
      $('#frmMateria')[0].reset(); // reset form on modals
      $('#modal-materia').modal('show'); // show bootstrap modal
    }
    function grabar()
    {
      var url;
      var msj;
     if (!$("#frmMateria").valid()) { // Not Valid
       return false;
     } else {
      if(save_method == 'add')
      {
        url = "create_materia";
        msj="Materia creada con exito.";
      }
      else
      {
        url = "update_materia";
        msj="Materia actualizada con exito.";
      }

       // ajax adding data to database
       $.ajax({
        url : url,
        type: "POST",
        data: $('#frmMateria').serializeArray(),
        success: function(data)
        {   
          if(data==1)
          {
           errorAlert('Error!', 'La materia ya existe en los registro, verifique la informacion para continuar.');      
         }
         else
         {
           $.jAlert({
            'title': 'Informacion',
            'content': msj,
            'theme': 'blue',
            'btns': { 'text': 'Aceptar' }
          });
           $('#modal-materia').modal('hide');
           $("#contenido-materia").html(data);
         }
       },
       error: function (jqXHR, textStatus, errorThrown)
       {
        alert('Error procesando datos');
      }
    });
     }
   }
   function modificar(id)
   {    

    save_method = 'update';
      $('#frmMateria')[0].reset(); // reset form on modals

      $('#frmMateria').validate().resetForm();

      //Ajax Load data from ajax
      $.ajax({
        url : "edit_materia/" + id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {         
         $('[name="id"]').val(data.idmateria);
         $('[name="txtMateria"]').val(data.materia);
         $('[name="txtHoras"]').val(data.tiempo);
         $('[name="cmbGrado"]').val(data.grado_id);
         $.get('getPrelacion/'+data.grado_id, function(res, sta){
          $("#cmbPrelacion").empty();     
          $("#cmbPrelacion").append(`<option value='default'> Seleccione...</option>`);
          res.forEach(element => {
            if(element.idmateria==data.materia_id)
            {
              $("#cmbPrelacion").append(`<option value=${element.idmateria} selected> ${element.materia} </option>`);

            }
            else
            {
              $("#cmbPrelacion").append(`<option value=${element.idmateria}> ${element.materia} </option>`);

            }
          });
        });     

         $('[name="cmbPrelacion"]').val(data.materia_id);
            $('#modal-materia').modal('show'); // show bootstrap modal when complete loaded

          },
          error: function (jqXHR, textStatus, errorThrown)
          {

            alert('Error Procesando Datos '+errorThrown);
          }
        });
    }

    function eliminar(id)
    {
     $.jAlert({
      'type': 'confirm',
      'confirmQuestion':'Esta seguro que desea eliminar el registro?',
      'confirmBtnText':'Si',
      'onConfirm': function(){

        var url;
        var msj;

        url = "delete_materia/"+id;
        msj="Materia eliminada con exito.";
        $.ajax({
          url : url,
          type: "GET",
          success: function(data)
          {   $.jAlert({
            'title': 'Informacion',
            'content': msj,
            'theme': 'blue',
            'btns': { 'text': 'Aceptar' }
          });
          $('#modal-materia').modal('hide');
          $("#contenido-materia").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert('Error procesando datos');
        }
      });

      }, 'onDeny': function(){


      } });

   }