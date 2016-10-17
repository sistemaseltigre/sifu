  var socket = io('/');
  socket.on('loginError', function (msg) {
    $.jAlert({
        'title': 'Informacion',
        'content': msg.msg,
        'theme': 'blue',
        'btns': { 'text': 'Aceptar' }
    });
  });