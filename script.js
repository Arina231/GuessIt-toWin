'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  /// no input///
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!';
    //// player wins///
  } else if (guess === secretNumber) {
    console.log(
      (document.querySelector('.message').textContent = 'Correct Number!')
    );
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    /// low guess///
  } else if (guess < secretNumber) {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent = 'Too Low!!')
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
    ///// high guess////
  } else if (guess > secretNumber) {
    if (score > 1) {
      console.log(
        (document.querySelector('.message').textContent = 'Too High!!')
      );
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game Over';
      document.querySelector('.score').textContent = 0;
    }
  }
});
