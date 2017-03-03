var diceFaces = [
    'img/dice1.svg ',
    'img/dice2.svg ',
    'img/dice3.svg ',
    'img/dice4.svg ',
    'img/dice5.svg ',
    'img/dice6.svg '
];

var round = []

function diceRoll() {
    var turn = []    
    for (i=1; i<7; i++){
      var dice = diceFaces[Math.floor(6 * Math.random())];
      document.getElementById("dice"+i).src = dice;
      turn.push(dice);
      }

      round.push(turn);
      return round;

}
