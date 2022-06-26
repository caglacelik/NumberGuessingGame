'use strict';

let secretNumber;
let initialScore;
let highScore;

const initialize = function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    initialScore = 20;
    highScore = 0;
    rewriteNumber('?');
}

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const rewriteScore = function (score) {
    document.querySelector('.score').textContent = score;
}

const rewriteNumber = function (value) {
    document.querySelector('.number').textContent = value;
}

const changeBackgroundColor = function (color) {
    document.querySelector('body').style.backgroundColor = color;
}

const changeWidthOfBox = function (width) {
    document.querySelector('.number').style.width = width;
}

initialize();

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    // No input
    if (!guess) {
        displayMessage('No number 😜');
    }

    // Win
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number');
        changeBackgroundColor('#60b347');
        changeWidthOfBox('30rem');
        rewriteNumber(secretNumber);

        if (highScore < initialScore) {
            highScore = initialScore;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    else {
        if (initialScore > 1) {
            displayMessage(guess > secretNumber ? 'To high 👆' : ' To low 👇');
            initialScore--;
            rewriteScore(initialScore);
        }
        else {
            displayMessage('You lost the game 😔');
            changeBackgroundColor('darkred');
            rewriteScore(initialScore);
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    initialScore = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    rewriteScore(initialScore);
    displayMessage('Start Guessing...');
    document.querySelector('.guess').value = '';
    changeBackgroundColor('#222');
    rewriteNumber('?');
    changeWidthOfBox('15rem');
});


