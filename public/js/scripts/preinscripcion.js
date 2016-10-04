  $(function() {
    $('#modal-alumno').on('hidden.bs.modal', function(){
     $('#frmAlumno').validate().resetForm();
     $(".error").removeClass("error");
     $(".success").removeClass("success");
   });
  });
  $(document).ready(function(){  
    console.log("on");
    $('#FechaNacimiento').datetimepicker({
      format: 'DD/MM/YYYY'
    });

    $("#frmRepresentante").validate({
      rules: {
        txtCedula: {
          required: true
        },
        txtNombre: {
          required: true
        },
        txtTelefono1: {
          required: true,
        },
        txtEmail: {
          required: true,
          email: true
        },
        txtProfesion: {
          required: true
        },
        txtDireccion:{
          required:true
        }
      },
      messages: {
        txtCedula: "El campo cedula es requerido.",
        txtNombre: "El campo nombre es requerido.",
        txtProfesion: "El campo profesion es requerido.",
        txtDireccion: "El campo dirección es requerido.",
        txtTelefono1: "El campo telefono es requerido.",
        txtEmail:{
          email: "Ingrese una direccion de email valida palabra seguido de @ y la extension.", 
          required:"El campo email es requerido."  
        },
      },

      highlight: function(element) {
        $(element).addClass('error');
      },

    // Called when the element is valid:
    unhighlight: function(element) {
      $(element).removeClass('error').addClass('success');
    }

  });
    $("#frmDelegado").validate({
      rules: {
        txtCedular: {
          required: true
        },
        txtNombrer: {
          required: true
        },
        txtTelefono1r: {
          required: true,
        },
        txtEmailr: {
          required: true,
          email: true
        },
        txtParentesco: {
          required: true
        },
        txtDireccionr:{
          required:true
        }
      },
      messages: {
        txtCedular: "El campo cedula es requerido.",
        txtNombrerr: "El campo nombre es requerido.",
        txtParentesco: "El campo parentesco es requerido.",
        txtDireccionr: "El campo dirección es requerido.",
        txtTelefono1r: "El campo telefono es requerido.",
        txtEmailr:{
          email: "Ingrese una direccion de email valida palabra seguido de @ y la extension.", 
          required:"El campo email es requerido."  
        },
      },
      highlight: function(element) {
        $(element).addClass('error');
      },

    // Called when the element is valid:
    unhighlight: function(element) {
      $(element).removeClass('error').addClass('success');
    }

  });
    $("#frmAlumno").validate({
      rules: {
        txtCedula: {
          required: true
        },
        txtNombre: {
          required: true
        },
        txtApellido: {
          required: true
        },
        txtNacionalidad: {
          required: true,
        },
        txtFecha: {
          required: true,
        },      
        txtDireccion:{
          required:true
        },
        txtEmail:{
          email:true
        },
        cmbGrado: {
         valueNotEquals: "default" 
       },
       cmbGenero: {
         valueNotEquals: "default" 
       },
       cmbComunion: {
         valueNotEquals: "default" 
       }
     },
     messages: {
      txtCedula: "El campo identificador es requerido.",
      txtNombre: "El campo nombres es requerido.",
      txtApellido: "El campo apellidos es requerido.",
      txtNacionalidad: "El campo nacionalidad es requerido.",
      txtFecha: "Seleccione Fecha de Nacimiento",
      txtDireccion: "El campo dirección es requerido.",
      txtEmail:"Ingrese un correo electrónico valido.",
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

//smart wizard
$('#wizard').smartWizard({
 onLeaveStep:leaveAStepCallback,
 onFinish:finallyStep,
});

$('#wizard_verticle').smartWizard({
  transitionEffect: 'slide'
});
function leaveAStepCallback(obj, context){
        return validateSteps(context.fromStep, context.toStep); // return false to stay on step and true to continue navigation 
      }

      function finallyStep(){

        $.ajax({

                url: 'preinscripcion/procesar',
                type: "POST",
                data:$('#frmRepresentante, #frmID').serializeArray(),
                /*beforeSend: function() 
                { $('#loading').show(); }, 
                complete: function() 
                { $('#loading').hide(); },*/
                success: function(data) {
                 $('#modal-registro').modal('show');
               }
             });
        
      }
      function validateSteps(fromStep, toStep){
        var isStepValid = true;

        if(toStep<fromStep)
        {
          return isStepValid;
        }else// validate step 1
        if(fromStep == 1){
            if (!$("#frmRepresentante").valid()) { // Not Valid
              return false;
              isStepValid=false;
            }
            else
            {
              $.ajax({

                url: 'preinscripcion/create/representante',
                type: "POST",
                dataType:"JSON",
                data:$('#frmRepresentante, #frmID').serializeArray(),
                /*beforeSend: function() 
                { $('#loading').show(); }, 
                complete: function() 
                { $('#loading').hide(); },*/
                success: function(data) {
                 $('#representante_id').val(data.representante_id);
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


//fin smart wizard
$('input').on('ifChecked', function(event){
  $('#txtCedular').val($('#txtCedula').val());
  $('#txtNombrer').val($('#txtNombre').val());
  $('#txtTelefono1r').val($('#txtTelefono1').val());
  $('#txtTelefono2r').val($('#txtTelefono2').val());
  $('#txtEmailr').val($('#txtEmail').val());
  $('#txtDireccionr').val($('#txtDireccion').val());
});

$('input').on('ifUnchecked', function(event){
  $('#txtCedular').val('');
  $('#txtNombrer').val('');
  $('#txtTelefono1r').val('');
  $('#txtTelefono2r').val('');
  $('#txtEmailr').val('');
  $('#txtDireccionr').val('');
});

$('.chosen-select').chosen({
  no_results_text: "No hemos encontrado resultados!",
  allow_single_deselect: true
}); 
$('.chosen-select-deselect').chosen({ allow_single_deselect: true }); 

$('#btnBuscar').on('click', function(){
  var id=$('#cmbPendientes').val();

  var representante =  $.ajax({
    url: 'preinscripcion/cargar_representante/'+id,
    type: "GET",
    dataType:"JSON",
                /*beforeSend: function() 
                { $('#loading').show(); }, 
                complete: function() 
                { $('#loading').hide(); },*/
                success: function(data) {
                  $('#representante_id').val(data.idrepresentante);
                  $('#txtCedula').val(data.cedula);
                  $('#txtNombre').val(data.nombre);
                  $('#txtTelefono1').val(data.telefono_principal);
                  $('#txtTelefono2').val(data.telefono_opcional);
                  $('#txtEmail').val(data.email);
                  $('#txtDireccion').val(data.direccion);
                  $('#txtProfesion').val(data.profesion);               
                }
              });

  representante.then(function(){
   $.ajax({
    url: 'preinscripcion/cargar_delegado/'+id,
    type: "GET",
    dataType:"JSON",
                /*beforeSend: function() 
                { $('#loading').show(); }, 
                complete: function() 
                { $('#loading').hide(); },*/
                success: function(data) {
                  $('#delegado_id').val(data.iddelegado);
                  $('#txtCedular').val(data.cedula);
                  $('#txtNombrer').val(data.nombre);
                  $('#txtTelefono1r').val(data.telefono_principal);
                  $('#txtTelefono2r').val(data.telefono_opcional);
                  $('#txtEmailr').val(data.email);
                  $('#txtDireccionr').val(data.direccion);
                  $('#txtParentesco').val(data.parentesco);
                }
              });
   $.ajax({
    url: 'preinscripcion/cargar_alumno/'+id,
    type: "GET",
                /*beforeSend: function() 
                { $('#loading').show(); }, 
                complete: function() 
                { $('#loading').hide(); },*/
                success: function(data) {
                  $("#contenido-alumno").html(data);
                }
              });


 });
});

});


  var save_method; 
  function agregar()
  {
 /* if($('#representante_id').val()=='' || $('#delegado_id').val()=='')
  {
    errorAlert("Ingrese Informacion del Padre/Madre y Representante Legal, antes de continuar");
    return;
  }*/
  save_method = 'add';
      $('#frmAlumno')[0].reset(); // reset form on modals
      $('#modal-alumno').modal('show'); // show bootstrap modal
    }
    function grabar()
    {
      var url;
      var msj;
     if (!$("#frmAlumno").valid()) { // Not Valid
       return false;
     } else {
      if(save_method == 'add')
      {
        url = "alumno/create";
        msj="Alumno registrado con exito.";
      }
      else
      {
        url = "alumno/update";
        msj="Alumno Actualizado con exito.";
      }

       // ajax adding data to database
       if (!$("#frmAlumno").valid()) { // Not Valid
         return false;
       } else {
         $.ajax({
          url : url,
          type: "POST",
          data: $('#frmAlumno, #frmID').serializeArray(),
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
             $('#modal-alumno').modal('hide');
             $("#contenido-alumno").html(data);
           }
         },
         error: function (jqXHR, textStatus, errorThrown)
         {
          alert('Error procesando datos');
        }
      });
       }
     }
   }
   function modificar(id)
   {

    save_method = 'update';
      $('#frmAlumno')[0].reset(); // reset form on modals

      //Ajax Load data from ajax
      $.ajax({
        url : "alumno/edit/" + id,
        type: "GET",
        dataType: "JSON",
        success: function(data)
        {         
          var fechaN=data.fechaNacimiento.split('-');
          fechaN=fechaN[2]+'/'+fechaN[1]+'/'+fechaN[0];
          $('[name="id"]').val(data.idalumno);
          $('#txtCedulaa').val(data.cedula);
          $('#txtNombrea').val(data.nombre);
          $('[name="txtApellido"]').val(data.apellido);
          $('[name="txtFecha"]').val(fechaN);
          $('[name="txtNacionalidad"]').val(data.nacionalidad);
          $('[name="cmbComunion"]').val(data.comunion);
          $('[name="cmbGenero"]').val(data.genero);
          $('[name="txtProcedencia"]').val(data.procedencia);
          $('[name="cmbGrado"]').val(data.grado_id);
          $('#txtEmaila').val(data.email);
          $('#txtDirecciona').val(data.direccion);
           $('#txtPeso').val(data.peso);
          $('#txtTalla').val(data.talla);
           $('#txtAltura').val(data.altura);
          $('#txtZapato').val(data.zapato);
           $('#txtObservacion').val(data.observacion);
            $('#modal-alumno').modal('show'); // show bootstrap modal when complete loaded

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

        url = "alumno/delete/"+id;
        msj="Registro eliminado con exito.";
        $.ajax({
          url : url,
          type: "POST",
          data: $('#frmID').serializeArray(),
          success: function(data)
          {  $.jAlert({
            'title': 'Informacion',
            'content': msj,
            'theme': 'blue',
            'btns': { 'text': 'Aceptar' }
          });
          $('#modal-alumno').modal('hide');
          $("#contenido-alumno").html(data);
        },
        error: function (jqXHR, textStatus, errorThrown)
        {
          alert('Error procesando datos');
        }
      });

      }, 'onDeny': function(){


      } });

   }