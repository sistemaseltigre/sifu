<style>
  .fc-title{
    color:#ffffff !important;
    font-size:14px;
  }
  .fc-time span {
    color:#000000 !important;
    font-size:12px;
  }

}
</style>
<div class="row">
  <div class="col-sm-12">
    <div id='calendar'>
    </div>
    <div class="clearfix"></div>
    <input type="hidden" name="_token" id="csrf-token" value="{{ Session::token() }}" />
  </div>
</div>
<script>

 $(document).ready(function(){  
  $(".x_title span").css("color",'#000000');
  $('#btnAdd').on('click', function(){
    $.ajax({
      url: "/calendario/etiqueta/create",
      data: $('#frmEtiqueta').serializeArray(),
      type: 'POST',
      success: function(response){
        if(response.status != 'success')                
          $("#etiqueta").html(response);
      },
      error: function(e){             

        alert('Error processing your request: '+e.responseText);
      }
    });
  });
   /* initialize the external events
   -----------------------------------------------------------------*/
   


   var date = new Date();
   var d = date.getDate(),
   m = date.getMonth(),
   y = date.getFullYear();
   var calendar = $('#calendar').fullCalendar({
     header: {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    },     
    minTime : '7:00:00',
    maxTime : '20:00:00',
    firstDay : 1,
    titleFormat:"D/MMM/YYYY",
    defaultView:'agendaWeek',
    monthNamesShort : ['Enero' , 'Febrero' , 'Marzo' , 'Abril' , 'Mayo' , 'Junio' , 'Julio' ,
    'Agosto' , 'Septiembre' , 'Octubre' , 'Noviembre' , 'Diciembre' ],
    dayNamesShort : ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    dayNames:['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    buttonText:{
     today:    'Hoy',
     month:    'Mes',
     week:     'Semana',
     day:      'Dia'
   },    
   slotDuration: '00:30:00',
   editable: false,
   selectable: false,    
          droppable: true, // this allows things to be dropped onto the calendar !!!
          events:app_url+'/eventos/mostrar_eventos', 
          eventRender: function(event, element)
          { 
           element.find('.fc-title').append("<br/> Creador: " + event.creado); 
         },
          eventClick:  function(event, jsEvent, view) {
            $('#id').val(event.id);
            $('#evento').html('Descripción del evento: '+ event.title);
            $('#creado').html('Creado por: '+ event.creado);
            $('#fecha').html('Desde: '+ moment(event.start).format("DD-MM-YYYY HH:mm:SS")+ ' <br>Hasta: '+moment(event.end).format("DD-MM-YYYY HH:mm:SS"));
            $('#modal-delete').modal('show');
          }

        });

});



</script>

</div>
<div class="modal fade" id="modal-delete" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Información del evento</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="formulario-delete"> 
              {{ csrf_field() }}
              <input type="hidden" name="id" id="id">
              <fieldset>                    
                <div class="form-group">
                  <div class="col-lg-8">
                    <label id="evento">Evento: </label><br>
                    <label id="creado">Creado por: </label><br>
                    <label id="fecha">Fecha: </label>
                  </div>
                </div>  
              </fieldset>
            </form> 
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-danger btn-3d" data-dismiss="modal"><i class="fa fa-times-circle-o"></i> Cancelar</button>
      </div>
    </div>
  </div>
</div>