// Variáveis das Imagens
var imagemEstrada;
var imagemCarro1;
var imagemCarro2;
var imagemCarro3;
var imagemAtor;
var imagemCarros = [];

// Variáveis dos Sons
var somPonto;
var somCarro1;
var somCarro2;
var somCarro3;
var somGalinha;
var somCarros = [];

function preload() {
  imagemCarro1 = loadImage('assets/imagens/carros/darkred-car.png');
  imagemCarro2 = loadImage('assets/imagens/carros/lightyellow-car.png');
  imagemCarro3 = loadImage('assets/imagens/carros/darkgreen-car.png');
  imagemCarro4 = loadImage('assets/imagens/carros/pink-car.png');
  imagemCarro5 = loadImage('assets/imagens/carros/darkblue-car.png');
  imagemCarro6 = loadImage('assets/imagens/carros/orange-car.png');
  imagemCarro7 = loadImage('assets/imagens/carros/lightblue-car.png');
  imagemCarro8 = loadImage('assets/imagens/carros/lightred-car.png');
  imagemCarro9 = loadImage('assets/imagens/carros/lightgreen-car.png');
  imagemCarro10 = loadImage('assets/imagens/carros/darkyellow-car.png');

  somPonto = loadSound('assets/sons/ponto-marcado.ogg');
  somCarro1 = loadSound('assets/sons/car-horn1.ogg');
  somCarro2 = loadSound('assets/sons/car-horn2.ogg');
  somCarro3 = loadSound('assets/sons/car-horn3.ogg');
  somGalinha = loadSound('assets/sons/chicken-sounds.ogg');

  imagemBackground = loadImage('assets/imagens/background.png');
  imagemGalinha = loadImage('assets/imagens/chicken.png');

  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro4, imagemCarro5, imagemCarro6, imagemCarro7, imagemCarro8, imagemCarro9, imagemCarro10];
  somCarros = [somCarro1, somCarro2, somCarro3]
}