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
            'btns': { 'text': 'Aceptar' },
             onClose:function()
              {             
               location.href = app_url+"/crear_aula"; 
             }
          });

  	})
  	.error( function(jqXHR,textStatus,errorThrown){
  		var responseText = jQuery.parseJSON(jqXHR.responseText);
        console.log(responseText);
	});
}



function crearAulaVirtual(id,iduser,dbname){
	var _token = $("input[name='_token']").val();
	$.post("aula", {id:id,iduser:iduser,dbname:dbname,_token:_token}, function(result){   
    })
    .done(function(result) {
     url =	window.location.origin+':8080/'+dbname+'_'+iduser+'_'+id;
     window.open(url, '_blank');
  	 console.log(result);
  	});
}