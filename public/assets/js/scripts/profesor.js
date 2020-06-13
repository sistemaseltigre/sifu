 $(function() {
        $('#modal-profesor').on('hidden.bs.modal', function(){
           $('#frmProfesor').validate().resetForm();
           $(".error").removeClass("error");
           $(".success").removeClass("success");
        });
    });
 $(document).ready(function(){   

   $("#frmProfesor").validate({
   
    rules: {
      txtCedula: {
        required: true,
      },
      txtNombre: {
        required: true,
      },
      txtTelefono: {
        required: true,
      },
      txtEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      txtCedula: "El campo cedula es requerido.",
      txtNombre: "El campo nombre es requerido.",
      txtTelefono: "El campo Teléfono es requerido",    
      txtEmail: "El campo email es requerido."
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

/*Mask telefono
$('#txtTelefono').mask('(000) 000-0000');
$('#txtEdad').mask('000');
$('#txtCedula').mask('00000000');*/

});
 var save_method; 
 function agregar()
 {
  save_method = 'add';
  //$('#frmProfesor').validate().resetForm();
      $('#frmProfesor')[0].reset(); // reset form on modals
      $('#modal-profesor').modal('show'); // show bootstrap modal
    }
    function grabar()
    {
      var url;
      var msj;
     if (!$("#frmProfesor").valid()) { // Not Valid
       return false;
     } else {
      if(save_method == 'add')
      {
        url = "create_profesor";
        msj="Datos Registrado Con Exito";
      }
      else
      {
        url = "update_profesor";
        msj="Datos Actualizado con Exito";
      }

       // ajax adding data to database
       $.ajax({
        url : url,
        type: "POST",
        data: $('#frmProfesor').serializeArray(),
        success: function(data)
        {   
          if(data==1)
          {
           errorAlert('Error!', 'La cedula ingresada ya se encuentra en nuestra base de datos, por favor verifique la información.');      
         }
         else
         {
           $.jAlert({
            'title': 'Informacion',
            'content': msj,
            'theme': 'blue',
            'btns': { 'text': 'Aceptar' }
          });
           $('#modal-profesor').modal('hide');
           $("#contenido-profesor").html(data);
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
      $('#frmProfesor')[0].reset(); // reset form on modals
      $('#frmProfesor').validate().resetForm();
      //Ajax Load data from ajax
      $.ajax({
        url : "edit_profesor/" + id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {         
         $('[name="id"]').val(data.idprofesor);
         $('[name="txtCedula"]').val(data.cedula_profesor);
         $('[name="txtNombre"]').val(data.nombre_profesor);
         $('[name="txtTelefono"]').val(data.telefono_profesor);
         $('[name="txtEmail"]').val(data.email_profesor);
         $('[name="txtDireccion"]').val(data.direccion_profesor);
            $('#modal-profesor').modal('show'); // show bootstrap modal when complete loaded

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

        url = "delete_profesor/"+id;
        msj="Registro eliminado con exito.";
        $.ajax({
          url : url,
          type: "GET",
          success: function(data)
          {   $.jAlert({
            'title': 'Informacion',
            'content': msj,
            'theme': 'blue',
            'btns': { 'text': 'close' }
          });
          $('#modal-profesor').modal('hide');
          $("#contenido-profesor").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert('Error procesando datos');
        }
      });

      }, 'onDeny': function(){


      } });
     
   }