const palabras = ["carro", "casa", "moto", "mota", "verde", "azul"];

const btn = document.getElementById("button");
btn.addEventListener("click", iniciar);

function id(str) {
  return document.getElementById(str);
}

// console.log(btn);

function obtener_ramdon(num_min, num_max) {
  const amplitud_valores = num_max - num_min;
  const valor_al_alazar = Math.floor(Math.random() * amplitud_valores);
  +num_min;
  return valor_al_alazar;
}

function iniciar(event) {
  const parrafo = document.getElementById("word_to_guess");
  const cant_palabra = palabras.length;
  const valor_al_alazar = obtener_ramdon(0, cant_palabra);
  const palabrita = palabras[valor_al_alazar];
  console.log(palabrita);
  const cant_letras = palabrita.length;

  for (let i = 0; i < cant_letras; i++) {}
  const span = document.createElement("span");
  parrafo.appendChild(span);
}

