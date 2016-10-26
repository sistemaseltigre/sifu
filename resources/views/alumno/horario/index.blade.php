@extends('plantilla.layaout')
@section('content')
<div class="panel panel-default">
  <div class="panel-heading">
  <h3 class="panel-title">Mi Horario</h3>
  </div>
  <div class="panel-body">    
   <div id='calendar'></div>
   <input type="hidden" value="@if(isset($alumno)){{ $alumno->idalumno }}@endif" id="alumno_id">

  </div>
  </div>
  <script>

 $(document).ready(function(){  
   var alumno_id=$('#alumno_id').val();
  var calendar = $('#calendar').fullCalendar({
    header: {
     left: '',
     right:'',
     center:''
   },
   allDaySlot: false,
   weekNumberTitle: 'A',
   lang: 'es',
   slotMinutes: 40,
   defaultDate : "2014-01-01",
   minTime : '07:00:00',
   maxTime : '22:00:00',
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
   events: "/alumno/getHorario/"+alumno_id, 

   eventRender: function(event, element)
   { 
     element.find('.fc-title').append("<br/><b>" + event.description+"</b>"); 
   },
   windowResize: function(view) {

   },
   resourceAreaWidth:"30%",
   editable: false,
   views: {
    basic: {
            // options apply to basicWeek and basicDay views
          },
          agenda: {
            columnFormat:'dddd',
            // options apply to agendaWeek and agendaDay views
          },
          week: {
            // options apply to basicWeek and agendaWeek views
          },
          day: {
            // options apply to basicDay and agendaDay views
          }
        }


      /* eventClick:  function(event, jsEvent, view) {
        $('#modalTitle').html(event.title);
        $('#modalBody').html(event.description+'<br><br>Fecha: '+event.fecha+'<br><br>Hora: '+event.hora);
        $('#eventUrl').attr('href',event.url);
        $('#fullCalModal').modal();
      }*/


    });

});
</script>
@stop