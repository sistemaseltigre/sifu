var socket = io('/');//iniciamos el servidor
var bandera;
var audioContext;
var biquadFilter;
var stream;
var channels = 2;
var frameCount;
//var recorderProcess;
 var myArrayBuffer;
$(function() {

  /**
//keller dice que esta vaina funcionara*/







  /**/
  var videoStreaming_cliente;
  //audioContext = new AudioContext();
  bandera=0;
  var audioStreaming_cliente;
  var audioStreaming = document.getElementById("audioStreaming");
  var videoStreaming = document.getElementById("videostreaming");
  videoStreaming.width = 100;
  videoStreaming.height = 100;
  var canvasVideo = document.getElementById("prevideo");
  canvasVideo.width = 100;
  canvasVideo.height = 75;
  if(canvasVideo.getContext) {
   	var context = canvasVideo.getContext("2d");
   	context.width = canvasVideo.width;
		context.height = canvasVideo.height;
  }
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioContext();
      frameCount = audioContext.sampleRate * 2.0;
      myArrayBuffer = audioContext.createBuffer(channels, frameCount, audioContext.sampleRate);
  //------------canvas audio
  //pruebaaudiocanvas
  /*var canvasAudio = document.getElementById("pruebaaudiocanvas");
  canvasAudio.width = 100;
  canvasAudio.height = 75;
  if(canvasAudio.getContext) {
    var contextaudio = canvasAudio.getContext("2d");
    contextaudio.width = canvasAudio.width;
    contextaudio.height = canvasAudio.height;
  }*/
  

  // Create an AudioNode from the stream.
  
  //escuchamos si se conecta el administrador para emitir video
  socket.on('datosUsuario',function(e){
  if ((e.admin)==true) {


//si es el profesor se crea la sala
var roomId =  1;
var conf = new conference({
                remoteVideoElementId: null,
                localVideoElementId: 'testkeller',
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
            console.log("Ice candidate received", candidate); 
            conf.handleIceCandidate(connectionId, candidate);
        });
        
        socket.on('studentJoined', function(connectionId) {
            console.log("Student joined");
            conf.createCall(connectionId);
        });

       conf.initialize();
        
     socket.emit("createRoom", roomId); 


// si es el profesor se crea la sala


/*
    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia);
    if (navigator.getUserMedia) {
      navigator.getUserMedia({video:true, audio:true},camaraOn,camaraOff);
    }
    setInterval(function(){
      emitirVideo(context,videoStreaming,canvasVideo,audioStreaming,bandera,stream,myArrayBuffer);
    },250);  */
  }else{
    //en caso de que no sea el administrador escuchamos lo que el administrador esta emitiendo
    /*esto es en caso de que el socket sea estudiante*/
        var roomId =  1;
        var cId;
        var conf = new conference({
                localVideoElementId: null,
                remoteVideoElementId: 'testkeller',
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

    /////////////////////7
  }
  });
});

function camaraOn(e) {
  //console.log(e);
 // for (var i = 0; i != e.length; ++i) {
    //var sourceInfo = e[i];
    //console.log(sourceInfo);
  //}
   /* if (sourceInfo.kind === 'audio') {
      console.log(sourceInfo.id, sourceInfo.label || 'microphone');

      audioSource = sourceInfo.id;
    } else if (sourceInfo.kind === 'video') {
      console.log(sourceInfo.id, sourceInfo.label || 'camera');

      videoSource = sourceInfo.id;
    } else {
      console.log('Some other kind of source: ', sourceInfo);
    }
  }*/
  /*if (typeof MediaStreamTrack === 'undefined' ||
    typeof e.getSources === 'undefined') {
  alert('This browser does not support MediaStreamTrack.\n\nTry Chrome.');
} else {
  MediaStreamTrack.getSources(gotSources);
}*/
  

  // Connect it to the destination to hear yourself (or any other node for processing!)
  //mediaStreamSource.connect( audioContext.destination );
  //var mediaStreamSource = audioContext.createMediaStreamSource( e );
  stream=e;
  //var track = mediaStreamSource.mediaStream.getTrackById();
  //mediaStreamSource.mediaStream.addTrack();
   // Create a biquadfilter
          /*biquadFilter = audioContext.createBiquadFilter(e);
          biquadFilter.type = "lowshelf";
          biquadFilter.frequency.value = 1000;*/
  //console.log(mediaStreamSource.mediaStream.id);
  // var blob = new Blob(mediaStreamSource, { 'type' : 'audio/ogg; codecs=opus' });
  //audio_track = e.getAudioTracks();
  //console.log(audio_track);
  //console.log(audio_track[0].id, audio_track[0].label || 'microphone');
  //console.log(e.getSources(gotSources));
  /*var sourceNode = audioCtx.createMediaStreamSource(e);
  var recorder = audioCtx.createScriptProcessor(2048, 2, 2);
  recorder.onaudioprocess = recorderProcess;
  sourceNode.connect(recorder);
  recorder.connect(audioCtx.destination);*/

	urlVideo = window.URL.createObjectURL(e);
  //$("#videostreaming").attr("src",urlVideo);
	//$("#audioStreaming").attr("src",urlVideo);
  
// var source = audioContext.createMediaStreamSource(e);
 //var proc = audioContext.createScriptProcessor(2048, 2, 2);

  
        
    
}


function camaraOff(e) {
	
}
function recorderProcess(e) {
  //if (recording){
    //var left = e.inputBuffer.getChannelData(0);
    //ws.send(convertFloat32ToInt16(left));
  //}
}

function convertFloat32ToInt16(buffer) {
  l = buffer.length;
  buf = new Int16Array(l);
  while (l--) {
    buf[l] = Math.min(1, buffer[l])*0x7FFF;
  }
  return buf.buffer;
}
function emitirVideo(context,videoStreaming,canvasVideo,audioStreaming,bandera,stream,myArrayBuffer) {
  //console.log(videoStreaming);
  //bandera=1;
  //console.log(stream);
  context.drawImage(videoStreaming,0,0,context.width,context.height);
  var videoUpdateCliente = canvasVideo.toDataURL('image/webp');
  var audioUpdateCliente = audioStreaming.src;

  var sourceNode = audioContext.createMediaStreamSource(stream);
  var recorder = audioContext.createScriptProcessor(2048, 1, 1);
  var finish = audioContext.destination;
  recorder.onaudioprocess = recorderProcess;
  sourceNode.connect(recorder);
  recorder.connect(audioContext.destination);
  //console.log(finish);
  //console.log(myArrayBuffer);
   //recorder.onaudioprocess = recorderProcess;

    //sourceNode.connect(recorder);
    //recorder.connect(audioCtx.destination);
  //console.log(recorder);
  var audio_track = stream.getAudioTracks();
  var blob = new Blob(audio_track, { 'type' : 'audio/ogg; codecs=opus' });
  //console.log(blob);
 // var prueba_audio = canvasVideo.toDataURL('audio/ogg');
  //console.log(audioUpdateCliente);
  //var audioUpdateCliente = "data:audio/mp3;base64,"+btoa(audioStreaming.src);
  
        // define as output of microphone the default output speakers
       // microphone_stream.connect( audioContext.destination ); 
 // var audioUpdateCliente = new Blob(audioStreaming.chunks, { 'type' : 'audio/ogg; codecs=opus' });
 //console.log(stream);
 //var audio_track = stream.getAudioTracks();
 //console.log(audio_track);
 //var pinga = audio_track;
  socket.emit('streaming',{videoUpdateCliente,audioUpdateCliente,recorder});

}

function verVideo(e) {
  videoStreaming_cliente = document.getElementById("play");     
  //videoStreaming_cliente.src = e.videoUpdateCliente;
}

function escuchar(e) {
  
  if (bandera==0) {
    //audioStreaming_cliente = document.getElementById("audioStreamingCliente");
    //audioStreaming_cliente.src = e.audioUpdateCliente;
    //console.log(e.biquadFilter);
    // var audio_track = e.stream.getAudioTracks();
   // console.log(e.recorder);
    //console.log(audio_track);
    //console.log(audio_track[0].id, audio_track[0].label || 'microphone');
    bandera=1;
  }
  
}

socket.on('streaming',function(e){
  verVideo(e);
  escuchar(e);
});



        