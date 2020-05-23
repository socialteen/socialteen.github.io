(function($){
  $(function(){
    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.scrollspy').scrollSpy({
        scrollOffset: 30
    });
    $('.tooltipped').tooltip({
        delay: 120
    });
    $('.modal').modal();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $("#shareRoundIcons").jsSocials({ //PLUGIN JSSOCIALS
        showLabel: false,
        showCount: false,
        shares: ["twitter", "facebook", "googleplus", "pinterest"]
    });
    [].slice.call( document.querySelectorAll('a[href="#"') ).forEach( function(el){
        el.addEventListener( 'click', function(ev) { ev.preventDefault(); } );
    });
    var options = [ {selector: '#lancamentos', offset: 500, callback: function(el) { Materialize.toast("Melhores lançamentos de livros em 2017. Atualizado 2h atrás.", 3000 ); } }, {selector: '#semanal', offset: 350, callback: function(el) { Materialize.toast("Semanal do dia 23-29 de julho", 3000 ); } }, {selector: '#semanal', offset: 400, callback: function(el) { Materialize.showStaggeredList($(el)); } }, {selector: '#resenhas', offset: 250, callback: function(el) { Materialize.fadeInImage($(el)); } } ]; Materialize.scrollFire(options); 

  }); // end of document ready
})(jQuery); // end of jQuery name space

var jogo = document.getElementById("tops");
var espera = document.getElementById("espera");
if(jogo != undefined){
    jogo.onclick = function(){
        window.location.href = "jogos/top10.html";
    };
}
if(espera != undefined){
    espera.onclick = function(){
        window.location.href = "jogos/espera.html";
    };
}