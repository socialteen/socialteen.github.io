var quizSemanal = document.getElementById("QuizSemanal");
var ingles = document.getElementById("en");
var portugues = document.getElementById("pt");
QuizSemanal.onclick = function(){
	requisitarArquivo("curiosidades/quiz2.html",conteudo);
	ingles.onclick = function(){
		requisitarArquivo("curiosidades/quiz4.html",conteudo);
	};
	portugues.onclick = function(){
		requisitarArquivo("curiosidades/quiz2.html",conteudo);
	};
};
var quizMensal = document.getElementById("QuizMensal");
QuizMensal.onclick = function(){
	requisitarArquivo("curiosidades/quiz1.html",conteudo);
	ingles.onclick = function(){
		requisitarArquivo("curiosidades/quiz3.html",conteudo);
	};
	portugues.onclick = function(){
		requisitarArquivo("curiosidades/quiz1.html",conteudo);
	};
};
ingles.onclick = function(){
	requisitarArquivo("curiosidades/quiz4.html",conteudo);
	QuizMensal.onclick = function(){
		requisitarArquivo("curiosidades/quiz3.html",conteudo);
	};
	QuizSemanal.onclick = function(){
		requisitarArquivo("curiosidades/quiz4.html",conteudo);
	};
};
portugues.onclick = function(){
	requisitarArquivo("curiosidades/quiz2.html",conteudo);
	QuizMensal.onclick = function(){
		requisitarArquivo("curiosidades/quiz1.html",conteudo);
	};
	QuizSemanal.onclick = function(){
		requisitarArquivo("curiosidades/quiz2.html",conteudo);
	};
};