var canvas, gameState = 0;
var gameState, database;
var contestantCount, allContestants;
var quiz, question, contestant;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount === 4){
    quiz.updateGameState(1);
  }
  if(gameState === 1){
    quiz.play();
  }
}