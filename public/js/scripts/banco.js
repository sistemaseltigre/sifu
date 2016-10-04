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
      txtCuenta: {
        required: true
      },
      txtBanco:{
        required:true
      },
      txtTitular:{
        required:true
      },
      txtEmail:{
        required:true,
        email:true
      },
      cmbTipo:{
        valueNotEquals:"default"
      },
      txtCedula:{
        required:true
      }
    },
    messages: {
      txtCuenta: "Ingrese Numero de Cuenta Valido!",
      txtBanco:  "Ingrese Entidad Bancaria Valido!",
      txtTitular:"Ingrese Nombre del Titular de la cuenta!",
      txtEmail:  "Ingrese cuenta de email valido Ej. cuentaemail@gmail.com",
      txtCedula: "Ingrese RIF/DNI Personal"
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
        url = app_url+"/config_banco/create";
        msj="Banco registrado con exito.";
      }
      else
      {
        url = app_url+"/config_banco/update";
        msj="Banco actualizado con exito.";
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
        url : app_url+"/config_banco/edit/"+ id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {   

         $('[name="id"]').val(data.idbanco);
         $('[name="txtBanco"]').val(data.banco);
         $('[name="txtCuenta"]').val(data.cuenta);
         $('[name="txtTitular"]').val(data.titular);
         $('[name="txtCedula"]').val(data.cedula);
         $('[name="cmbTipo"]').val(data.tipo);
         $('[name="txtEmail"]').val(data.email);

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

        url = app_url+"/config_banco/delete/"+id;
        msj="Banco eliminado con exito.";
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