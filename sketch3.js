var marina_01, marina_02, marina_03, marina_04, marina_05, azul_20;
var amp;
var song, analyzer;

function preload() {
  // load images and sound

  song = loadSound('ooh-la.mp3');

  azul_20 = loadImage("azul_20.png");
  marina_01 = loadImage("marina_01.png");
  marina_02 = loadImage("marina_02.png");
  marina_03 = loadImage("marina_03.png");
  marina_04 = loadImage("marina_04.png");
  marina_05 = loadImage("marina_05.png");
}

function mouseClicked() {
  if (song.isPlaying()) {
    song.stop();
  } else {
    song.play();
  }
}


function setup() {


  song.play();
  createCanvas(720, 380);

  //song = loadSound("ooh-la.mp3", loaded);
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
}

function draw() {
  background(0, 0, 0);

  var rms = analyzer.getLevel();

  image(marina_01, 1+rms*20, 0);
  image(marina_02, 1-rms*20, 76);
  image(marina_03, 1+rms*20, 152);
  image(marina_04, 1-rms*20, 228);
  image(marina_05, 1+rms*20, 304);
  image(azul_20, 200+rms*500, 0);
  image(azul_20, 300-rms*400, 76);
  image(azul_20, 150+rms*600, 152);
  image(azul_20, 350+rms*400, 228);
  image(azul_20, 280-rms*200, 304);
}
