 $(function() {
        $('#modal-seccion').on('hidden.bs.modal', function(){
           $('#frmSeccion').validate().resetForm();
           $(".error").removeClass("error");
           $(".success").removeClass("success");
        });
    });
 $(document).ready(function(){   
   $("#frmSeccion").validate({
    rules: {
      txtSeccion: {
        required: true
      },
      cmbGrado:{
        valueNotEquals: "default" 
      },
      txtCapacidad:{
        required:true,
        numbers:true
      }

    },
    messages: {
      txtSeccion: "El campo seccion es requerido",
      txtCapacidad: "El campo Capacidad es requerido y debe ser un valor entero positivo."
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
/*Mask telefono
$('#txtTelefono').mask('(000) 000-0000');
$('#txtEdad').mask('000');
$('#txtCedula').mask('00000000');*/

});
 var save_method; 
 function agregar()
 {
  save_method = 'add';
      $('#frmSeccion')[0].reset(); // reset form on modals
      $('#modal-seccion').modal('show'); // show bootstrap modal
    }
    function grabar()
    {
      var url;
      var msj;
     if (!$("#frmSeccion").valid()) { // Not Valid
       return false;
     } else {
      if(save_method == 'add')
      {
        url = "create_seccion";
        msj="Seccion creado con exito.";
      }
      else
      {
        url = "update_seccion";
        msj="Seccion actualizado con exito.";
      }

       // ajax adding data to database
       $.ajax({
        url : url,
        type: "POST",
        data: $('#frmSeccion').serializeArray(),
        success: function(data)
        {   
          if(data==1)
          {
           errorAlert('Error!', 'La Seccion existe en el presente periodo academico, por favor verifique la información');      
         }
         else
         {
           $.jAlert({
            'title': 'Informacion',
            'content': msj,
            'theme': 'blue',
            'btns': { 'text': 'Aceptar' }
          });
           $('#modal-seccion').modal('hide');
           $("#contenido-seccion").html(data);
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
      $('#frmSeccion')[0].reset(); // reset form on modals.
      $('#frmSeccion').validate().resetForm();

      //Ajax Load data from ajax
      $.ajax({
        url : "edit_seccion/" + id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {         
         $('[name="id"]').val(data.idseccion);
         $('[name="cmbGrado"]').val(data.grado_id);
         $('[name="txtCapacidad"]').val(data.capacidad);
         $('[name="txtSeccion"]').val(data.seccion);
            $('#modal-seccion').modal('show'); // show bootstrap modal when complete loaded

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

          url = "delete_seccion/"+id;
          msj="Seccion eliminado con exito.";
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
            $('#modal-seccion').modal('hide');
            $("#contenido-seccion").html(data);
          },
          error: function (jqXHR, textStatus, errorThrown)
          {
            alert('Error procesando datos');
          }
        });

        }, 'onDeny': function(){


        } });
      
    }