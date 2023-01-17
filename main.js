let currentYe = 200;
let currentCole = 200;
let playerTurn = true;
var healthYe = document.getElementById("innerKanye");
var healthCole = document.getElementById("innerCole");
var dreamz = new Audio("sounds/Dreamz.mp3");
var middle = new Audio("sounds/Middle.mp3");
var kanye1 = new Audio("sounds/");
var kanye2 = new Audio("sounds/");

document.getElementById("middleChild").addEventListener("click", middleClick);
document.getElementById("wetDreamz").addEventListener("click", wetClick);

// Clicked on Middle Child
function middleClick() {
  if (playerTurn === true) {
    let randChild = Math.floor(Math.random() * 20 + 20);
    console.log(randChild);
    currentYe -= randChild;
    let str = `${currentYe}px`;
    healthYe.style.width = str;
    middle.play();
    document.getElementById("damageYe").innerHTML = `-${randChild}`;
    setTimeout(clearYe, 1000);
    if (currentYe <= 0) {
      console.log("You win");
      healthYe.style.display = "none";
    }
    playerTurn = false;
    setTimeout(kanyeTurn, 4000);
    setTimeout(playerTurnColorSwitch, 1000);
  }
}

// Clicked on Wet Dreamz
function wetClick() {
  if (playerTurn === true) {
    let randWet = Math.floor(Math.random() * 60 + 5);
    console.log(randWet);
    currentYe -= randWet;
    let str = `${currentYe}px`;
    healthYe.style.width = str;
    dreamz.play();
    document.getElementById("damageYe").innerHTML = `-${randWet}`;
    setTimeout(clearYe, 1000);
    if (currentYe <= 0) {
      console.log("You win");
      healthYe.style.display = "none";
    }
    playerTurn = false;
    setTimeout(kanyeTurn, 4000);
    setTimeout(playerTurnColorSwitch, 1000);
  }
}

function clearYe() {
  document.getElementById("damageYe").innerHTML = "";
}

// Kanye's Turn

function kanyeTurn() {
  let randYe = Math.floor(Math.random() * 20 + 30);
  console.log(randYe);
  currentCole -= randYe;
  let str = `${currentCole}px`;
  healthCole.style.width = str;
  document.getElementById("damageCole").innerHTML = `-${randYe}`;
  setTimeout(clearCole, 1000);
  if (currentCole <= 0) {
    console.log("You lose");
    healthCole.style.display = "none";
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
