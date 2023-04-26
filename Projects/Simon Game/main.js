const buttonColors = ["red", "green", "yellow", "blue"];
let gameOutput = [];
let playerOutput = [];
let currentLevel = 1;
let gameOverFlag = false;
let gameStartFlag = false;

document.addEventListener("keydown", function gameStart() {
    if (gameStartFlag) return;
    gameStartFlag = true;
    document.querySelector("h1").innerHTML = "Level " + currentLevel;
    gameSequence();
}, {once : true});

function nextSequence() {
  return Math.floor(Math.random() * 4);
}

function gameOver() {
    document.querySelector("h1").innerHTML = "Game over! Your score: " + currentLevel + ". Press any key to restart the game."
    let originalColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "red";
    setTimeout(function() {
        document.body.style.backgroundColor = originalColor;
    }, 110);
    gameRunning = false;
    gameOverFlag = true;
    document.querySelectorAll(".btn").forEach(function(button) {
        button.disabled = true;
    });
    document.addEventListener("keydown", gameRestart);
}

function gameSequence() {
    gameRunning = true;
    let nextColor = buttonColors[nextSequence()];
    gameOutput.push(nextColor);
    let lastIndex = gameOutput.length - 1;

    setTimeout(function() {
        playSound(gameOutput[lastIndex]);
        flashButton(document.getElementById(gameOutput[lastIndex]));
    }, 1000)

    setTimeout(function() {
        gameRunning = false;
    }, 1000);
}

document.querySelectorAll(".btn").forEach(function(button) {
    button.addEventListener("click", function() {
        if (gameRunning || gameOverFlag || !gameStartFlag) return;
        let color = button.getAttribute('id');
        playerOutput.push(color);
        checkGame();
        playSound(color);
        flashButton(button);
    });
});

function playSound(button) {
    let audio = new Audio("sounds/" + button + ".mp3");
    audio.play();
}

function flashButton(button) {
    let originalColor = button.style.backgroundColor;
    button.style.backgroundColor = "white";
    setTimeout(function() {
        button.style.backgroundColor = originalColor;
    }, 110);
}

function checkGame() {
    if (playerOutput.length === gameOutput.length) {
        if (gameOutput.toString() === playerOutput.toString()) {
            gameSequence();
            currentLevel++;
            document.querySelector("h1").innerHTML = "Level " + currentLevel;
            playerOutput = [];
        } 
        else {
            gameOver();
        }
    }
    else if (playerOutput[playerOutput.length - 1] !== gameOutput[playerOutput.length - 1]) {
        gameOver();
    }         
}

function gameRestart() {
    gameOutput = [];
    playerOutput = [];
    currentLevel = 1;
    gameOverFlag = false;
    gameStartFlag = false;
    document.querySelector("h1").innerHTML = "Level " + currentLevel;
    gameSequence();
}