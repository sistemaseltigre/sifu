  $(function() {
        $('#modal-administrador').on('hidden.bs.modal', function(){
           $('#frmAdministrador').validate().resetForm();
           $(".error").removeClass("error");
           $(".success").removeClass("success");
        });
    });
 $(document).ready(function(){   
   $("#frmAdministrador").validate({    
    rules: {
      txtCedula: {
        required: true,
        maxlength: 8
      },
      txtNombre: {
        required: true,
        minlength: 2
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
      txtCedula: "Por favor Ingrese Cedula Ej. 15323666",
      txtNombre: "Por favor Ingrese Nombre ",
      txtTelefono: "Por favor Ingrese N# de Telefono Ej. (412) 122-1212",    
      txtEmail: "Por favor ingrese correo valido Ej pedro.perez@gmail.com"
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
      $('#frmAdministrador')[0].reset(); // reset form on modals
      $('#modal-administrador').modal('show'); // show bootstrap modal
    }
    function grabar()
    {
      var url;
      var msj;
     if (!$("#frmAdministrador").valid()) { // Not Valid
       return false;
     } else {
      if(save_method == 'add')
      {
        url = "create_administrador";
        msj="Datos Registrados Con Exito";
      }
      else
      {
        url = "update_administrador";
        msj="Datos Actualizados con Exito";
      }

       // ajax adding data to database
       $.ajax({
        url : url,
        type: "POST",
        data: $('#frmAdministrador').serializeArray(),
        success: function(data)
        {   
          if(data==1)
          {
           errorAlert('Error!', 'La cedula ya existe en los registros.');      
         }
         else
         {
           $.jAlert({
            'title': 'Informacion',
            'content': msj,
            'theme': 'blue',
            'btns': { 'text': 'Aceptar' }
          });
           $('#modal-administrador').modal('hide');
           $("#contenido-administrador").html(data);
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
      $('#frmAdministrador').validate().resetForm();
      //Ajax Load data from ajax
      $.ajax({
        url : "edit_administrador/" + id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {         
         $('[name="id"]').val(data.idadministrador);
         $('[name="txtCedula"]').val(data.cedula);
         $('[name="txtNombre"]').val(data.nombre);
         $('[name="txtTelefono"]').val(data.telefono);
         $('[name="txtEmail"]').val(data.email);
            $('#modal-administrador').modal('show'); // show bootstrap modal when complete loaded

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

        url = "delete_administrador/"+id;
        msj="Registro Eliminado Con Exito";
        $.ajax({
          url : url,
          type: "GET",
          success: function(data)
          {  
            if(data==1)
            {
              errorAlert('Super Admin',"El administrador no puede ser eliminado ya que tiene la condicion de super admin del sistema.");
           return;
            }
            else
            {
              if(data==2)
            {
              errorAlert('Privilegios',"usted no tiene privilegios para eliminar un administrador.");
           return;
            }
            }
           $.jAlert({
            'title': 'Informacion',
            'content': msj,
            'theme': 'blue',
            'btns': { 'text': 'close' }
          });
          $('#modal-administrador').modal('hide');
          $("#contenido-administrador").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert('Error procesando datos');
        }
      });

      }, 'onDeny': function(){


      } });
     
   }