'use strict';


let secretNumber = document.querySelector('.number').textContent = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore;

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = document.querySelector('.number').textContent = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = "Start guessing...";
    document.querySelector('.guess').value = "";
    console.log(document.querySelector('.score').textContent = 20);
});

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = "No number!"
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number";
        if (document.querySelector('.score').textContent > document.querySelector('.highscore').textContent) {
            document.querySelector('.highscore').textContent = document.querySelector('.score').textContent;
        }
        score = 20;
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too Low";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "Game Over!";
            document.querySelector('.score').textContent = 0;
        }

    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "Too High";
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "Game Over!";
            document.querySelector('.score').textContent = 0;
        }

    }
})