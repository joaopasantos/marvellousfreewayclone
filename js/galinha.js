// Variáveis da Galinha
var larguraGalinha = 31;
var alturaGalinha = 18;
var xGalinha = 160;
var yGalinhaInicial = height - alturaGalinha - 20;
var yGalinha = yGalinhaInicial;
var colidiu = false;


// Funções da Galinha
function desenhaGalinha() {
  image(imagemGalinha, xGalinha, yGalinha, larguraGalinha, alturaGalinha);
}

function movimentaGalinha() {
  if (keyIsDown(UP_ARROW)) {
    yGalinha -= 3;
  } else if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yGalinha += 3;
    }
  }
}

function podeSeMover() {
  return yGalinha < yGalinhaInicial;
}

function verificaColisao() {
  //collideRectRect(x, y, width, height, x2, y2, width2, height2 )
  for (var i = 0; i < imagemCarros.length; i++) {
    colidiu = collideRectRect(xCarro[i], yCarro[i], larguraCarro, alturaCarro,
      xGalinha, yGalinha, larguraGalinha, alturaGalinha);
    if (colidiu) {
      somGalinha.play();
      retornaGalinha();
    }
  }
}

function retornaGalinha() {
  yGalinha = yGalinhaInicial;
}