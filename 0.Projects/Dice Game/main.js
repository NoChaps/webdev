function randomDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function diceGame() {
    const dice1 = randomDice();
    const dice2 = randomDice();
    document.querySelector(".img1").src = "images\\dice" + dice1 + ".png"
    document.querySelector(".img2").src = "images\\dice" + dice2 + ".png"

    if (dice1 > dice2) {
        document.querySelector("h1").innerHTML = "Player One wins!"
    } else if (dice1 < dice2) {
        document.querySelector("h1").innerHTML = "Player Two wins!"
    } else {
        document.querySelector("h1").innerHTML = "Draw!"
    }
}

function resetGame() {
    document.querySelector(".img1").src = "images\\dice6.png"
    document.querySelector(".img2").src = "images\\dice6.png"
    document.querySelector("h1").innerHTML = "Roll to win!"
}