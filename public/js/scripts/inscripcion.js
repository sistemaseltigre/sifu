   $(document).ready(function(){       
    console.log("on");
    $("#frmMetodo").validate({
      errorElement: "em",
      errorPlacement: function(error, element) {
        $(element.parent("div").addClass("form-animate-error"));
        error.appendTo(element.parent("div"));
      },
      success: function(label) {
        $(label.parent("div").removeClass("form-animate-error"));
      },
      rules: {
        txtMonto: {
          required: true
        },
        txtReferencia: {
          required: true
        },
        cmbTipo: {
          valueNotEquals: "default" 
        },       
        cmbBanco: {
          valueNotEquals: "default" 
        }        
      },
      messages: {
        txtReferencia: "El campo referencia es requerido",
        txtMonto: "El campo monto es requerido"
      }

    });
    $.validator.addMethod("valueNotEquals", function(value, element, arg){
      return arg != value;
    }, "Seleccione una Opcion de la lista");

    $("#cmbMetodo").change(event => {
      var idCuota=$('#cmbMetodo').val();      
      if(idCuota=="default")
      {
        $("#contenido-metodo").empty();  
        $("#txtMontoCancelar").val('');
        return;
      }
      $.getJSON(app_url+"/getInscripcion/"+idCuota, function(res, sta){
        $("#contenido-metodo").empty();   
        if(res)
        {
          $("#contenido-metodo").append(`<tr>
            <th>Inscripcion</th>
            <th>${res.inscripcion}</th>
            <th><input type='checkbox' name='chkInscripcion' checked disabled value='${res.inscripcion}'></th>
            </tr>
            <tr>
            <th>Seguro</th>
            <th>${res.seguro}</th>
            <th><input type='checkbox' name="chkSeguro" id='chkSeguro' value="${res.seguro}" onclick="montoCancelar(${res.inscripcion})"></th>
            </tr>
            <tr>
            <th>Otro</th>
            <th>${res.otro}</th>
            <th><input type='checkbox' name='chkOtro' id='chkOtro' value="${res.otro}" onclick="montoCancelar(${res.inscripcion})"></th>
            </tr>`);

          $("#txtMontoCancelar").val(res.inscripcion);
        }
      });
    });
    $('#cmbTipo').change( function(){
      var tipo=$('#cmbTipo').val();
      if(tipo=="Efectivo")
      {
        $("#txtReferencia").prop( "disabled",true);
        $("#cmbBanco").prop( "disabled",true);
      }
      else
      {
        $("#txtReferencia").prop( "disabled",false);
        $("#cmbBanco").prop( "disabled",false);
      }
    });
  });
   function montoCancelar(val)
   {
    var monto=0;
    $("#txtMontoCancelar").val(val)
    if( $('#chkOtro').prop('checked') && $('#chkSeguro').prop('checked') ) 
    {
      monto=eval($('#chkOtro').val())+eval($('#chkSeguro').val())+eval($("#txtMontoCancelar").val());
    }
    else
      if( $('#chkOtro').prop('checked'))
      {
        monto=eval($('#chkOtro').val())+eval($("#txtMontoCancelar").val());
      }
      else
        if( $('#chkSeguro').prop('checked'))
        {
          monto=eval($('#chkSeguro').val())+eval($("#txtMontoCancelar").val());
          $('#txtSeguro').val('si');
        }
        else
        {
          monto=eval($("#txtMontoCancelar").val());
          $('#txtSeguro').val('no');
        }
        $("#txtMontoCancelar").val(monto);
      }

      var save_method; 
      function agregar()
      {
        save_method = 'add';
        //$('#frmMetodo').validate().resetForm();
      $('#frmMetodo')[0].reset(); // reset form on modals
      if($('#cmbMetodo').val()!="default")
      {        
      $('#modal-metodo').modal('show'); // show bootstrap modal
    }
    else
    {
      alert("Escoja un metodo de pago para continuar");
    }
  }

  $(function () {
    $(document).on('click', '#addPago', function (event) {
      event.preventDefault();
       if (!$("#frmMetodo").valid()) { // Not Valid
         return false;
       } else {        
        var tipo=$('#cmbTipo').val();
        var banco=$('#cmbBanco').val();
        var monto=$('#txtMonto').val();
        var referencia=$('#txtReferencia').val();
        var bancoSelected = $("#cmbBanco option:selected").html();
        if(banco=='default')
        {
          bancoSelected='';
          banco='';
        }
        if(eval(monto)+eval($('#txtMontoAbonado').val()) > eval($('#txtMontoCancelar').val()))
        {
          alert("El Monto no puede superar el monto a cancelar!!!");
          return;
        }
        var montoAbonado=0;
        var tds=$("#contenido-pago tr:first td").length;
            // Obtenemos el total de columnas (tr) del id "tabla"
            var trs=$("#contenido-pago tr").length;
            var nuevaFila="<tr>";
            for(var i=0;i<=tds;i++){
                // añadimos las columnas
                nuevaFila+="<td>"+tipo+" <input type=hidden value="+tipo+" name=txtTipo[]></td><td>"+bancoSelected+"<input type=hidden value="+banco+" name=txtBanco[]></td><td>"+monto+" <input class='monto' type=hidden value="+monto+" name=txtMonto[]></td><td>"+referencia+" <input type=hidden value="+referencia+" name=txtReferencia[]></td><td></td><td><input type=button value=eliminar id=deletePago></td>";                
              }
              nuevaFila+="</tr>";
              $("#contenido-pago").append(nuevaFila);
              $('#txtNum').val(trs);

              $(".monto").each(
                function(index, value) {
                  montoAbonado = montoAbonado + eval($(this).val());
                }
                );
              $('#txtMontoAbonado').val(montoAbonado);
              $('#modal-metodo').modal('hide');
            }
          });

//seleccionar metodo de pago
$('[name="metodo"]').on('ifChecked', function(event){
  console.log(this.value)

  $('#metodo_id').val(this.value);
});
//fin de seleccionar metodo de pago


//metodo de pago
$('#wizard').smartWizard({
 onLeaveStep:leaveAStepCallback,
 onFinish:finallyStep,
});
function leaveAStepCallback(obj, context){
        return validateSteps(context.fromStep, context.toStep); // return false to stay on step and true to continue navigation 
      }

      function finallyStep(){

       $.ajax({
        url:app_url+'/inscripcion/create',
        type:'POST',
        data:$('#frmCondicion, #frmCuotas, #frmPago, #frmMaterias, #frmMateriasPendientes, #frmDocumentos').serializeArray(),
        success:function(data)
        {
          if(data==='1')
          {
            $.jAlert({
              'title': 'Informacion',
              'content': 'Alumno inscrito correctamente!',
              'theme': 'blue',
              'btns': { 'text': 'Aceptar' },
              onClose:function()
              {             
               location.href = app_url+"/lista_preinscripcion"; 
             }
           });           
          }
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

          if($('#metodo_id').val()=='')
          {
            errorAlert("Metodo de pago", "seleccione un metodo de pago para continuar.");
            return false;
            isStepValid=false;
          }
          else
          {

           //condicion del metodo hace falta

           var id=$('#metodo_id').val();
           $.ajax({

            url: app_url+'/config_cuotas/detalles/buscar/'+id,
            type: "GET",
                /*beforeSend: function() 
                { $('#loading').show(); }, 
                complete: function() 
                { $('#loading').hide(); },*/
                success: function(data) {
                 $('#seleccionar_cuotas').html(data);
               }
             });
         }
       }
       else
        if(fromStep == 2){

        }
        else
          if(fromStep == 3){
            if(eval($('#txtMontoAbonado').val())<eval($('#txtMontoCancelar').val()))
            {
              errorAlert('Monto sin aprobar', "El monto registrado debe ser mayor o igual al monto a cancelar!");
              return false;
              isStepValid=false;
            }
          }
          return isStepValid;
        // ...      
      }

      $('.buttonNext').addClass('btn btn-success');
      $('.buttonPrevious').addClass('btn btn-primary');
      $('.buttonFinish').addClass('btn btn-default');


//fin metodo de pago



//total a cancelar
$('#txtMontoCancelar').val($('#monto_inscripcion').val());//valor de la inscripcion se le asigna a total a cancelar
$('#seguro').on('ifChecked', function(event){
 var total= eval($('#txtMontoCancelar').val())+ eval($('#monto_seguro').val());
 $('#txtMontoCancelar').val(total);
  $('#txtSeguro').val('si');

});

$('#seguro').on('ifUnchecked', function(event){
  var total= eval($('#txtMontoCancelar').val())- eval($('#monto_seguro').val());
  $('#txtMontoCancelar').val(total);
   $('#txtSeguro').val('no');
});

//fin total a cancelar






});

//seleccionar cuotas
function seleccionar_cuotas(i,monto)
{

  if( $('#cuotas'+i).prop('checked') ) {
    if(i!=1)
    {
      if( !$('#cuotas'+(i-1)).prop('checked') )
      {
        errorAlert('Debe seleccionar las cuotas en orden cronologicas');
        $('#cuotas'+i).prop('checked',false);
      }
      else
      {
       var total= eval($('#txtMontoCancelar').val())+eval(monto);
       $('#txtMontoCancelar').val(total);
     }
   }
   else
   {
    var total= eval($('#txtMontoCancelar').val())+eval(monto);
    $('#txtMontoCancelar').val(total);
  }
}
else
{
  var total= eval($('#txtMontoCancelar').val())-eval(monto);
  $('#txtMontoCancelar').val(total);
}
}

//fin de seleccionar cuotas




$(function () {
  $(document).on('click', '#deletePago', function (event) {
    event.preventDefault();
    var montoAbonado=0;      
    var trs=$("#contenido-pago tr").length;
    $('#txtNum').val(trs);
    $(this).closest('tr').remove();
    $(".monto").each(
      function(index, value) {
        montoAbonado = montoAbonado + eval($(this).val());
      }
      );
    $('#txtMontoAbonado').val(montoAbonado);      
  }); });
function comprobar(id, materia_id)
{
 $('input[name="materiasRequeridas[]"]').each(function() {
  //$(this).val() es el valor del checkbox correspondiente
  if($(this).val()==materia_id)
  {
    if($('#materia'+id).prop('checked'))
    {

      $(this).prop("checked", false);
    }
    else
    {

      $(this).prop("checked", true);
    }
  }
});
}

function guardar_inscripcion()
{
  if($('#txtMontoCancelar').val() > $('#txtMontoAbonado').val())
  {
    errorAlert('Error!', 'El monto abonado debe ser igual al monto deudor');
    return;    
  }
  $.ajax({
    url:app_url+'/inscripcion/create',
    type:'POST',
    data:$('#frmDetallesInscripcion, #frmInscripcion, #frmPago, #frmMaterias, #frmMateriasPendientes').serializeArray(),
    success:function(data)
    {
      if(data==='1')
      {
        alert("Alumno inscrito correctamente!");
        location.href = app_url+"/lista_preinscripcion"; 
      }
    }
  });
}