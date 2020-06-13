  $(function() {
        $('#config').on('hidden.bs.modal', function(){
           $('#frmConfig').validate().resetForm();
           $(".error").removeClass("error");
           $(".success").removeClass("success");
        });
    });
 $(document).ready(function(){   
   $("#frmConfig").validate({
    rules: {
      cmbPonderacion: {
        valueNotEquals: "default"
      },
      txtCortes:{
        required:true,
        numbers:true
      },
      txtNota:{
        required:true,
        numbers:true
      }    
    },
    messages: {
      txtNota: "El campo Maxima Nota es requerido y debe ser de tipo numerico",
      txtCortes: "El campo Cortes es requerido y debe ser de tipo numerico",
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
$('#cmbPonderacion').on('change',function(){
  if($('#cmbPonderacion').val()=='letras')
  {
    $('#nota').css("display", "none");
    $('#txtNota').val()='';
  }
  else
  {
    $('#nota').css("display", "block");
  }
});
});
 var save_method; 
 function agregar(idmateria)
 {
  $('[name="id"]').val(idmateria);
  save_method = 'add';
      $('#frmConfig')[0].reset(); // reset form on modals
      $('#config').modal('show'); // show bootstrap modal
    }
    function grabar()
    {
      var url;
      var msj;
     if (!$("#frmConfig").valid()) { // Not Valid
       return false;
     } else {
      if(save_method == 'add')
      {
        url =app_url+"/profesor/materias/create";
        msj="Datos Registrado Con Exito";
      }
      else
      {
        url = app_url+"/profesor/materias/update";
        msj="Datos Actualizado con Exito";
      }

       // ajax adding data to database
       $.ajax({
        url : url,
        type: "POST",
        data: $('#frmConfig').serializeArray(),
        success: function(data)
        {   
          if(data==1)
          {
             //errorAlert('Error!', 'La cedula ya existe en los registros.');      
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
               $('#config').modal('hide');
               location.href = app_url+"/profesor/materias"; 
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
      $('#frmConfig')[0].reset(); // reset form on modals
      $('#frmConfig').validate().resetForm();
      //Ajax Load data from ajax
      $.ajax({
        url : app_url+"/profesor/materias/edit/"+id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {         
         $('[name="id"]').val(data.idconfig_materias);
         $('[name="cmbPonderacion"]').val(data.tipo);
         $('[name="txtNota"]').val(data.maximanota);
         $('[name="txtCortes"]').val(data.cortes);
            $('#config').modal('show'); // show bootstrap modal when complete loaded

          },
          error: function (jqXHR, textStatus, errorThrown)
          {

            alert('Error Procesando Datos '+errorThrown);
          }
        });
    }

    function eliminar(id,materia_id)
    {
     $.jAlert({
      'type': 'confirm',
      'confirmQuestion':'Esta seguro que desea eliminar el registro?',
      'confirmBtnText':'Si',
      'onConfirm': function(){

        var url;
        var msj;

        url = app_url+"/profesor/materias/delete/"+id+"/"+materia_id,
        msj="Datos Eliminado Con Exito";
        $.ajax({
          url : url,
          type: "GET",
          success: function(data)
          {   $.jAlert({
            'title': 'Informacion',
            'content': msj,
            'theme': 'blue',
            'btns': { 'text': 'close' },
            onClose:function()
            {             
             $('#config').modal('hide');
             location.href = app_url+"/profesor/materias"; 
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