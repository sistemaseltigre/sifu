 $(function(){  
  $("#frmCuota").validate({
    rules: {
      txtDescripcion: {
        required: true
      }
    },
    messages: {
      txtDescripcion: "El campo descripcion es requerido para continuar"
    },
    highlight: function(element) {
      $(element).addClass('error');
    },

    // Called when the element is valid:
    unhighlight: function(element) {
      $(element).removeClass('error').addClass('success');
    }

  });
  $('#fechaCorte').datetimepicker({
    format: 'DD/MM/YYYY'
  });
  $('#wizard').smartWizard({
   onLeaveStep:leaveAStepCallback,
   onFinish:finallyStep,
 });
  function leaveAStepCallback(obj, context){
        return validateSteps(context.fromStep, context.toStep); // return false to stay on step and true to continue navigation 
      }

      function finallyStep(){

       location.reload();        
     }
     function validateSteps(fromStep, toStep){
      var isStepValid = true;

      if(toStep<fromStep)
      {
        return isStepValid;
        }else// validate step 1
        if(fromStep == 1){
            if (!$("#frmCuota").valid()) { // Not Valid
              return false;
              isStepValid=false;
            }
            else
            {
              
            var cuotas= $.ajax({

                url: 'config_cuotas/create',
                type: "POST",
                dataType:"JSON",
                data:$('#frmCuota').serializeArray(),
                /*beforeSend: function() 
                { $('#loading').show(); }, 
                complete: function() 
                { $('#loading').hide(); },*/
                success: function(data) {
                 $('#cuota_id').val(data.cuotas_id);
                 $('#id').val(data.cuotas_id);           
               }
             });

            var id=$('#id').val();
              $.ajax({

                url: 'config_cuotas/detalles/mostrar/'+id,
                type: "GET",
                /*beforeSend: function() 
                { $('#loading').show(); }, 
                complete: function() 
                { $('#loading').hide(); },*/
                success: function(data) {
                  $("#contenido-detalles-cuotas").html(data);
                }
              });
            }
          }
          else
            if(fromStep == 2){
            if (!$("#frmDelegado").valid()) { // Not Valid
              return false;
              isStepValid=false;
            }
            else
            {
              $.ajax({

                url: 'preinscripcion/create/delegado',
                type: "POST",
                dataType:"JSON",
                data:$('#frmDelegado, #frmID').serializeArray(),
                /*beforeSend: function() 
                { $('#loading').show(); }, 
                complete: function() 
                { $('#loading').hide(); },*/
                success: function(data) {
                 $('#delegado_id').val(data.delegado_id);
               }
             });

            }
          }
          return isStepValid;
        // ...      
      }
      $('.buttonNext').addClass('btn btn-success');
      $('.buttonPrevious').addClass('btn btn-primary');
      $('.buttonFinish').addClass('btn btn-default');
    });
 var save_method; 
 function agregar()
 {
  save_method = 'add';
  $('#modal-detalles-cuotas').modal('show');
}

function grabar()
{
  var url;
  var msj;
      if(!$("#frmDetallesCuotas").valid()) { // Not Valid
       return false;
     } else {
      if(save_method == 'add')
      {
        url = "config_cuotas/detalles/create";
        msj="Cuota registrado con exito.";
      }
      else
      {
        url = "config_cuotas/detalles/update";
        msj="Cuota actualizado con exito.";
      }

       // ajax adding data to database
       $.ajax({
        url : url,
        type: "POST",
        data: $('#frmDetallesCuotas').serializeArray(),
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

           $('#modal-detalles-cuotas').modal('hide');
           $("#contenido-detalles-cuotas").html(data);
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
      $('#frmDetallesCuotas')[0].reset(); // reset form on modals

      //Ajax Load data from ajax
      $.ajax({
        url : "config_cuotas/detalles/edit/" + id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {      
          var fecha=data.fecha.split('-');
          fecha=fecha[2]+'/'+fecha[1]+'/'+fecha[0];   
          $('[name="id"]').val(data.id);
          $('[name="cuota_id"]').val(data.cuota_id);
          $('[name="txtFecha"]').val(fecha);
          $('[name="txtMonto"]').val(data.monto);
            $('#modal-detalles-cuotas').modal('show'); // show bootstrap modal when complete loaded

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

          url = "config_cuotas/detalles/delete/"+id;
          msj="Cuota eliminada con exito.";
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
            $('#modal-detalles-cuotas').modal('hide');
            $("#contenido-detalles-cuotas").html(data);
          },
          error: function (jqXHR, textStatus, errorThrown)
          {
            alert('Error procesando datos');
          }
        });

        }, 'onDeny': function(){


        } });

    }