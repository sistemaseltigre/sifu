 $(function() {
  $('#modal-grado').on('hidden.bs.modal', function(){
   $('#frmGrado').validate().resetForm();
   $(".error").removeClass("error");
   $(".success").removeClass("success");
 });
});
 $(document).ready(function(){   
   $("#frmGrado").validate({
    rules: {
      txtGrado: {
        required: true
      }    
    },
    messages: {
      txtGrado: "El campo grado es requerido."
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
      $('#frmGrado')[0].reset(); // reset form on modals
      $('#modal-grado').modal('show'); // show bootstrap modal
    }
    function grabar()
    {
      var url;
      var msj;
     if (!$("#frmGrado").valid()) { // Not Valid
       return false;
     } else {
      if(save_method == 'add')
      {
        url = "create_grado";
        msj="Grado academico registrado con exito.";
      }
      else
      {
        url = "update_grado";
        msj="Grado academico actualizado con exito";
      }

       // ajax adding data to database
       $.ajax({
        url : url,
        type: "POST",
        data: $('#frmGrado').serializeArray(),
        success: function(data)
        {   
          if(data==1)
          {
           errorAlert('Error!', 'El grado academico ya existe.');      
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
               $('#modal-grado').modal('hide');
               $("#contenido-grado").html(data);
               location.href = app_url+"/config_grado"; 
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
    $('#frmGrado').validate().resetForm();
      $('#frmGrado')[0].reset(); // reset form on modals

      //Ajax Load data from ajax
      $.ajax({
        url : "edit_grado/" + id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {         
         $('[name="id"]').val(data.idgrado);
         $('[name="txtGrado"]').val(data.grado);
         $('[name="cmbGrado"]').val(data.grado_id);
            $('#modal-grado').modal('show'); // show bootstrap modal when complete loaded

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

          url = "delete_grado/"+id;
          msj="Grado academico eliminado con exito.";
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
               $('#modal-grado').modal('hide');
               $("#contenido-grado").html(data);
               location.href = app_url+"/config_grado"; 
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


   function edit(id)
   {
$('#modal-edit').modal('show');
   }