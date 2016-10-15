var socket = io('/');//iniciamos el servidor
var movimientos = new Array();
var pulsado;

function initCanvas() {
  var canvasDiv = document.getElementById('canvasDiv');
  canvas = document.createElement('canvas');
  canvas.setAttribute('width', 800);
  canvas.setAttribute('height', 500);
  canvas.setAttribute('class', 'img-responsive');
  canvas.setAttribute('id', 'canvas');
  canvasDiv.appendChild(canvas);
  if(typeof G_vmlCanvasManager != 'undefined') {
    canvas = G_vmlCanvasManager.initElement(canvas);
  }
  context = canvas.getContext("2d");
  $('#canvas').mousedown(function(e){
    //emitimos cuando se presiona el boton del mouse
    socket.emit('mousedown',{pageX : e.pageX, pageY : e.pageY, pulsado: true});
  });
        
  $('#canvas').mousemove(function(e){
    if(pulsado){
      //emitimos cuando se mantiene presionado el boton del mouse y se mueve sobre el canvas
      socket.emit('mousemove',{pageX : e.pageX, pageY : e.pageY, pulsado: true});
    }
  });
    
  $('#canvas').mouseup(function(e){
    socket.emit('mouseup',{pulsado : false});
  });

  $('#canvas').mouseleave(function(e){
    socket.emit('mouseleave',{pulsado : false});
  });
  socket.emit('repinta',{});
}

function repinta(){
  canvas.width = canvas.width;
  
  context.strokeStyle = "#fff";
  context.lineJoin = "round";
  context.lineWidth = 1;
            
  for(var i=0; i < movimientos.length; i++)
  {     
    context.beginPath();
    if(movimientos[i][2] && i){
      context.moveTo(movimientos[i-1][0], movimientos[i-1][1]);
    }else{
      context.moveTo(movimientos[i][0], movimientos[i][1]);
    }
    context.lineTo(movimientos[i][0], movimientos[i][1]);
    context.closePath();
    context.stroke();
  }
}

socket.on('mousedown',function(e){
  pulsado = e.pulsado;
  movimientos.push([e.pageX - canvas.offsetLeft,e.pageY - canvas.offsetTop,false]);
  repinta();
  console.log('este mensaje es para todos');
  console.log(e);        
});
socket.on('mousemove',function(e){
  if(pulsado==true){
    movimientos.push([e.pageX - canvas.offsetLeft,e.pageY - canvas.offsetTop,true]);
    repinta();
  }   
});
socket.on('mouseup',function(e){
  pulsado = e.pulsado;
});
socket.on('mouseleave',function(e){
  pulsado = e.pulsado;
});
socket.on('repinta',function(){
  repinta();
});