<div id='calendar'></div>
<input type="hidden" value="@if(isset($seccion_id)){{ $seccion_id }}@endif" id="seccion_id">

<script>

 $(document).ready(function(){  
   var seccion_id=$('#seccion_id').val();
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
   events: app_url+"/getHorario_seccion/"+seccion_id, 

   eventRender: function(event, element)
   { 
     element.find('.fc-title').append("<br/>" + event.description +" "+event.grado+" "+event.seccion); 
   },
   windowResize: function(view) {

   },
   resourceAreaWidth:"100%",
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
    });

});
</script>