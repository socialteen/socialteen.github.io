var ingles = document.getElementsByClassName("fixed-action-btn");
      var Imagens = document.getElementsByClassName("CuriosasImagens");
      ingles[2].onclick =  function(){
        for (var i = Imagens.length - 1; i >= 0; i-=2) {
          Imagens[i].style.display = "block";
        }
        for (var i = Imagens.length - 2; i >= 0; i-=2) {
          Imagens[i].style.display = "none";
        }
      };
      ingles[1].onclick =  function(){
        for (var i = Imagens.length - 2; i >= 0; i-=2) {
          Imagens[i].style.display = "block";
        }
        for (var i = Imagens.length - 1; i >= 0; i-=2) {
          Imagens[i].style.display = "none";
        }
      };