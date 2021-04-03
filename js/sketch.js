var width = 640;
var height = 444;

function setup() {
  createCanvas(640, 444);

  // Inicialização
  for (var i = 0; i < (imagemCarros.length/2); i++) {
    xCarro[i] = 640;
    yCarro[i] = 50 + (35 * i);
  }
  for (var i = imagemCarros.length/2; i < (imagemCarros.length); i++) {
    xCarro[i] = 0 - larguraCarro;
    yCarro[i] = 230 + (35 * (i-5));
  }
}

function draw() {
  background(imagemBackground);

  desenhaGalinha();
  desenhaCarro();
  desenhaPontos();

  movimentaGalinha();
  movimentaCarro();

  carroRetornaPosicaoInicial();
  verificaColisao();
  marcaPonto();
}