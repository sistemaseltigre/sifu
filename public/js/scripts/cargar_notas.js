function calcular(val, posicionj, cortes, posicioni)
{
  var nota=0;
  var definitiva=0;
  if (isNaN($('#nota'+posicionj+posicioni).val())==true )
  {
    $('#nota'+posicionj+posicioni).val(0);
  }   
  if(eval($('#nota'+posicionj+posicioni).val())>eval($('#maximanota').val()))
  {
    $('#nota'+posicionj+posicioni).val(0);
  }
  $('#definitiva'+posicionj).val(0);
  for(i=1;i<=cortes;i++)
  {  
    if($('#nota'+posicionj+i).val()!='')
    {      
      nota+=eval($('#nota'+posicionj+i).val());  
    }  
  }
  //definitiva=(((eval(nota)*100)/eval($('#maximanota')).val()*eval(cortes))/100);
  definitiva=(nota/cortes);
  $('#definitiva'+posicionj).val(definitiva);
}