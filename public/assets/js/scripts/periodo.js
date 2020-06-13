 $(function() {
        $('#modal').on('hidden.bs.modal', function(){
           $('#formulario').validate().resetForm();
           $(".error").removeClass("error");
           $(".success").removeClass("success");
        });
    });
   //combo dinamicos
   $(document).ready(function(){  
    console.log("on");
    $("#formulario").validate({
    rules: {
      txtDesde: {
        required: true
      },
      txtHasta: {
        required: true
      }
    },
    messages: {
      txtDesde: "El campo desde es requerido.",
       txtHasta: "El campo hasta es requerido."
    },
    highlight: function(element) {
      $(element).addClass('error');
    },
    
    // Called when the element is valid:
    unhighlight: function(element) {
      $(element).removeClass('error').addClass('success');
    }

  });
   jQuery.validator.addMethod("character", function (value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
      }, 'Introduzca solo letras');
   jQuery.validator.addMethod("numbers", function (value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional(element) || /^[0-9]+$/.test(value);
      }, 'Introduzca solo números');
   $.validator.addMethod("valueNotEquals", function(value, element, arg){
    return arg != value;
  }, "Seleccione una Opcion de la lista");


   //Horas datetimepicker
   $('#desde').datetimepicker({
    viewMode: 'years',
                format: 'MM-YYYY'

  });
   $('#hasta').datetimepicker({
    viewMode: 'years',
                format: 'MM-YYYY'

  });
     });

    var save_method; 
 function agregar()
 {
  save_method = 'add';
      $('#formulario')[0].reset(); // reset form on modals
      $('#modal').modal('show'); // show bootstrap modal
    }
    function grabar()
    {
      var url;
      var msj;
     if (!$("#formulario").valid()) { // Not Valid
       return false;
     } else {
      if(save_method == 'add')
      {
        url = "config_periodo/create";
        msj="Periodo academico creado con exito.";
      }
      else
      {
        url = "config_periodo/update";
        msj="Periodo academico actualizado con exito.";
      }

       // ajax adding data to database
       $.ajax({
        url : url,
        type: "POST",
        data: $('#formulario').serializeArray(),
        success: function(data)
        {   
          if(data==1)
          {
           errorAlert('Error!', 'El Periodo ya existe. Verifique la informacion!');      
         }
         else
         {
           $.jAlert({
            'title': 'Informacion',
            'content': msj,
            'theme': 'blue',
            'btns': { 'text': 'Aceptar' }
          });
           $('#modal').modal('hide');
           $("#lista").html(data);
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
      $('#formulario')[0].reset(); // reset form on modals.
      $('#formulario').validate().resetForm();

      //Ajax Load data from ajax
      $.ajax({
        url : "config_periodo/edit/" + id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {         
         $('[name="id"]').val(data.idperiodo);
         $('[name="txtPeriodo"]').val(data.periodo);
            $('#modal').modal('show'); // show bootstrap modal when complete loaded

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

          url = "config_periodo/delete/"+id;
          msj="Periodo academico eliminado con exito.";
          $.ajax({
            url : url,
            type: "GET",
            success: function(data)
            {  $.jAlert({
              'title': 'Informacion',
              'content': msj,
              'theme': 'blue',
              'btns': { 'text': 'Aceptar' }
            });
            $('#modal').modal('hide');
            $("#lista").html(data);
          },
          error: function (jqXHR, textStatus, errorThrown)
          {
            alert('Error procesando datos');
          }
        });

        }, 'onDeny': function(){


        } });
      
    }