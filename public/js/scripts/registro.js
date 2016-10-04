
 $(document).ready(function(){   
   $("#frmRegistro").validate({
    rules: {
      txtCodigo: {
        required: true
      },
      txtColegio: {
        required: true,
        minlength: 2
      },
      txtTelefono: {
        required: true,
      },
      txtEmail: {
        required: true,
        email: true
      },
      txtPassword: {
        required: true
      },      
      txtPassword2: {
        equalTo: "#txtPassword"
      },
      txtNombre:{
        required:true
      },
      txtUsuario:{
        required:true
      },
      cmbPais:{
        valueNotEquals: "default" 
      },
      txtCaptcha:{
        required:true
      }
    },
    messages: {
      txtCodigo: "Identificador unico del colegio N.I.T/RIF",
      txtColegio: "El nombre del colegio es requerido",
      txtNombre: "El nombre de contacto es requerido",
      txtPassword: "Por favor Ingrese contraseña valida",
      txtPassword2: "Las Contraseñas deben coincidir",
      txtUsuario: "El nombre de usuario es requerido",
      txtTelefono: "Por favor Ingrese N# de Telefono",    
      txtEmail: "Por favor ingrese correo valido Ej pedro.perez@gmail.com",
      txtCaptcha: "Ingrese los valores de la imagen respetando mayuscula y minusculas"
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


    var statSend = false;

   $('form').submit(function(event) {


    var url =app_url+'/colegio/registro/create';
    var msj= "Bienvenido a SIFU. Su colegio fue registrado exitosamente,por favor dirijase a su cuenta de correo electronico donde podra encontrar un mensaje con los datos para ingresar al sistema, sino encuentra este mensaje en la carpeta principal por favor verifique la carpeta Spam";
    var formData = new FormData(document.getElementById("frmRegistro"));
 if (!$("#frmRegistro").valid()) { // Not Valid
       return false;
     } else {
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="_token"]').attr('content')
      }
    });
       // ajax adding data to database
       $.ajax({
        url : url,
        type: "POST",
        dataType: "JSON",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
            //mientras enviamos el archivo
            beforeSend: function(){
            // $("#btnRegistrar").prop( "disabled", true );    
           },
           success: function(data)
           {   
            if(data.codigo==1)
            {
             errorAlert('Error Codigo!', 'El Codigo del Colegio ya ha Sido Registrado.');      
           }
           else
            if(data.email==1)
            {
             errorAlert('Error Email!', 'El Correo Electronico ya ha sido Registrado.');      
           }
           else
            if(data.error==1)
            {
              errorAlert('Error Captcha!', 'El captcha ingresado es incorrecto.');     
              $('#captcha_img').html(data.captcha);
            }
           else
           {
             $.jAlert({
              'title': 'Registro',
              'content': msj,
              'theme': 'blue',
              'btns': { 'text': 'Aceptar' },
              onClose:function()
              {             

               location.href = app_url+"/login/"+data.url; 
             }
           });
           }
         },
         error: function (jqXHR, textStatus, errorThrown)
         {
          alert('Error procesando datos '+errorThrown);
        }
      });
       event.preventDefault();
     }
     });
   var fileExtension = "";
   $("#imagen").hide();
   $(':file').change(function()
   {
    var filePath = $(this).val();
            console.log(filePath);
        //obtenemos un array con los datos del archivo
        var file = $("#txtLogo")[0].files[0];
        //obtenemos el nombre del archivo
        var fileName = file.name;
        //obtenemos la extensión del archivo
        fileExtension = fileName.substring(fileName.lastIndexOf('.') + 1);
        //obtenemos el tamaño del archivo
        var fileSize = file.size;
        //obtenemos el tipo de archivo image/png ejemplo
        var fileType = file.type;
        //mensaje con la información del archivo
        if(!isImage(fileExtension))
                {
                  $(this).val('');
                    errorAlert("Error Imagen", "seleccione una imagen valida (jpg, png, jpeg, gif)");
                }

      });
 $('.chosen-select').chosen({
        no_results_text: "No hemos encontrado resultados!",
        allow_single_deselect: true
      }); 
      $('.chosen-select-deselect').chosen({ allow_single_deselect: true });   
 });
function isImage(extension)
{
    switch(extension.toLowerCase()) 
    {
        case 'jpg': case 'gif': case 'png': case 'jpeg':
            return true;
        break;
        default:
            return false;
        break;
    }
}