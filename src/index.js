import { KeyBoard } from "./keboard.js";
import { Result } from "./resultClass.js";
import { Panel } from "./panel.js";
import { BodyParts } from "./BodyParts.js";

const panel = new Panel();
const keys = new KeyBoard();
const body = new BodyParts();

let conta = 7;
let conta2 = 2;
let imagecount = 1;

const vectorLetras = keys.createBoard();
panel.elegirPalabra();

const bot = document.getElementById("bot");
const dummy = document.getElementById("dummy");
const contador = document.getElementById("contador");
const imagen = document.getElementById("imagen");

vectorLetras.map((linea) => {
  const padre = document.createElement("div");
  const hijo = document.createElement("button");
  hijo.textContent = linea;

  padre.appendChild(hijo);
  bot.appendChild(padre);

  hijo.addEventListener("click", (e) => {
    hijo.style.backgroundImage = "none";
    console.log(hijo);
    console.log(e.target.textContent);
    console.log(panel.isLetterCorrect(e.target.textContent));
    console.log(panel.showCorrect(e.target.textContent));
    contador.textContent = conta;
    if (conta == 0) {
      console.log("perdio");
      conta = 0;
      alert("Letra Incorrecta");
    } else {
      if (panel.isLetterCorrect(e.target.textContent)) {
        //el siguiente codigo se va a ejecutar cuando la letra es correcta
        //por hacer: pintar la letra de verde
        
        hijo.classList = "verde";
      } else {
        conta--;
        imagen.src = body.nextImage(imagecount);
        imagecount++;
        hijo.classList = "rojo";

        //por hacer: pintar la letra de rojo
        //el siguiente codigo se va a ejecutar cuando la letra es incorrecta
      }
    }

    dummy.textContent = "";
    vectorLineas.map((linea) => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      div.classList = "rayitas";
      span.textContent = linea;
      div.appendChild(span);
      dummy.appendChild(div);
    });
  });
});

const vectorLineas = panel.dibujarLineas();
console.log(vectorLineas);

vectorLineas.map((linea) => {
  const div = document.createElement("div");
  const span = document.createElement("span");
  div.classList = "rayitas";
  span.textContent = linea;
  div.appendChild(span);
  dummy.appendChild(div);
});
