var socket = io('/');//iniciamos el servidor
dame_color_aleatorio();
var urlinicio;

socket.on('datosUsuario',function(e){
  $('#nombre_usuario').html(e.username);
  urlinicio = e.urlinicio;
});

socket.on('mensajesChat',function(e){
 // $('#chatUsername').html(e.chat_user);
 // $('#mensajes_chat_user').html(e.chat_msg);
 if (e.pregunta==false) {
 	$( "#mensajes_chat" ).append( "<p><b><font color='"+e.chat_color+"'>"+e.chat_user+":</font></b> <span>"+e.chat_msg+"</span></p>" );
 }else{
 	$( "#mensajes_chat" ).append( "<p class='alert alert-warning'><b><font color='#000'>"+e.chat_user+",</font></b> quiere saber: <span><i>"+e.chat_msg+"</i></span></p>" );
 }
  
  $("#mensajes_chat").animate({ scrollTop: $('#mensajes_chat')[0].scrollHeight}, 1000);
});

socket.on('mensajeSalida',function (e) {
	$( "#mensajes_chat" ).append( "<p><b><font color='#000'>"+e.e.chat_user+"</font></b> <i>abandono del aula.</i><span></span></p>" );
	$("#mensajes_chat").animate({ scrollTop: $('#mensajes_chat')[0].scrollHeight}, 1000);
});

////////////////////////////////////////////////////////////////
//////////////FUNCIONES CON JQUERY PARA EL AULA ////////////////
function toggleChat(){
  $( "#contenedorChat" ).toggle("fast");
  $("#menuaula").css("margin-right:","340px");
}
function toggleAudio() {
	var audioimg = $("#audioimg").attr("src");
	if (audioimg=="/views/img/volume-mute.png") {
		$("#audioimg").attr("src","/views/img/volume-up.png");
		$("#audioStreamingCliente").prop('muted', false);
	}else{
		$("#audioimg").attr("src","/views/img/volume-mute.png");
		$("#audioStreamingCliente").prop('muted', true);
	}
	
}
function enviarmensajechat(){
	chat_user = $('#nombre_usuario').text();
	chat_msg  = $('#enviarmensajechat').val();
	
	//limpiamos la caja de texto
	$('#enviarmensajechat').val('');
	//verificamos que la cadena no conenga <> para evitar inyeccion HTML ni $
	validarMensaje(chat_msg);
	if (validar==0) {chat_msg=null;}
	//emitimos el nuevo mensaje al servidor
	if ((chat_msg!=null) && (chat_msg.length>0)) {
		socket.emit('mensajeChatUser', { chat_user:chat_user, chat_msg:chat_msg, chat_color:color_aleatorio, pregunta:false });
	}
}

function alertaChat(r){
	if (r==1) {
		 $.jAlert({
        	'title': 'Informacion',
        	'content': "No podemos enviar tu mensaje, estas enviando contenido no apropiado.",
        	'theme': 'blue',
        	'btns': { 'text': 'Aceptar' }
    	});
	}
	
}

function validarMensaje(r){
	validar = r.indexOf("<");
	if (validar==0) {alertaChat(1); return validar;}
	validar = r.indexOf(">");
	if (validar==0) {alertaChat(1); return validar;}
	validar = r.indexOf("$");
	if (validar==0) {alertaChat(1); return validar;}
	validar = r.indexOf("http");
	if (validar==0) {alertaChat(1); return validar;}
	validar = r.indexOf("https");
	if (validar==0) {alertaChat(1); return validar;}
}

function preguntar() {
	/*
	'content': '<form>Email:<br><input type="email" name="email">Password:<br><input type="password" name="password"><a href="#" class="forgotPassword">forgot my password</a></form>',
	*/
	 $.jAlert({
        	'title': 'Informacion',
        	'content': '<form>¿Que deseas preguntar?<br><textarea onkeyup="hacerPregunta(this.value);"  name="preguntaUser" id="preguntaUser" maxlength="200"></textarea></form>',
        	'theme': 'blue',
        	'btns':{'text':'Aceptar'},
        	'onClose':function(alert){ return procesarPregunta(true); }
    	});


}

function hacerPregunta(e) {
	pregunta = e;

}

function procesarPregunta(e) {
	$("#preguntaUser").val('');
	chat_user = $('#nombre_usuario').text();
	if (e==true) {
		validarMensaje(pregunta);
		if (validar==0) {pregunta=null;}
		if ((pregunta!=null) && (pregunta.length>0)) {
			socket.emit('mensajeChatUser', { chat_user:chat_user, chat_msg:pregunta, chat_color:color_aleatorio, pregunta:true });
			pregunta='';
		}
	}
}

function dame_color_aleatorio(){ 
   hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F");
   color_aleatorio = "#"; 
   for (i=0;i<6;i++){ 
      posarray = aleatorio(0,hexadecimal.length); 
      color_aleatorio += hexadecimal[posarray];
   } 
   return color_aleatorio;
}
function aleatorio(inferior,superior){ 
   numPosibilidades = superior - inferior 
   aleat = Math.random() * numPosibilidades 
   aleat = Math.floor(aleat) 
   return parseInt(inferior) + aleat 
}

function salir() {
	chat_user = $('#nombre_usuario').text();
	socket.emit('mensajeSalida', {socketId:socket.id, chat_user:chat_user});
	window.location.replace(urlinicio);
}