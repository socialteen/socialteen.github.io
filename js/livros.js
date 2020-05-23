$(document).ready(function() {

	if(window.location.href.indexOf('#modal1') != -1) {
			$('#modal1').modal('open');
	}
	if(window.location.href.indexOf('#modal2') != -1) {
			$('#modal2').modal('open');
	}
	if(window.location.href.indexOf('#modal3') != -1) {
			$('#modal3').modal('open');
	}
	if(window.location.href.indexOf('#modal4') != -1) {
			$('#modal4').modal('open');
	}

	$('.bxslider').bxSlider({
		minSlides: 1,	
	  maxSlides: 8,
	  slideWidth: 250,
	  slideHeight: 250,
	  moveSlides: 1,
	  auto: true,
	  slideMargin:20
	});

});

$ (".livro1").click(function(){
	$( "#conteudo" ).load( "livros/ajax.html div#ajax1" );
});
$ (".livro2").click(function(){
	$( "#conteudo" ).load( "livros/ajax.html div#ajax2" );
});
$ (".livro3").click(function(){
	$( "#conteudo" ).load( "livros/ajax.html div#ajax3" );
});
$ (".livro4").click(function(){
	$( "#conteudo" ).load( "livros/ajax.html div#ajax4" );
});
$ (".livro5").click(function(){
	$( "#conteudo" ).load( "livros/ajax.html div#ajax5" );
});
$ (".livro6").click(function(){
	$( "#conteudo" ).load( "livros/ajax.html div#ajax6" );
});
$ (".livro7").click(function(){
	$( "#conteudo" ).load( "livros/ajax.html div#ajax7" );
});
$ (".livro8").click(function(){
	$( "#conteudo" ).load( "livros/ajax.html div#ajax8" );
});