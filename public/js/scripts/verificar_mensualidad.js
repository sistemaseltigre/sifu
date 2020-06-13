   $(document).ready(function(){     
$('.chosen-select').chosen();
   // buscar mensualidad
   $('#cmbAlumno').on('change', function(){
    $('#verificar_pagos').html("<img alt='cargando' src='"+app_url+"/img/ajax-loader.gif' style='left: 50%;top: 50%;position: absolute;'/>");
    $.ajax({
      url:app_url+'/pagos/buscar_pagos/'+this.value,
      type:'GET', 
      success:function(data)
      {
        setTimeout(function(){
          $('#verificar_pagos').html(data);
        }, 2000);        
        
      }
    });
  });
 });


   function aprobar(monto, id)
   {
    var monto_abonado=$('#txtMontoAbonado').val();
    if( $('#pagos'+id).prop('checked') ) {
      $('#txtMontoAbonado').val(eval(monto)+eval(monto_abonado));
    }
    else
    {      
      $('#txtMontoAbonado').val(eval(monto_abonado)-eval(monto));
    }
  }

  $(function () {
    $(document).on('click', '#btnAprobar', function (event) {
      var bandera=false;
      $('.pagos:checked').each(
        function() {
         bandera=true;
       }
       );
      if(bandera==false)
      {
        errorAlert('Error','Seleccione el pago que desee aprobar');
        return;
      }
      else
      {
       var formulario=$('#formulario').serializeArray();
       $('#verificar_pagos').html("<img alt='cargando' src='"+app_url+"/img/ajax-loader.gif' style='left: 50%;top: 50%;position: absolute;'/>");

       $.ajax({
        url:app_url+'/pagos/procesar_pagos_verificados',
        type:'POST', 
        data:formulario,
        success:function(data)
        {          

          setTimeout(function(){
            $('#verificar_pagos').html(data);
          }, 2000);
        }
      });
     }
   });
  });