gameOutput = [];
playerOutput = [];
let currentLevel = 1;
let userScore = 0;
let randomNumber = (Math.floor() * 4);
gameOutput.push(randomNumber);
let red = document.getElementById('red');
let green = document.getElementById('green');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');

red.addEventListener('click', function() {
    playerOut.push(0);
})
green.addEventListener('click', function() {
    playerOut.push(1);
})
yellow.addEventListener('click', function() {
    playerOut.push(2);
})
blue.addEventListener('click', function() {
    playerOut.push(3);
})

function gameSequence() {
    
}