// Rock Paper Scissors

var buttonsArea = document.getElementById("btn-container");
var playerScoreEl = document.getElementById("pScore-container");
var computerScoreEl = document.getElementById("cScore-container");
var pScore = 0;
var cScore = 0;

// DO NOT MAKE ANY CHANGES TO THE PLAYGAME FUNCTION
function playGame(pChoice) {
  switch (pChoice) {
    case "rock":
      displayChoice("player-choice", "images/rock.png");
      break;
    case "paper":
      displayChoice("player-choice", "images/paper.png");
      break;
    case "scissors":
      displayChoice("player-choice", "images/scissors.png");
      break;
  }
  let cChoice = getCompChoice();
  let winner = getResult(pChoice, cChoice);

  showResult(winner);
  updateScore(winner);
  setTimeout(showChoices, 2000);
}

// DO NOT MAKE ANY CHANGES TO THE SHOWCHOICES FUNCTION
function showChoices() {
  buttonsArea.innerHTML = `
        <p>Make your choice</p><button class="choice" onclick="playGame('rock')">Rock</button>
        <button class="choice" onclick="playGame('paper')">Paper</button>
        <button class="choice" onclick="playGame('scissors')">Scissors</button>
    `;

  displayChoice("player-choice", "images/question.png");
  displayChoice("computer-choice", "images/question.png");
}

// ADD YOUR FUNCTIONS BELOW THIS LINE:
// ___________________________________

function displayChoice(string, nameF) {
  document.getElementById(string).src = nameF;
}

function getCompChoice() {
  random = Math.floor(Math.random() * 3);
  if (random == 0) {
    displayChoice("computer-choice", "images/rock.png");
    return "rock";
  } else if (random == 1) {
    displayChoice("computer-choice", "images/paper.png");
    return "paper";
  } else if (random == 2) {
    displayChoice("computer-choice", "images/scissors.png");
    return "scissors";
  }
}

function getResult(player, computer) {
  if (player == computer) {
    return "tie";
  } else if (
    (player == "rock" && computer == "scissors") ||
    (player == "scissors" && computer == "paper") ||
    (player == "paper" && computer == "rock")
  ) {
    return "player";
  } else if (
    (computer == "rock" && player == "scissors") ||
    (computer == "scissors" && player == "paper") ||
    (computer == "paper" && player == "rock")
  ) {
    return "computer";
  }
}

function showResult(winner) {
  if (winner == "player") {
    buttonsArea.innerHTML = "you WON!";
  } else if (winner == "computer") {
    buttonsArea.innerHTML = "Computer WON!";
  } else {
    buttonsArea.innerHTML = "Its a tie!";
  }
}

function updateScore(winner) {
  if (winner == "player") {
    playerScoreEl.innerHTML = pScore += 1;
  } else if (winner == "computer") {
    computerScoreEl.innerHTML = cScore += 1;
  }
}
