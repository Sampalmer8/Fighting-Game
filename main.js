let playerTurn = true;
var healthYe = document.getElementById("innerKanye");
var healthCole = document.getElementById("innerCole");

if (playerTurn === true) {
  document.getElementById("middleChild").addEventListener("click", middleClick);
  document.getElementById("wetDreamz").addEventListener("click", wetClick);

  // Clicked on Middle Child
  function middleClick() {
    let randChild = Math.floor(Math.random() * 20 + 20);
    console.log(randChild);
    healthYe.style.width -= healthYe.offsetWidth - randChild;
    playerTurn = false;
  }

  // Clicked on Wet Dreamz
  function wetClick() {
    let randWet = Math.floor(Math.random() * 60 + 5);
    console.log(randWet);
    playerTurn = false;
  }
} else {
  // Kanye's Turn
  let playerTurn = true;
}
