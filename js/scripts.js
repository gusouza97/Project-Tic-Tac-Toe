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
    btnReset[0].addEventListener('click', resetGame, false);

    for(let i = 0; i < square.length; i++){
        square[i].addEventListener('click', squareClick, false);
    }

    //Functions
    // Funcao de clique no quadrado
    function squareClick(e){
        
        let winner;
        
        if(vencedorSelecionado !== null){
            return;
        }

        if(jogadorSelecionado == null){
            jogadorSelecionado = "X"
        }
        
        if(e.target.innerHTML !== ""){
            return;   
        }

        e.target.innerHTML = jogadorSelecionado;
        e.target.style.color = "#000";
        
        winner = checkVitoria();

        if(winner === true){
            defineWinner(jogadorSelecionado);
            return;
        }

        changePlayer();
    }

    // Mudando jogador após a jogada
    function changePlayer(){
        if(jogadorSelecionado == "X"){
            jogadorSelecionado = "O";
            labelJogador[0].innerHTML = "Jogador: O"
        }else{
            jogadorSelecionado = "X";
            labelJogador[0].innerHTML = "Jogador: X"
        }
    }

    // Checando vitória
    function checkVitoria(){

        let winner = false;

        if(square[0].innerHTML !== "" && square[0].innerHTML === square[1].innerHTML && square[1].innerHTML === square[2].innerHTML){
            for(let i = 0; i < 3; i++){
                square[i].style.backgroundColor = "#2ed573";
            }
            winner = true;
        }

        if(square[3].innerHTML !== "" && square[3].innerHTML === square[4].innerHTML && square[4].innerHTML === square[5].innerHTML){
            for(let i = 3; i < 6; i++){
                square[i].style.backgroundColor = "#2ed573";
            }
            winner = true;
        }

        if(square[6].innerHTML !== "" && square[6].innerHTML === square[7].innerHTML && square[7].innerHTML === square[8].innerHTML){
            for(let i = 6; i < 9; i++){
                square[i].style.backgroundColor = "#2ed573";
            }
            winner = true;
        }

        if(square[0].innerHTML !== "" && square[0].innerHTML === square[3].innerHTML && square[3].innerHTML === square[6].innerHTML){
            for(let i = 0; i < 7; i = i+3){
                square[i].style.backgroundColor = "#2ed573";
            }
            winner = true;
        }

        if(square[1].innerHTML !== "" && square[1].innerHTML === square[4].innerHTML && square[4].innerHTML === square[7].innerHTML){
            for(let i = 1; i < 8; i = i+3){
                square[i].style.backgroundColor = "#2ed573";
            }
            winner = true;
        }

        if(square[2].innerHTML !== "" && square[2].innerHTML === square[5].innerHTML && square[5].innerHTML === square[8].innerHTML){
            for(let i = 2; i < 9; i = i+3){
                square[i].style.backgroundColor = "#2ed573";
            }
            winner = true;
        }

        if(square[0].innerHTML !== "" && square[0].innerHTML === square[4].innerHTML && square[4].innerHTML === square[8].innerHTML){
            for(let i = 0; i < 9; i = i+4){
                square[i].style.backgroundColor = "#2ed573";
            }
            winner = true;
        }

        if(square[2].innerHTML !== "" && square[2].innerHTML === square[4].innerHTML && square[4].innerHTML === square[6].innerHTML){
            for(let i = 2; i < 7; i = i+2){
                square[i].style.backgroundColor = "#2ed573";
            }
            winner = true;
        }

        return winner;

    }

    // Definindo vencedor
    function defineWinner(jogadorSelecionado){
        vencedorSelecionado = jogadorSelecionado;
        labelVencedor[0].innerHTML = "Vencedor: " + jogadorSelecionado;
    }

    // Resetando o Game
    function resetGame(e){
        for(let i = 0; i < 9; i++){
            square[i].innerHTML = "";
            square[i].style.backgroundColor = "white";
        }

        labelJogador.innerHTML = "Jogador: X";
        labelVencedor.innerHTML = "Vencedor: ";

        jogadorSelecionado = null;
        vencedorSelecionado = null;

    }

})(window, document);