var diceFaces = [
    'img/dice1.svg ',
    'img/dice2.svg ',
    'img/dice3.svg ',
    'img/dice4.svg ',
    'img/dice5.svg ',
    'img/dice6.svg'
];

function randNum (diceFaces){
  return Math.floor(diceFaces.length * Math.random());
}

function switchDiceImg(){
  for (i=1; i<7; i++){
    document.getElementById("dice" + i).src = diceFaces[randNum(diceFaces)];
  }
}
