   $(document).ready(function(){     
$('.chosen-select').chosen();
   // buscar mensualidad
   $('#cmbAlumno').on('change', function(){
    $('#historico_pagos').html("<img alt='cargando' src='"+app_url+"/img/ajax-loader.gif' style='left: 50%;top: 50%;position: absolute;'/>");
    $.ajax({
      url:app_url+'/pagos/buscar_historico/'+this.value,
      type:'GET', 
      success:function(data)
      {
        setTimeout(function(){
          $('#historico_pagos').html(data);
        }, 2000);        
        
      }
    });
  });

 });
   

    function detalles_pagos(id)
    {
      $.ajax({
      url:app_url+'/pagos/detalles_historico/'+id,
      type:'GET', 
      success:function(data)
      {
         $('#modal').modal('show');
        setTimeout(function(){
          $('#contenido-detalles').html(data);
        }, 5);  

        
      }
    });
    }
    function detalles_mensualidad()
    {
    $('#modal-mensualidad').modal('show');
  }
