let buttonColors = ["red", "green", "yellow", "blue"];
let gameOutput = [];
let playerOutput = [];
gameOutput.push(buttonColors[nextSequence()]);

let currentLevel = 1;
let userScore = 0;

let red = document.getElementById('red');
let green = document.getElementById('green');
let yellow = document.getElementById('yellow');
let blue = document.getElementById('blue');

document.querySelectorAll(".btn").forEach(function(button) {
    button.addEventListener("click", function() {
        var color = button.getAttribute('id');
        playerOutput.push(color);
        playSound(color);
        flashButton(button);
    });
});

red.addEventListener('click', function() {
    playerOutput.push(buttonColors[0]);
    let audio = new Audio("sounds//red.mp3");
    audio.play();
    
    let originalColor = red.style.backgroundColor;
    red.style.backgroundColor = "white";
    setTimeout(function() {
        red.style.backgroundColor = originalColor;
    }, 110);
})
green.addEventListener('click', function() {
    playerOutput.push(buttonColors[1]);
    let audio = new Audio("sounds//green.mp3");
    audio.play();

    let originalColor = green.style.backgroundColor;
    green.style.backgroundColor = "white";
    setTimeout(function() {
        green.style.backgroundColor = originalColor;
    }, 110);
})
yellow.addEventListener('click', function() {
    playerOutput.push(buttonColors[2]);
    let audio = new Audio("sounds//yellow.mp3");
    audio.play();

    let originalColor = yellow.style.backgroundColor;
    yellow.style.backgroundColor = "white";
    setTimeout(function() {
        yellow.style.backgroundColor = originalColor;
    }, 110);
})
blue.addEventListener('click', function() {
    playerOutput.push(buttonColors[3]);
    let audio = new Audio("sounds//blue.mp3");
    audio.play();

    let originalColor = blue.style.backgroundColor;
    blue.style.backgroundColor = "white";
    setTimeout(function() {
        blue.style.backgroundColor = originalColor;
    }, 110);
})

document.addEventListener("keydown", function gameStart() {
    document.querySelector("h1").innerHTML = "Level " + currentLevel;
    console.log("hello");

}, {once : true})


function nextSequence() {
  return Math.floor(Math.random() * 4);
}





