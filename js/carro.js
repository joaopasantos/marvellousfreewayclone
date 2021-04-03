// Variáveis do Carro
var larguraCarro = 35;
var alturaCarro = 22;
var xCarro = [];
var yCarro = [];
var velocidadeCarro = [1, 1.75, 1.5, 1.25, 2,
    2, 1.25, 1.5, 1.75, 1
];

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
        }
    }
}

function ultrapassouBordaEsquerda(x) {
    return (x < -larguraCarro);
}

function ultrapassouBordaDireita(x) {
    return (x > width)
}