function toggleDark() {
  const bodyEl = document.body;
  bodyEl.classList.toggle("body-dark");
  const secondaryElements = [
    document.getElementById("header"),
    document.getElementById("title"),
    document.getElementById("button-container"),
    document.getElementById("cpu-result"),
    document.getElementById("unsupported"),
    document.getElementById("main"),
    document.getElementById("win"),
    document.getElementById("tie"),
    document.getElementById("lose"),
  ];
  const buttonElements = [
    document.getElementById("light-switch"),
    document.getElementById("reset-button"),
  ];

  for (var i = 0; i < secondaryElements.length; i++) {
    secondaryElements[i].classList.toggle("secondary-light");
    secondaryElements[i].classList.toggle("secondary-dark");
  }
  for (var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].classList.toggle("button-light");
    buttonElements[i].classList.toggle("button-dark");
    buttonElements[i].classList.toggle("button-hover-light");
    buttonElements[i].classList.toggle("button-hover-dark");
  }
  
}

let wins = 0;
let ties = 0;
let loses = 0;

function win() {
  const winEl = document.getElementById("win");
  wins++;
  winEl.innerHTML = "Wins: " + wins;
}
function tie() {
  const tieEl = document.getElementById("tie");
  ties++;
  tieEl.innerHTML = "Ties: " + ties;
}
function lose() {
  const loseEl = document.getElementById("lose");
  loses++;
  loseEl.innerHTML = "Loses: " + loses;
}

function resetRps() {
  const rpsElements = [
    document.getElementById("enemy-rock"),
    document.getElementById("enemy-paper"),
    document.getElementById("enemy-scissors"),
  ];
  const rpsUserElements = [
    document.getElementById("rock"),
    document.getElementById("paper"),
    document.getElementById("scissors"),
  ];
  const rpsCopyElements = [
    document.getElementById("rock-copy"),
    document.getElementById("paper-copy"),
    document.getElementById("scissors-copy"),
  ];
  const resetButton = document.getElementById("reset-button");
  const cpuResult = document.getElementById("cpu-result");

  for (var i = 0; i < rpsElements.length; i++) {
    rpsElements[i].style.display = "none";
    rpsUserElements[i].style.display = "flex";
    rpsCopyElements[i].style.display = "none";
  }
  resetButton.style.display = "none";
  cpuResult.innerHTML = "Click An Icon Below To Get Started!";
}

function runRps(num) {
  const rpsOptions = ["rock", "paper", "scissors"];
  const cpuResult = document.getElementById("cpu-result");
  let cpuChoice = Math.floor(Math.random() * rpsOptions.length);
  const winOptions = ["fine you win...", "uh, I guess you are good."];
  const tieOptions = ["we truly are equal...", "ties are so lame!"];
  const loseOptions = ["HAHA you lose!", "you are so bad!"];
  let messageChoice = Math.floor(Math.random() * winOptions.length);
  const winMessage = winOptions[messageChoice];
  const tieMessage = tieOptions[messageChoice];
  const loseMessage = loseOptions[messageChoice];
  const rpsElements = [
    document.getElementById("enemy-rock"),
    document.getElementById("enemy-paper"),
    document.getElementById("enemy-scissors"),
  ];
  const rpsUserElements = [
    document.getElementById("rock"),
    document.getElementById("paper"),
    document.getElementById("scissors"),
  ];
  const rpsCopyElements = [
    document.getElementById("rock-copy"),
    document.getElementById("paper-copy"),
    document.getElementById("scissors-copy"),
  ];
  const resetButton = document.getElementById("reset-button");

  rpsElements[cpuChoice].style.display = "flex";
  rpsCopyElements[num].style.display = "flex";
  resetButton.style.display = "flex";

  for (var i = 0; i < rpsUserElements.length; i++) {
    rpsUserElements[i].style.display = "none";
  }

  if (num === 0) {
    rpsUserElements[1].style.display = "none";
    rpsUserElements[2].style.display = "none";
    if (cpuChoice === 0) {
      cpuResult.innerHTML = "I choose rock, " + tieMessage;
      tie();
    } else if (cpuChoice === 1) {
      cpuResult.innerHTML = "I choose paper, " + loseMessage;
      lose();
    } else {
      cpuResult.innerHTML = "I choose scissors, " + winMessage;
      win();
    }
  } else if (num === 1) {
    rpsUserElements[0].style.display = "none";
    rpsUserElements[2].style.display = "none";
    if (cpuChoice === 0) {
      cpuResult.innerHTML = "I choose rock, " + winMessage;
      win();
    } else if (cpuChoice === 1) {
      cpuResult.innerHTML = "I choose paper, " + tieMessage;
      tie();
    } else {
      cpuResult.innerHTML = "I choose scissors, " + loseMessage;
      lose();
    }
  } else if (num === 2) {
    rpsUserElements[0].style.display = "none";
    rpsUserElements[1].style.display = "none";
    if (cpuChoice === 0) {
      cpuResult.innerHTML = "I choose rock, " + loseMessage;
      lose();
    } else if (cpuChoice === 1) {
      cpuResult.innerHTML = "I choose paper, " + winMessage;
      win();
    } else {
      cpuResult.innerHTML = "I choose scissors, " + tieMessage;
      tie();
    }
  } else {
    cpuResult.innerHTML = "error!";
  }
}
