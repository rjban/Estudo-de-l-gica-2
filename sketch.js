function setup() {
  createCanvas(500, 400);
  track[0].loop()
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoinicial();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}


