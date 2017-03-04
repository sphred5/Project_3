var diceFaces = [
    'img/dice1.svg ',
    'img/dice2.svg ',
    'img/dice3.svg ',
    'img/dice4.svg ',
    'img/dice5.svg ',
    'img/dice6.svg'
];
var round = [];


function randNum(number){
  return Math.floor(number * Math.random());
}

function switchDiceImg(){
  var turn = [];
  for (i=1; i<=5; i++){
      var diceVal = document.getElementById("dice" + i).src = diceFaces[randNum(6)];
      turn.push(diceVal);
  }
  round.push(turn);
  return turn;
}

function yahtzee(turn) {

}
