var ResultMatrix = {
  rock:     [0, -1, 1, 1, -1],
  paper:    [1, 0, -1, -1, 1],
  scissors: [-1, 1, 0, 1, -1],
  lizard:   [-1, 1, -1, 0, 1],
  spock:    [1, -1, 1, -1, 0]
};

var score = {
  computer: 0,
  player: 0
};

function playGame () {
  var startScreen,
      gameScreen;

  startScreen = document.getElementById("game-start-screen");
  gameScreen = document.getElementById("game-play-screen");

  startScreen.style.display = "none";
  gameScreen.style.display = "block";
}

function toggleInfoBox () {
  var infoBox;

  infoBox = document.getElementById("info-box");
  
  if (infoBox.style.display === "block") {
    infoBox.style.display = "none";
  } else {
    infoBox.style.display = "block";
  }
}

function handleUserSelection (aEvent) {
  var playerChoice,
      computerChoice,
      playerScore,
      computerScore,
      messageBox,
      message,
      randomComputerChoice,
      choices;

  choices = ["rock", "paper", "scissors", "lizard", "spock"];
  randomComputerChoice = Math.floor(Math.random() * 5);

  playerScore = document.getElementById("player-score");
  computerScore = document.getElementById("computer-score");

  playerChoice = document.getElementById("player-choice");
  playerChoice.src = "images/" + aEvent.target.dataset.choice + "-140.png";

  computerChoice = document.getElementById("computer-choice");
  computerChoice.src = "images/" + choices[randomComputerChoice] + "-140.png";

  switch (ResultMatrix[aEvent.target.dataset.choice][randomComputerChoice]) {
    case -1:
      message = "You lost.";
      score.computer++;
      computerScore.textContent = score.computer;
      break;

    case 0:
      message = "It's a draw.";
      break;

    case 1:
      message = "You won.";
      score.player++;
      playerScore.textContent = score.player;
      break;

    default:
      message = "Error.";
      break;
  }

  messageBox = document.getElementById("message-box");
  messageBox.textContent = message + " Play again?";
}

function init () {
  var playButton,
      infoButton,
      rock,
      paper,
      scissors,
      lizard,
      spock;

  playButton = document.getElementById("play-button");
  playButton.addEventListener("click", playGame);

  infoButton = document.getElementById("info-button");
  infoButton.addEventListener("click", toggleInfoBox);

  rock = document.getElementById("rock");
  rock.addEventListener("click", handleUserSelection);

  paper = document.getElementById("paper");
  paper.addEventListener("click", handleUserSelection);

  scissors = document.getElementById("scissors");
  scissors.addEventListener("click", handleUserSelection);

  lizard = document.getElementById("lizard");
  lizard.addEventListener("click", handleUserSelection);

  spock = document.getElementById("spock");
  spock.addEventListener("click", handleUserSelection);
}

window.onload = init;
