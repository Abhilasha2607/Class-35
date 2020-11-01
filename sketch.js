var player,form,game;
var playerCount;
var gameState;

var database,position;


function setup(){
    createCanvas(500,500);
   
    database = firebase.database();
    game = new Game()
    game.getState();
    game.start();
    
}

function draw(){
  
}

