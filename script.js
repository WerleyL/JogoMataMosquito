
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
var nivel = window.location.search
nivel = nivel.replace('?','')

// essa função ajusta o jogo de acordo com o tamanho da tela
function ajustaTamanhoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;
    console.log(largura, altura);
}
ajustaTamanhoJogo();
// essa função faz o cronometro funcionar, alem de parar a criação de mosca
var cronometro = setInterval(function () {
    tempo -= 1
    if(tempo <0 ){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href ='vitoria.html'
    }
    else{
    document.getElementById('cronometro').innerHTML = tempo;}
}, 1000);

// esse comando cria o mosquito em uma posição aleatoria, remove os mosquitos, alem de diminuir as vidas e levar para a pagina de game over
function radomPosition() {

    // remover mosquito (caso exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();
        if (vidas > 3) {

            window.location.href = 'fim_de_jogo.html'
        } else {
            document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';
            vidas++
        }

    }

    var positionX = Math.floor(Math.random() * largura) - 90
    var positionY = Math.floor(Math.random() * altura) - 90;
    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;
    console.log(positionX, positionY)
    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosca.png';
    mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();
    mosquito.style.left = positionX + 'px';
    mosquito.style.top = positionY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito'
    mosquito.onclick = function () { this.remove() }
    document.body.appendChild(mosquito);
}

//função que ajuda a definir um tamanho alaeatorio entre 3 tamanhos
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3)
    if (classe === 0) { return 'mosquito1' }
    else if (classe === 1) { return 'mosquito2' }
    else { return 'mosquito3' }

}
//função que define o lado que o mosquito vai estar virado
function ladoAleatorio() {
    var lado = Math.floor(Math.random() * 2)
    if (lado == 0) { return 'ladoA' }
    else { return 'ladoB' }
}
