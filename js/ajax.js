function requisitarArquivo(arquivo,elemento){
    console.log(arquivo);
    $.ajax({
   url:arquivo,
   type:'GET',
   success: function(data){
       alert();
   }
});
}