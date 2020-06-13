 $(document).ready(function(){   	

 	$('#btnRedactar').on('click', function(){
 		$('#mensajes').load(app_url+'/mensajes/redactar');
 	});

 	
 	$('#btnReply').on('click',function(){
 		var id=$('#mensaje_id').val();
 		url = app_url+'/mensajes/responder';
 		$.ajax({
 			url : url,
 			type: "POST",
 			data: $('#frmReply').serializeArray(),
 			success: function(data)
 			{  
 				$('#mensajes').load(app_url+'/mensajes/mostrar_entrantes/'+id);
 			},
 			error: function (jqXHR, textStatus, errorThrown)
 			{
 				alert('Error procesando datos');
 			}
 		});
 	});

 });

 var editor1, html = '';
 function mostrar(id)
 {
 	$('#mensajes').load(app_url+'/mensajes/mostrar_entrantes/'+id);
 }
 function mostrar_reply()
 {
 	
 	$( 'textarea#txtMensaje' ).ckeditor();

 	$( "#reply-content" ).toggle();
 }