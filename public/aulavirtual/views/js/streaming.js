//var socket = io('/');//iniciamos el servidor
var contadortest = 0;
$(function() {
    $('#textochat').keypress(function(event){
  var keynum= event.keyCode; 
  if (keynum == 13) {
    enviarmensajechat(); 
  }
});
  //escuchamos si se conecta el administrador para emitir video
  //console.log(admin);
  socket.on('datosUsuario',function(e){
    contadortest += 1;
    
    console.log(contadortest);
    if ((e.admin)==true) {
      //console.log(e);
      //si es el profesor se crea la sala
      var roomId =  e.id_sala;
      var conf = new conference({
                remoteVideoElementId: null,
                localVideoElementId: 'play',
                sendOfferCallback: function(connectionId, offer) {
                        console.log("Sending offer to server");
                        socket.emit('offer', roomId, connectionId, offer);
                },
                sendCandidateCallback: function(connectionId, evt) {
                    if(evt.candidate) {
                        console.log("Sending candidate to server");
                        socket.emit('sendCandidate', roomId, connectionId, "host", evt.candidate);
                    }
                }
        });
        
        socket.on('connection', function() { console.log('connected to socket.io'); }); 
        socket.on('disconnect', function() { console.log('disconnected from socket.io'); });

        socket.on('answer', function(connectionId, answer) {
            conf.receiveAnswer(connectionId, answer);
        });
        
        socket.on('candidateReceived', function(connectionId, candidate) {            
           // console.log("Ice candidate received", candidate); 
            conf.handleIceCandidate(connectionId, candidate);
        });
        
        socket.on('studentJoined', function(connectionId) {
           // console.log("Student joined");
            conf.createCall(connectionId);
        });

       conf.initialize();
        
     socket.emit("createRoom", roomId);
  }else if ((e.admin)==false){
    //en caso de que no sea el administrador escuchamos lo que el administrador esta emitiendo
    /*esto es en caso de que el socket sea estudiante*/
        var roomId =  e.id_sala;
        var cId;
        var conf = new conference({
                localVideoElementId: null,
                remoteVideoElementId: 'play',
                sendAnswerCallback: function(connectionId, offer, answer) {
                    console.log("Sending answer to server");
                    socket.emit('answer', roomId, connectionId, answer);
                },
                sendCandidateCallback: function(connectionId, evt) {
                    if(evt.candidate) {
                        console.log("Sending candidate to server");
                        socket.emit('sendCandidate', roomId, connectionId, "guest", evt.candidate);
                    }
                }
        });
          
        socket.on('connection', function() { console.log('connected to socket.io'); }); 
        socket.on('disconnect', function() { console.log('disconnected from socket.io'); });
        
        socket.emit('join', roomId);
        socket.on('joined', function(connectionId, roomInfo) {
            cId = connectionId;
            console.log("Joined to room: " + roomInfo.id);
        });
        socket.on('offer', function(connectionId, offer) {
            if(connectionId == cId) {
                conf.initialize(function() {
                    conf.acceptCall(cId, offer, []);
                });
            }
        }); 
        socket.on('candidateReceived', function(connectionId, candidate) {
            if(connectionId == cId) 
            {
                console.log("Ice candidate received", candidate); 
                conf.handleIceCandidate(cId, candidate);
            }
        });
  }
  });
});