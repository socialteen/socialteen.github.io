var filtro = document.getElementsByClassName('filtro-nome')[0];
  var tabela = document.getElementById('lista');
  var coisa = document.getElementById('coisa');
  filtro.onkeyup = function() {
    coisa.style.display="block";
    if(filtro.value==""){
     coisa.style.display="none";
   }
   var nomeFiltro = filtro.value.toLowerCase();
   for (var i = 1; i < tabela.rows.length; i++) {
    var conteudoCelula = tabela.rows[i].cells[0].innerText;
    var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
    tabela.rows[i].style.display = corresponde ? '' : 'none';
  }
};

