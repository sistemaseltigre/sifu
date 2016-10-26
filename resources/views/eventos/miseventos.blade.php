@extends('plantilla.layaout')
@section('content')
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
   editable: true,
   selectable: true,    
          droppable: true, // this allows things to be dropped onto the calendar !!!
          events:app_url+'/eventos/getEventos', 
          eventRender: function(event, element)
          { 
           element.find('.fc-title').append("<br/> Creador: " + event.creado); 
         },
         eventDrop: function(event, delta, revertFunc) {
          console.log(event.end);
          var title = event.title;
          var start = event.start.format("YYYY-MM-DD[T]HH:mm:SS");
          var end = (event.end == null) ? start : event.end.format("YYYY-MM-DD[T]HH:mm:SS");

          var token=$('#csrf-token').val();
          $.ajax({
            url: app_url+"/eventos/update",
            data: 'type=resetdate&titulo='+title+'&inicio='+start+'&fin='+end+'&eventid='+event.id+'&allday='+event.allDay+'&_token='+token,
            type: 'POST',
            dataType: 'json',
            success: function(response){
              if(response.status != 'success')  
              {
                errorAlert('Permisos', 'Solo el creador del evento puede actualizar la informacion.');              
                revertFunc();
              }
            },
            error: function(e){             
              revertFunc();
              alert('Error processing your request: '+e.responseText);
            }
          });
        },
        eventResize: function(event, delta, revertFunc) {
          console.log(event+' resize');
          var title = event.title;
          var end = event.end.format();
          var start = event.start.format();
          var token=$('#csrf-token').val();
          $.ajax({
            url: app_url+'/eventos/update',
            data: 'type=resetdate&titulo='+title+'&inicio='+start+'&fin='+end+'&eventid='+event.id+'&allday='+event.allDay+'&_token='+token,
            type: 'POST',
            dataType: 'json',
            success: function(response){
              if(response.status != 'success')  
              {
                errorAlert('Permisos', 'Solo el creador del evento puede actualizar la informacion.');              
                revertFunc();
              }
            },
            error: function(e){             
              revertFunc();
              alert('Error processing your request: '+e.responseText);
            }
          });
        },
        select: function(start, end, event) {
           //var title = prompt('Titulo del Evento:');
           $('#start').val(moment(start).format("YYYY-MM-DD[T]HH:mm:SS")) ;
           $('#end').val(moment(end).format("YYYY-MM-DD[T]HH:mm:SS")) ;
           var allDay=!start.hasTime() && !end.hasTime();
           if (allDay=='')
           {
            allDay='false';
          }
          $('#formulario')[0].reset();
          $('#allday').val(allDay) ; 
            $('#modal').modal('show'); // show bootstrap modal

            calendar.fullCalendar('unselect');
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
function grabar()
{
 var titulo = $('#txtEvento').val();
 var start = $('#start').val();
 var end = ($('#end').val() == null ? start : $('#end').val());

 var token=$('#csrf-token').val();
 $.ajax({
  url: app_url+"/eventos/create",
  data:$('#formulario').serializeArray(),
  type: 'POST',
  dataType: 'json',
  success: function(response){
    $('#modal').modal('hide');
    $('#calendar').fullCalendar('renderEvent',
    {
      title: titulo,
      start: start,
      end: end,
      allDay: response.allDay,
      id:response.evento_id,
      creado:response.creador
    }, 
    true);
  },
  error: function(e){             
    fullCalendar.revertFunc();
    alert('Error processing your request: '+e.responseText);
  }
});
}

function eliminar()
{
 var titulo = $('#txtEvento').val();
 var start = $('#start').val();
 var end = ($('#end').val() == null ? start : $('#end').val());
 var id=$('#id').val();
 var token=$('#csrf-token').val();
 $.ajax({
  url: app_url+"/eventos/delete/"+id,
  type: 'get',
  dataType: 'json',
  success: function(response){
   if(response.status != 'success')  
   {
    errorAlert('Permisos', 'Solo el creador del evento puede actualizar la informacion.');              
    revertFunc();
    $('#modal-delete').modal('hide');
  }
  else
  {                
    $('#modal-delete').modal('hide');
    $('#calendar').fullCalendar( 'removeEvents', id);
  }
},
error: function(e){             
  fullCalendar.revertFunc();
  alert('Error processing your request: '+e.responseText);
}
});
}


</script>
<div class="modal fade" id="modal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">X</span></button>
      </div>
      <div class="modal-body form"> 
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">Registre su Evento.</h3>
          </div>
          <div class="panel-body">
            <form class="form-horizontal" id="formulario"> 
              {{ csrf_field() }}
              <input type="hidden" name="inicio" id="start">
              <input type="hidden" name="fin" id="end">
              <input type="hidden" name="allday" id="allday">
              <fieldset>                    
                <div class="form-group">
                  <label class="col-lg-3 control-label">Evento:</label>
                  <div class="col-lg-8">
                    <input type="text" class="form-control" id="txtEvento" name="txtEvento" placeholder="Descripción del Evento">
                  </div>
                </div>  
              </fieldset>
            </form> 
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" id="btnSave" onclick="grabar()" class="btn btn-primary btn-3d"><i class="fa fa-database"></i> Grabar</button>
        <button type="button" class="btn btn-danger btn-3d" data-dismiss="modal"><i class="fa fa-times-circle-o"></i> Cancelar</button>
      </div>
    </div>
  </div>
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
        <button type="button" id="btnSave" onclick="eliminar()" class="btn btn-primary btn-3d"><i class="fa fa-database"></i> Eliminar Evento</button>
        <button type="button" class="btn btn-danger btn-3d" data-dismiss="modal"><i class="fa fa-times-circle-o"></i> Cancelar</button>
      </div>
    </div>
  </div>
</div>
@stop