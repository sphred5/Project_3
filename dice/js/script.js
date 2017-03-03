var diceFaces = [
    'img/dice1.svg ',
    'img/dice2.svg ',
    'img/dice3.svg ',
    'img/dice4.svg ',
    'img/dice5.svg ',
    'img/dice6.svg'
];

round = []

function randNum(diceFaces){
  return Math.floor(diceFaces.length * Math.random());
}

function switchDiceImg(){
  turn = []
  for (i=1; i<=5; i++){
      var diceVal = document.getElementById("dice" + i).src = diceFaces[randNum(diceFaces)];
      turn.push(diceVal);
  }
  round.push(turn);
  return turn;
}
