  var socket = io('/');
  $(function() {
    //codigo aquí
     var sid = socket.id;
     
  
  socket.on('connect', function() {
 	var socketid = socket.id;
 	console.log(socketid);
 	$('#sid').val(socketid);
	});
});


socket.on('loginError', function (msg) {
    $.jAlert({
        'title': 'Informacion',
        'content': msg.msg,
        'theme': 'blue',
        'btns': { 'text': 'Aceptar' }
    });
});//

