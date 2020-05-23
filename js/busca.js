var filtro = document.getElementsByClassName('filtro-nome');
  var tabela = document.getElementsByClassName('lista');
  var coisa = document.getElementsByClassName('coisa');
  filtro[0].onkeyup = function() { // acada tecla ativada recebe uma função
    coisa[0].style.display="block"; // vai deixar o tbody como display block
    if(filtro[0].value==""){ // se o filtro estiver vazio deixa diplay none
     coisa[0].style.display="none";
   }
   var nomeFiltro = filtro[0].value.toLowerCase(); // cria a variavel que recebe o valor de filtro tudo minusculo independente de ter maisculo
   for (var i = 1; i < tabela[0].rows.length; i++) { //no for vai ler as linhas 
    var conteudoCelula = tabela[0].rows[i].cells[0].innerText; // cria a variavel que recebe da tabela o texto de cada linha
    var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0; //cir a variavel que ver se o texto da linha(tudo minusculo) etsa presente no nomeFiltro que recebe o valor de Filtro que se for -1 nao esta presente
    tabela[0].rows[i].style.display = corresponde ? '' : 'none'; //os que na[o correspondem(no caso for -1 ou menor) nao aparecem
  }
};
 filtro[1].onkeyup = function() {
    coisa[1].style.display="block";
    if(filtro[1].value==""){
     coisa[1].style.display="none";
   }
   var nomeFiltro = filtro[1].value.toLowerCase();
   for (var i = 1; i < tabela[1].rows.length; i++) {
    var conteudoCelula = tabela[1].rows[i].cells[0].innerText;
    var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
    tabela[1].rows[i].style.display = corresponde ? '' : 'none';
  }
};
