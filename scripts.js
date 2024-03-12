var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);

function alertar(event){
    alert("você clicou no botão!!!!" + event.value);
}