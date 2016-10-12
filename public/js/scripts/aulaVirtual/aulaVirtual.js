function crear_aula(){
	var _token = $("input[name='_token']").val();
	var asunto = $('#asunto_aula').val();
	var descripcion = $('#desc_aula').val();
	var cantidad = $('#cant_aula').val();
	var fecha = $('#fecha_aula').val();
	var idusuario = $('#iduser').val();

	$.post("asignar_aula", {idusuario:idusuario,asunto:asunto,descripcion:descripcion,cantidad:cantidad,fecha:fecha,_token:_token}, function(result){   
    })
    .done(function(result) {
    $.jAlert({
            'title': 'Informacion',
            'content': 'Aula virtual creada con exito.',
            'theme': 'blue',
            'btns': { 'text': 'Aceptar' }});
  	})
  	.error( function(jqXHR,textStatus,errorThrown){
  		var responseText = jQuery.parseJSON(jqXHR.responseText);
        console.log(responseText);
	});
}