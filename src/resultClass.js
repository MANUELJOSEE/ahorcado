// import Swal from "sweetalert2";

class Result {
  constructor() {
    this.winMessage = "Victoria, ganaste con la palabra";
    this.loseMessage = "Derrota , perdiste con la palabra";
    this.playAgain = "Jugar de nuevo";
    this.container = document.getElementById("result");
  }

  showResult(isWin, word) {
    console.log(this.winMessage);
    if (isWin) {
      this.container.innerHTML = `${this.winMessage} ${word}<br /><br /><span class="reset" onclick="window.location.reload(true);">${this.playAgainMessage}</span>`;
    } else {
      this.container.innerHTML = `${this.loseMessage} ${word}<br /><br /><span class="reset" onclick="window.location.reload(true);">${this.playAgainMessage}</span>`;
    }
  }
  checkGameStatus() {
    if (this.playersWins()) {
      Swal.fire("you Win!" + this.getUnhiddenWord());
      this.winMessage();
    }
    

    if (this.playersLoes()) {
      Swal.fire("you lose!" + this.getUnhiddenWord());
      this.playAgain();
    }
  }
}
export { Result };
