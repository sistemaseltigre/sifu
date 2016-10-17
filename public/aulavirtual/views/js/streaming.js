var socket = io('/');//iniciamos el servidor

$(function() {
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
      emitirVideo(context,videoStreaming,canvasVideo);
    },250);  
  }else{
    //en caso de que no sea el administrador escuchamos lo que el administrador esta emitiendo
    
  }
  });
});

function camaraOn(e) {
	urlVideo = window.URL.createObjectURL(e);
	$("#videostreaming").attr("src",urlVideo);
}

function camaraOff(e) {
	
}

function emitirVideo(context,videoStreaming,canvasVideo) {
  //console.log(videoStreaming);
  context.drawImage(videoStreaming,0,0,context.width,context.height);
  socket.emit('streaming',canvasVideo.toDataURL('image/webp'));
}

function verVideo() {
  
}

socket.on('streaming',function(e){
      $("#prevideo").hide();
      var img = document.getElementById("play");
      img.src = e;
      //console.log(e);
});