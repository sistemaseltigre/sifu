 $(function() {
        $('#modal-cuota').on('hidden.bs.modal', function(){
           $('#frmCuota').validate().resetForm();
           $(".error").removeClass("error");
           $(".success").removeClass("success");
        });
    });
 $(document).ready(function(){   
   $("#frmCuota").validate({
    rules: {
      txtCuota: {
        required: true
      },
      txtInscripcion: {
        required: true
      }
    },
    messages: {
      txtInscripcion: "El campo Inscripcion es requerido",
      txtCuota: "El campo Cuota es requerido",
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
      $('#frmCuota')[0].reset(); // reset form on modals
      $('#modal-cuota').modal('show'); // show bootstrap modal
    }
    function grabar()
    {
      var url;
      var msj;
      if(!$("#frmCuota").valid()) { // Not Valid
       return false;
     } else {
      if(save_method == 'add')
      {
        url = "create_cuota";
        msj="Datos Registrado Con Exito";
      }
      else
      {
        url = "update_cuota";
        msj="Datos Actualizado con Exito";
      }

       // ajax adding data to database
       $.ajax({
        url : url,
        type: "POST",
        data: $('#frmCuota').serializeArray(),
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
       $('#modal-cuota').modal('hide');
       $("#contenido-cuota").html(data);
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
      $('#frmCuota')[0].reset(); // reset form on modals

      //Ajax Load data from ajax
      $.ajax({
        url : "edit_cuota/" + id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {         
         $('[name="id"]').val(data.idcuota);
         $('[name="txtInscripcion"]').val(data.inscripcion);
         $('[name="txtSeguro"]').val(data.seguro);
          $('[name="txtOtro"]').val(data.otro);
          $('[name="txtCuota"]').val(data.cuota);
            $('#modal-cuota').modal('show'); // show bootstrap modal when complete loaded

          },
          error: function (jqXHR, textStatus, errorThrown)
          {

            alert('Error Procesando Datos '+errorThrown);
          }
        });
    }

    function eliminar(id)
    {
   /* $.jAlert({
        'type': 'confirm',
        'confirmQuestion':'Esta seguro que desea eliminar el registro?',
        'confirmBtnText':'Si',
        'onConfirm': function(){*/

          var url;
          var msj;

          url = "delete_cuota/"+id;
          msj="Datos Eliminado Con Exito";
          $.ajax({
            url : url,
            type: "GET",
            success: function(data)
                {  /* $.jAlert({
                    'title': 'Informacion',
                    'content': msj,
                    'theme': 'blue',
                    'btns': { 'text': 'close' }
                  });*/
          $('#modal-cuota').modal('hide');
          $("#contenido-cuota").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert('Error procesando datos');
        }
      });

       /* }, 'onDeny': function(){


       } });*/

}