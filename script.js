//1 Passo - Capturar os campos
const qtdResultadosInput = document.getElementById('qtdResultados');
const numeroInicialInput = document.getElementById('inBetweenNumber');
const numeroFinalInput = document.getElementById('andNumber');
const buttonSortear = document.getElementById('buttonSortear');

const buttonLimpar = document.getElementById('buttonLimpar');

const painelResultado = document.getElementById('painelResultado');
const resultado = document.getElementById('resultado');


//console.log(qtdResultadosInput);
//console.log(numeroInicialInput);
//console.log(numeroFinalInput);
//console.log(buttonSortear);

//2 Passo - Fazer o sorteio baseado nos valores dos campos
//a) - Gerar numero aleatorio
//b) - limitar - adicionar um range e gerar um numero aleatorio
// dentro de um intervalo de numero
//c) - Fazer isso uma certa quantidade de vezes(utilizar o qtdResultadosInput)

function sortearNumeros(){
    const qtdResultados = parseInt(qtdResultadosInput.value);
    const numeroInicial = parseInt(numeroInicialInput.value);
    const numeroFinal = parseInt(numeroFinalInput.value);
    
    //3º Passo - Imprimir o resultado
    resultado.innerText = '';
    for(let i = 0; i < qtdResultados; i++){
        const randomNumber = gerarNumeroAleatorio(numeroInicial, numeroFinal);

        if(i < qtdResultados - 1){
            resultado.innerText += randomNumber + '-';
        } else{
            resultado.innerText += randomNumber;
        }
    }

    painelResultado.classList.add('mostrarResultado');

}

function gerarNumeroAleatorio(numeroInicial, numeroFinal){
    return Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;
}

buttonSortear.addEventListener('click', sortearNumeros);

//4 Passo - limpar os campos

function limparCampos(){
    qtdResultadosInput.value = '';
    numeroInicialInput.value = '';
    numeroFinalInput.value = '';
}

buttonLimpar.addEventListener('click', limparCampos);
