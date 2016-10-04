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
      txtInscripcion: {
        required: true
      }
    },
    messages: {
      txtInscripcion: "El campo Inscripcion es requerido",
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
      $('#formulario')[0].reset(); // reset form on modals
      $('#modal').modal('show'); // show bootstrap modal
    }
    function grabar()
    {
      var url;
      var msj;
      if(!$("#formulario").valid()) { // Not Valid
       return false;
     } else {
      if(save_method == 'add')
      {
        url = "create_monto_inscripcion";
        msj="Monto de inscripción creado con exito.";
      }
      else
      {
        url = "update_monto_inscripcion";
        msj="Monto de inscripcíon actualizado con exito.";
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
             errorAlert('Error!', 'La cedula ya existe en los registros.');      
           }
           else
           {
             $.jAlert({
                'title': 'Informacion',
                'content': msj,
                'theme': 'blue',
                'btns': { 'text': 'cerrar' }
              });
       $('#modal').modal('hide');
       $("#contenido-monto-inscripcion").html(data);
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
        url : "edit_monto_inscripcion/" + id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {         
         $('[name="id"]').val(data.id);
         $('[name="txtInscripcion"]').val(data.inscripcion);
         $('[name="txtSeguro"]').val(data.seguro);
          $('[name="txtOtro"]').val(data.otro);
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

          url = "delete_monto_inscripcion/"+id;
          msj="Monto de inscripción eliminado con exito.";
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
          $('#modal').modal('hide');
          $("#contenido-monto-inscripcion").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert('Error procesando datos');
        }
      });

       }, 'onDeny': function(){


       } });

}