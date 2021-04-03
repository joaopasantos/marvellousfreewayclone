var width = 640;
var height = 444;

function setup() {
  var myCanvas = createCanvas(640, 444);
  myCanvas.parent('canvas-jogo');

  // Inicialização das Arrays de carros
  for (var i = 0; i < (imagemCarros.length/2); i++) {
    xCarro[i] = width;
    yCarro[i] = 50 + (35 * i);
  }
  for (var i = imagemCarros.length/2; i < (imagemCarros.length); i++) {
    xCarro[i] = 0 - larguraCarro;
    yCarro[i] = 230 + (35 * (i-5));
  }

  // Ajuste do volume dos sons
  somGalinha.setVolume(0.05)
  somPonto.setVolume(0.05)
  for (var i = 0; i < (somCarros.length); i++) {
    somCarros[i].setVolume(0.10);
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