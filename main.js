let gameOver = false;
let currentYe = 200;
let currentCole = 200;
let playerTurn = true;
var healthYe = document.getElementById("innerKanye");
var healthCole = document.getElementById("innerCole");
var dreamz = new Audio("sounds/Dreamz.mp3");
var middle = new Audio("sounds/Middle.mp3");
var kanye1 = new Audio("sounds/Kanye Doctor.mp3");
var kanye2 = new Audio("sounds/Kanye Hit.mp3");
var kanye3 = new Audio("sounds/kanyeAut.mp3");
let win = document.getElementById("winner");

document.getElementById("middleChild").addEventListener("click", middleClick);
document.getElementById("wetDreamz").addEventListener("click", wetClick);

// Clicked on Middle Child
function middleClick() {
  if (playerTurn === true && gameOver === false) {
    let randChild = Math.floor(Math.random() * 20 + 30);
    console.log(randChild);
    currentYe -= randChild;
    let str = `${currentYe}px`;
    healthYe.style.width = str;
    middle.play();
    document.getElementById("damageYe").innerHTML = `-${randChild}`;
    setTimeout(clearYe, 1000);
    if (currentYe <= 0) {
      document.getElementById("playerTurn").style.display = "none";
      win.innerHTML = "YOU WIN!";
      win.style.display = "block";
      healthYe.style.display = "none";
      gameOver = true;
      setTimeout(restart, 5000);
    }
    playerTurn = false;
    setTimeout(kanyeTurn, 6000);
    setTimeout(playerTurnColorSwitch, 1000);
  }
}

// Clicked on Wet Dreamz
function wetClick() {
  if (playerTurn === true && gameOver === false) {
    let randWet = Math.floor(Math.random() * 60 + 5);
    console.log(randWet);
    currentYe -= randWet;
    let str = `${currentYe}px`;
    healthYe.style.width = str;
    dreamz.play();
    document.getElementById("damageYe").innerHTML = `-${randWet}`;
    setTimeout(clearYe, 1000);
    if (currentYe <= 0) {
      document.getElementById("playerTurn").style.display = "none";
      win.innerHTML = "YOU WIN!";
      win.style.display = "block";
      healthYe.style.display = "none";
      gameOver = true;
      setTimeout(restart, 5000);
    }
    playerTurn = false;
    setTimeout(kanyeTurn, 6000);
    setTimeout(playerTurnColorSwitch, 1000);
  }
}

function clearYe() {
  document.getElementById("damageYe").innerHTML = "";
}

// Kanye's Turn

function kanyeTurn() {
  if (gameOver === false && playerTurn === false) {
    let randYe = Math.floor(Math.random() * 20 + 30);
    console.log(randYe);
    if (randYe <= 37) {
      kanye1.play();
    } else if (randYe <= 43) {
      kanye2.play();
    } else {
      kanye3.play();
    }
    currentCole -= randYe;
    let str = `${currentCole}px`;
    healthCole.style.width = str;
    document.getElementById("damageCole").innerHTML = `-${randYe}`;
    setTimeout(clearCole, 1000);
  }
  if (currentCole <= 0) {
    document.getElementById("playerTurn").style.display = "none";
    win.innerHTML = "YOU LOSE!";
    win.style.display = "block";
    healthCole.style.display = "none";
    gameOver = true;
    setTimeout(restart, 5000);
  }
  playerTurn = true;
  setTimeout(playerTurnColorSwitch, 1000);
}

function clearCole() {
  document.getElementById("damageCole").innerHTML = "";
}

function playerTurnColorSwitch() {
  if (playerTurn === true) {
    document.getElementById("playerTurn").innerHTML = "YOUR TURN:";
    document.getElementById("playerTurn").style.color = "rgb(20, 194, 20)";
  } else {
    document.getElementById("playerTurn").innerHTML = "OPPONENT'S TURN";
    document.getElementById("playerTurn").style.color = "red";
  }
}

function restart() {
  gameOver = false;
  currentYe = 200;
  currentCole = 200;
  playerTurn = true;
  win.style.display = "none";
  document.getElementById("playerTurn").innerHTML = "YOUR TURN:";
  document.getElementById("playerTurn").style.color = "rgb(20, 194, 20)";
  document.getElementById("playerTurn").style.display = "block";
  healthCole.style.width = "200px";
  healthYe.style.width = "200px";
  healthCole.style.display = "block";
  healthYe.style.display = "block";
}
