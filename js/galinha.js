// Variáveis da Galinha
var larguraGalinha = 31;
var alturaGalinha = 18;
var xGalinha = 160;
var yGalinhaInicial = 444 - alturaGalinha - 20;
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

function retornaGalinha() {
  yGalinha = yGalinhaInicial;
}