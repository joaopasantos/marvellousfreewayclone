// Variáveis do Carro
var larguraCarro = 35;
var alturaCarro = 22;
var xCarro = [];
var yCarro = [];
var velocidadeCarro = [1, 1.8, 1.5, 1.3, 2,
    2.1, 1.2, 1.6, 1.7, 1.1
];
var contadorSomBuzina = 0;

// Funções do Carro
function desenhaCarro() {
    for (var i = 0; i < imagemCarros.length; i++) {
        image(imagemCarros[i], xCarro[i], yCarro[i], larguraCarro, alturaCarro);
    }
}

function movimentaCarro() {
    for (var i = 0; i < (imagemCarros.length / 2); i++) {
        xCarro[i] -= velocidadeCarro[i];
    }
    for (var i = (imagemCarros.length / 2); i < imagemCarros.length; i++) {
        xCarro[i] += velocidadeCarro[i];
    }
}


function carroRetornaPosicaoInicial() {
    for (var i = 0; i < (imagemCarros.length / 2); i++) {
        if (ultrapassouBordaEsquerda(xCarro[i])) {
            xCarro[i] = width;
        }
    }
    for (var i = imagemCarros.length / 2; i < (imagemCarros.length); i++) {
        if (ultrapassouBordaDireita(xCarro[i])) {
            xCarro[i] = 0 - larguraCarro;
            if (i == imagemCarros.length / 2 + 1) {
                executaSonsDeBuzina();
            }
        }
    }
}

function ultrapassouBordaEsquerda(x) {
    return (x < -larguraCarro);
}

function ultrapassouBordaDireita(x) {
    return (x > width)
}

function executaSonsDeBuzina() {
    somCarros[contadorSomBuzina].play();
    contadorSomBuzina++;
    if (contadorSomBuzina >= somCarros.length) {
        contadorSomBuzina = 0;
    }
}