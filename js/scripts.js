(function readyJS(win, doc){
    'use strict';

    //Variables
    let jogadorSelecionado = null;
    let vencedorSelecionado = null;

    //Selectors
    let labelJogador = document.getElementsByClassName("jogador");
    let labelVencedor = document.getElementsByClassName("vencedor")
    let btnReset = document.getElementsByTagName("button");
    let square = document.getElementsByClassName("square");

    //Listeners
    for(let i = 0; i < square.length; i++){
        square[i].addEventListener('click', squareClick, false);
    }

    //Functions
    
    function squareClick(e){
        console.log(e.target.id);
    }

})(window, document);