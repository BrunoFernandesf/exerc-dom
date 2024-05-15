const calcular = document.getElementById('calcular')

var nome = document.querySelector("#nome");
var altura = document.querySelector("#altura");
var peso = document.querySelector("#peso");

function Calcula(){
    var texto = document.querySelector("#texto");
    var res;

    res = peso.value / altura.value * altura.value;
    texto.innerHTML = `${nome.value} o seu peso é ${res}`;

}

calcular.addEventListener('click', Calcula)