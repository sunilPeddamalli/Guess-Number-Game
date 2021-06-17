'use strict'

const number = document.querySelector('.number');
const guessNumberInput = document.querySelector('.guess');
const messageInput = document.querySelector('.message');
const score = document.querySelector('.score');
const click = document.querySelector('.check');
const playAgain = document.querySelector('.again');
const highScoreInput = document.querySelector('.highscore');
const body = document.querySelector('body');

let hiddenNumber = Math.trunc(Math.random() * 20) + 1;
// number.textContent = hiddenNumber;

let Score = 20;

function wrongGuess() {
    if (Score > 1) {
        guessNumberInput.value < hiddenNumber ? messageInput.textContent = 'Too Low' : messageInput.textContent = 'Too high'
        Score--;
        score.textContent = Score;
    } else {
        messageInput.textContent = 'Game Over';
        score.textContent = '0'
    }
};

click.addEventListener('click', function () {
    const guessNumber = Number(guessNumberInput.value);
    // to check if inpurt number is between 1 and 20
    if (!(guessNumber > 20 || guessNumber < 1)) {
        // once score is zero click button shoudn't work
        if (!(score.textContent === 0 || messageInput.textContent === 'Correct!!!')) {
            if (guessNumber === hiddenNumber) {
                messageInput.textContent = 'Correct!!!';
                body.style.backgroundColor = 'green';
                number.textContent = hiddenNumber;
                number.style.width = '30rem'
                if (Score > Number(highScoreInput.textContent)) {
                    highScoreInput.textContent = Score;
                }

            } else if (guessNumber < hiddenNumber) {
                // if (Score > 1) {
                //     messageInput.textContent = 'Too Low'
                //     Score--;
                //     score.textContent = Score;
                // } else {
                //     messageInput.textContent = 'Game Over';
                //     score.textContent = '0'
                // }
                wrongGuess();
            } else if (guessNumber > hiddenNumber) {
                // if (Score > 1) {
                //     messageInput.textContent = 'Too high'
                //     Score--;
                //     score.textContent = Score;
                // } else {
                //     messageInput.textContent = 'Game Over';
                //     score.textContent = '0'
                // }
                wrongGuess();
            }
        }
        // else display below message
    } else {
        messageInput.textContent = 'Input Number Between 1 and 20'
    }
});

playAgain.addEventListener('click', function () {
    hiddenNumber = Math.trunc(Math.random() * 20) + 1;
    number.style.width = '15rem'
    number.textContent = '?';
    guessNumberInput.value = '';
    messageInput.textContent = 'Start guessing...';
    Score = 20;
    score.textContent = Score;
    body.style.backgroundColor = '#222';
});

