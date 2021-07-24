"use strict";

let score = 20;
let highscore = 0;
let secretNumber = Math.floor(Math.random() * (20 - 1) + 1);
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
  };

  if (!guess) {
    displayMessage("No Number!");
    score--;
    document.querySelector(".score").textContent = score;
  } else if (guess === secretNumber) {
    displayMessage("True Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#008000";
    document.querySelector(".highscore").textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (guess > secretNumber) {
      displayMessage("Lower");
      score--;
      console.log(score);
      document.querySelector(".score").textContent = score;
    } else if (guess < secretNumber) {
      displayMessage("Higher");
      score--;
      console.log(score);
      document.querySelector(".score").textContent = score;
    }
  }
  if (score < 1) {
    displayMessage("You Loss");
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = null;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").value = secretNumber;
  document.querySelector(".number").textContent = "?";
  console.log(secretNumber);
});
