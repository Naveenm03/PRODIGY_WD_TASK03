
let playerSymbol = "X";
let gameEnded = false;

const winPos = [
  [1, 2, 3], [4, 5, 6], 
  [7, 8, 9], [1, 4, 7], 
  [2, 5, 8], [3, 6, 9], 
  [1, 5, 9], [3, 5, 7]
];

for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener(
    "click", 
    function() {
      if (this.innerHTML === "" && !gameEnded) {
        this.innerHTML = playerSymbol;
        this.classList.add(playerSymbol.toLowerCase());
        let lastPlayer = playerSymbol;
        checkWin(lastPlayer);
        playerSymbol = (playerSymbol === "X") ? "O" : "X";
      }
    }
  );
}

function checkWin(lastPlayer) {
  for (let i = 0; i < winPos.length; i++) {
    if (
      document.getElementById(winPos[i][0]).innerHTML === lastPlayer &&
      document.getElementById(winPos[i][1]).innerHTML === lastPlayer &&
      document.getElementById(winPos[i][2]).innerHTML === lastPlayer
    ) {
      document.getElementById(winPos[i][0]).classList.add("win");
      document.getElementById(winPos[i][1]).classList.add("win");
      document.getElementById(winPos[i][2]).classList.add("win"); 
      gameEnded = true;
      setTimeout(function() {
        alert(lastPlayer + " wins!");
      }, 500);
      break;
    }
  }
}

document.getElementById("reset").addEventListener(
  "click", 
  function() {
    for (let i = 1; i <= 9; i++) {
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).classList.remove("x");
      document.getElementById(i.toString()).classList.remove("o");
      document.getElementById(i.toString()).classList.remove("win");
    }
    gameEnded = false;
    playerSymbol = "X";  // Reset the player symbol to "X"
  }
);