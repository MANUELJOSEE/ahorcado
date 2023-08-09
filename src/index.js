  import keyBoard from "./keboard.js";
 document.addEventListener("DOMContentLoaded", () => {
   const board = new keyBoard();
  document.querySelector("#bot").appendChild(board.createBoard());
 });


