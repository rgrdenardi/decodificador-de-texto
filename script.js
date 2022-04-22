var texto = document.querySelector('#texto')
var saida = document.querySelector('#saida')
var botaoencripta = document.querySelector('#botao-encripta')
var botaodesencripta = document.querySelector('#botao-desencripta')
var saida1 = document.querySelector('.sem-mensagem')
var botaocopiar = document.querySelector('#copiar')
var copiado = document.querySelector('.copiado')
var textocript = document.querySelector(".cripto")
saida.style.display = "none"


function criptografa() {

   var text = texto.value
   var novoTexto = text.replace(/e/g, "enter")
   var novoTexto1 = novoTexto.replace(/i/g, "imes")
   var novoTexto2 = novoTexto1.replace(/a/g, "ai")
   var novoTexto3 = novoTexto2.replace(/o/g, "ober")
   var novoTexto4 = novoTexto3.replace(/u/g, "ufat")
   var novoTexto5 = novoTexto4.replace(/[^a-z-Z\s]/g, " ")
   
    saida.value = novoTexto5
    saida1.style.display = 'none'
    saida.style.display = 'flex'
    copiado.style.display = 'none'
    textocript.value = saida.value

}

function descriptografa() {

    var text = texto.value
    var novoTexto = text.replace(/enter/g, "e")
    var novoTexto1 = novoTexto.replace(/imes/g, "i")
    var novoTexto2 = novoTexto1.replace(/ai/g, "a")
    var novoTexto3 = novoTexto2.replace(/ober/g, "o")
    var novoTexto4 = novoTexto3.replace(/ufat/g, "u")
    var novoTexto5 = novoTexto4.replace(/[^a-z-Z\s]/g, " ")
    
    saida.value = novoTexto5
    copiado.style.display = 'none'
    textocript.value = saida.value
 
 }

 function copia() {
    var copia = saida.value;
    navigator.clipboard.writeText(copia);
    copiado.style.display = 'inline'
 }

botaoencripta.onclick = criptografa
botaodesencripta.onclick = descriptografa
botaocopiar.onclick = copia

