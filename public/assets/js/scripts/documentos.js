 $(function() {
        $('#modal').on('hidden.bs.modal', function(){
           $('#formulario').validate().resetForm();
           $(".error").removeClass("error");
           $(".success").removeClass("success");
        });
    });
 $(document).ready(function(){   
   $("#formulario").validate({
    rules: {
      txtNombre: {
        required: true
      }
    },
    messages: {
      txtNombre: "El campo documento es requerido!"
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
        url = app_url+"/documentos/create";
        msj="Documento registrado con exito.";
      }
      else
      {
        url = app_url+"/documentos/update";
        msj="Documento actualizado con exito.";
      }

       // ajax adding data to database
       $.ajax({
        url : url,
        type: "POST",
        data: $('#formulario').serializeArray(),
        success: function(data)
        {   
          if(data==='1')
          {
           errorAlert('Error!', 'La cedula ya existe en los registros.');      
         }
         else
         {
           $.jAlert({
            'title': 'Informacion',
            'content': msj,
            'theme': 'blue',
            'btns': { 'text': 'Aceptar' },
             onClose:function()
          {             
           $('#modal').modal('hide');
          $("#lista").html(data);
         }
          });
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
      $('#formulario')[0].reset(); // reset form on modals

      //Ajax Load data from ajax
      $.ajax({
        url : app_url+"/documentos/edit/"+ id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {   

         $('[name="id"]').val(data.id);
         $('[name="txtNombre"]').val(data.nombre);

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

        url = app_url+"/documentos/delete/"+id;
        msj="Documento eliminado con exito.";
        $.ajax({
          url : url,
          type: "GET",
          success: function(data)
          {   $.jAlert({
            'title': 'Informacion',
            'content': msj,
            'theme': 'blue',
            'btns': { 'text': 'Aceptar' },
             onClose:function()
          {             
           $('#modal').modal('hide');
          $("#lista").html(data);
         }
          });
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert('Error procesando datos');
        }
      });

      }, 'onDeny': function(){


      } });

   }