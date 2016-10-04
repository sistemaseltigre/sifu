 $(function() {
  $('#modal-cuota').on('hidden.bs.modal', function(){
   $('#frmCuota').validate().resetForm();
   $(".error").removeClass("error");
   $(".success").removeClass("success");
 });       
});

 $(document).ready(function(){   

   jQuery.validator.addMethod("character", function (value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
      }, 'Introduzca solo letras');
   jQuery.validator.addMethod("numbers", function (value, element) {
        // allow any non-whitespace characters as the host part
        return this.optional(element) || /^[0-9]+$/.test(value);
      }, 'Introduzca solo números');

/*Mask telefono
$('#txtTelefono').mask('(000) 000-0000');
$('#txtEdad').mask('000');
$('#txtCedula').mask('00000000');*/

$('#btnNuevo').on('click',function(){
  $("#nueva-cuota").fadeOut(0).load("nueva_cuota/").hide(0, function(){
    $("#nueva-cuota").fadeIn(1500);
  });
});

});
 
 function editar(id)
 {
  $("#nueva-cuota").fadeOut(0).load("nueva_cuota/"+id).hide(0, function(){
    $("#nueva-cuota").fadeIn(1500);
  });
 }