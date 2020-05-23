var card = document.getElementsByClassName("abrir");
var fechar = document.getElementsByClassName("fechar");
if(card[0] != undefined && fechar[0] != undefined){
	card[0].onclick = function(){card[0].style.height = "150px";if(card[1].style.height=="150px"){card[1].style.height = "50px";fechar[1].click();}};
	fechar[0].onclick = function(){card[0].style.height = "40px";};
	card[1].onclick = function(){card[1].style.height = "150px";if(card[0].style.height=="150px"){card[0].style.height = "50px";fechar[0].click();}};
	fechar[1].onclick = function(){card[1].style.height = "40px";};
	//segundo
	card[2].onclick = function(){card[2].style.height = "150px";if(card[3].style.height=="150px"){card[3].style.height = "50px";fechar[3].click();}};
	fechar[2].onclick = function(){card[2].style.height = "40px";};
	card[3].onclick = function(){card[3].style.height = "150px";if(card[2].style.height=="150px"){card[2].style.height = "50px";fechar[2].click();}};
	fechar[3].onclick = function(){card[3].style.height = "40px";};
	//terceiro
	card[4].onclick = function(){card[4].style.height = "150px";if(card[5].style.height=="150px"){card[5].style.height = "50px";fechar[5].click();}};
	fechar[4].onclick = function(){card[4].style.height = "40px";};
	card[5].onclick = function(){card[5].style.height = "150px";if(card[4].style.height=="150px"){card[4].style.height = "50px";fechar[4].click();}};
	fechar[5].onclick = function(){card[5].style.height = "40px";};
	//quarto
	card[6].onclick = function(){card[6].style.height = "150px";if(card[7].style.height=="150px"){card[7].style.height = "50px";fechar[7].click();}};
	fechar[6].onclick = function(){card[6].style.height = "40px";};
	card[7].onclick = function(){card[7].style.height = "150px";if(card[6].style.height=="150px"){card[6].style.height = "50px";fechar[6].click();}};
	fechar[7].onclick = function(){card[7].style.height = "40px";};
	//quinto
	card[8].onclick = function(){card[8].style.height = "150px";if(card[9].style.height=="150px"){card[9].style.height = "50px";fechar[9].click();}};
	fechar[8].onclick = function(){card[8].style.height = "40px";};
	card[9].onclick = function(){card[9].style.height = "150px";if(card[8].style.height=="150px"){card[8].style.height = "50px";fechar[8].click();}};
	fechar[9].onclick = function(){card[9].style.height = "40px";};
	//sexto
	card[10].onclick = function(){card[10].style.height = "150px";if(card[11].style.height=="150px"){card[11].style.height = "50px";fechar[11].click();}};
	fechar[10].onclick = function(){card[10].style.height = "40px";};
	card[11].onclick = function(){card[11].style.height = "150px";if(card[10].style.height=="150px"){card[10].style.height = "50px";fechar[10].click();}};
	fechar[11].onclick = function(){card[11].style.height = "40px";};
	//setimo
	card[12].onclick = function(){card[12].style.height = "150px";if(card[13].style.height=="150px"){card[13].style.height = "50px";fechar[13].click();}};
	fechar[12].onclick = function(){card[12].style.height = "40px";};
	card[13].onclick = function(){card[13].style.height = "150px";if(card[12].style.height=="150px"){card[12].style.height = "50px";fechar[12].click();}};
	fechar[13].onclick = function(){card[13].style.height = "40px";};
	//oitavo
	card[14].onclick = function(){card[14].style.height = "150px";if(card[15].style.height=="150px"){card[15].style.height = "50px";fechar[15].click();}};
	fechar[14].onclick = function(){card[14].style.height = "40px";};
	card[15].onclick = function(){card[15].style.height = "150px";if(card[14].style.height=="150px"){card[14].style.height = "50px";fechar[14].click();}};
	fechar[15].onclick = function(){card[15].style.height = "40px";};
	//nono
	card[16].onclick = function(){card[16].style.height = "150px";if(card[17].style.height=="150px"){card[17].style.height = "50px";fechar[17].click();}};
	fechar[16].onclick = function(){card[16].style.height = "40px";};
	card[17].onclick = function(){card[17].style.height = "150px";if(card[16].style.height=="150px"){card[16].style.height = "50px";fechar[16].click();}};
	fechar[17].onclick = function(){card[17].style.height = "40px";};
	//decimo
	card[18].onclick = function(){card[18].style.height = "150px";if(card[19].style.height=="150px"){card[19].style.height = "50px";fechar[19].click();}};
	fechar[18].onclick = function(){card[18].style.height = "40px";};
	card[19].onclick = function(){card[19].style.height = "150px";if(card[18].style.height=="150px"){card[18].style.height = "50px";fechar[18].click();}};
	fechar[19].onclick = function(){card[19].style.height = "40px";};
}