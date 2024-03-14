var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

function alertar(event){
    alert("você clicou no botão!!!!" + nome.value);
}