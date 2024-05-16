const div = document.querySelector('.div-lampada');
const elem = document.querySelector('.img-lampada');
const botaoLiga = document.querySelector('#botaoLigar');
const botaoDesliga = document.querySelector('#botaoDesligar');

botaoLiga.addEventListener('click', alteraImagemLigar);
botaoDesliga.addEventListener('click', alteraImagemDesligar);
div.addEventListener('click', quebraLampada);

var cont = 0;

function quebraLampada(){  
    cont++;
    if(cont >= 2){
        elem.src="img/quebrada.jpg";
    }
    return cont;
}

function alteraImagemLigar(){
    if(cont < 2){
        elem.src="img/ligada.jpg";
    }
}

function alteraImagemDesligar() {
    if(cont < 2){
        elem.src="img/desligada.jpg";
    }
}

/*Outra solução
div.addEventListener('dblclick', quebraLampada);

*/