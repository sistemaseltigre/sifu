var socket = io('/');//iniciamos el servidor
var bandera;
var audioContext;
$(function() {
  var videoStreaming_cliente;
  audioContext = new AudioContext();
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
  //escuchamos si se conecta el administrador para emitir video
  socket.on('datosUsuario',function(e){
  if ((e.admin)==true) {
    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msgGetUserMedia);
    if (navigator.getUserMedia) {
      navigator.getUserMedia({video:true, audio:true},camaraOn,camaraOff);
    }
    setInterval(function(){
      emitirVideo(context,videoStreaming,canvasVideo,audioStreaming,bandera);
    },250);  
  }else{
    //en caso de que no sea el administrador escuchamos lo que el administrador esta emitiendo
    
  }
  });
});

function camaraOn(e) {
	urlVideo = window.URL.createObjectURL(e);
  $("#videostreaming").attr("src",urlVideo);
	$("#audioStreaming").attr("src",urlVideo);
  
 var source = audioContext.createMediaStreamSource(e);
 var proc = audioContext.createScriptProcessor(2048, 2, 2);

  
        
    
}

function camaraOff(e) {
	
}

function emitirVideo(context,videoStreaming,canvasVideo,audioStreaming,bandera) {
  //console.log(videoStreaming);
  //bandera=1;
  //console.log(bandera);
  context.drawImage(videoStreaming,0,0,context.width,context.height);
  var videoUpdateCliente = canvasVideo.toDataURL('image/webp');
  var audioUpdateCliente = audioStreaming.src;
  //var audioUpdateCliente = "data:audio/mp3;base64,"+btoa(audioStreaming.src);
  
        // define as output of microphone the default output speakers
       // microphone_stream.connect( audioContext.destination ); 
 // var audioUpdateCliente = new Blob(audioStreaming.chunks, { 'type' : 'audio/ogg; codecs=opus' });
  socket.emit('streaming',{videoUpdateCliente,audioUpdateCliente});

}

function verVideo(e) {
  videoStreaming_cliente = document.getElementById("play");     
  videoStreaming_cliente.src = e.videoUpdateCliente;
}

function escuchar(e) {
  
  if (bandera==0) {
    audioStreaming_cliente = document.getElementById("audioStreamingCliente");
    audioStreaming_cliente.src = e.audioUpdateCliente;
    bandera=1;
  }
  
}

socket.on('streaming',function(e){
  verVideo(e);
  escuchar(e);
});