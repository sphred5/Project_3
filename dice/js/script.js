var diceFaces = [
    'img/dice1.svg ',
    'img/dice2.svg ',
    'img/dice3.svg ',
    'img/dice4.svg ',
    'img/dice5.svg ',
    'img/dice6.svg '
];

function diceRoll() {
    var dice = diceFaces[Math.floor(6 * Math.random())];
    document.getElementById("dicePic").src = dice;
}
