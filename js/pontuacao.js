var meusPontos = 0;

function desenhaPontos() {
    fill('rgba(254,109,255,255)');
  textSize(26);
  textFont(fontePontuacao);
  textStyle(BOLD);
  textAlign(CENTER);
  text(meusPontos, xGalinha + 35, 21);
}

function marcaPonto() {
  if (yGalinha < 20) {
    somPonto.play();
    meusPontos += 1;
    retornaGalinha();
  }
}