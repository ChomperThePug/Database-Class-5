var database;
var backgroundImage;
var gameState = 0;
var playerCount, canvas;
var game, form, player;
var allPlayers;
var cars;
var car1, car2, car3, car4;
var car1I, car2I, car3I, car4I;
var trackI;
var groundI;

function preload() {
  car1I = loadImage("images/car1.png");
  car2I = loadImage("images/car2.png");
  car3I = loadImage("images/car3.png");
  car4I = loadImage("images/car4.png");

  trackI = loadImage("images/track.png");
  groundI = loadImage("images/track.jpg");
}

function setup() {
  database = firebase.database();
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background("white");
  if (playerCount === 4) {
    game.update(1);
  }
  if (gameState === 1) {
    game.play();
  }
  
  if (gameState === 2) {
    game.end();
  }
}