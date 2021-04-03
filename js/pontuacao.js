var meusPontos = 0;

function desenhaPontos() {
    fill('rgba(254,109,255,255)');
  textSize(30);
  textStyle(BOLD);
  textAlign(CENTER);
  textFont('MS Gothic');
  text(meusPontos, xGalinha + 30, 25);
}

function marcaPonto() {
  if (yGalinha < 20) {
    meusPontos += 1;
    retornaGalinha();
  }
}