   $(document).ready(function(){     

   // buscar mensualidad
   $('#cmbAlumno').on('change', function(){
    $('#registrar_pagos').html("<img alt='cargando' src='"+app_url+"/img/ajax-loader.gif' style='left: 50%;top: 50%;position: absolute;'/>");
    $.ajax({
      url:app_url+'/pagos/buscar/'+this.value,
      type:'GET', 
      success:function(data)
      {
        setTimeout(function(){
          $('#registrar_pagos').html(data);
        }, 2000);        
        
      }
    });
  });
   //fin de buscar mensualidad  
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
        var monto=$('#txtMonto').val();
        if(tipo=="Efectivo")
        {
          var banco='N/A';
          var referencia='N/A';
          bancoSelected='N/A';
        }    
        else
        {        
          var banco=$('#cmbBanco').val();
          var referencia=$('#txtReferencia').val();
          var bancoSelected = $("#cmbBanco option:selected").html();
        }

        
        if(banco=='default')
        {
          bancoSelected='';
          banco='';
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
              $('#txtMontoAbonado').val(eval(montoAbonado)+eval($('#txtSaldo').val()));
              $('#modal-metodo').modal('hide');
            }
          });


  });
//fin de seleccionar metodo de pago



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

function calcular_monto(id,monto)
{
  
  if($('#cuotas'+id).prop( "checked" ))
  {
    var total= eval($('#txtMontoCancelar').val())+eval(monto);
    $('#txtMontoCancelar').val(total);
  }
  else
  {
    var total= eval($('#txtMontoCancelar').val())-eval(monto);
    $('#txtMontoCancelar').val(total);
  }
  
}

$(function () {
  $(document).on('click', '#btnPagar', function (event) {
    var formulario=$('#formulario').serializeArray();
    $('#registrar_pagos').html("<img alt='cargando' src='"+app_url+"/img/ajax-loader.gif' style='left: 50%;top: 50%;position: absolute;'/>");
    
    $.ajax({
      url:app_url+'/pagos/procesar_pagos',
      type:'POST', 
      data:formulario,
      success:function(data)
      {          
        
        setTimeout(function(){
          $('#registrar_pagos').html(data);
        }, 2000);
      }
    });
  });
});